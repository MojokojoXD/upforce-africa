import type { NextApiHandler } from 'next';
import { Jobs } from '../../../utils/mongoConfig';
import type { ApprovedJobs } from '../../../utils/types/jobs';

const adminJobs: NextApiHandler = async (req, res) => {
  let data;
  if (req.method === 'POST') {
    data = JSON.parse(req.body);
    const createTime = new Date(data.createTime);
    const approvedAt = new Date();

    const dataUpdated: ApprovedJobs = {
      ...data,
      createTime,
      approvedAt,
    };
    try {
      const response = await Jobs.sendApproved(dataUpdated);
      if(response)return res.status(400).json({message: 'listing has already been approved'})
      return res.status(200).json({ message: 'job approved' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'job approval failed' });
    }
  } else if (req.method === 'GET') {
    data = await Jobs.getApproved();

    return res.status(200).json({
      responses: data,
      nextPageToken: '0',
    });
  } else return res.status(400).send('bad request');
};

export default adminJobs;
