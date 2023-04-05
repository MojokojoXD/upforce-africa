import { FunnelIcon } from '@heroicons/react/24/outline';
import { Menu, Transition } from '@headlessui/react';
import { useState } from 'react';

interface FilterButtonProps {
    getSortOrder: (sortBy: 'new' | 'oldest' | undefined) => void;
}

type SortOrder = 'new' | 'oldest' | undefined;

const FilterButton: React.FC<FilterButtonProps> = ({
  getSortOrder
}) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>(undefined);

  return (
    <Menu as={'div'} className='relative'>
      <Menu.Button className={'btn btn-ghost btn-sm'}>
        sort <FunnelIcon className='w-4 ml-1 inline text-gray-700' />
      </Menu.Button>
      <Transition
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Menu.Items
          className={
            'absolute mt-1 rounded py-2 px-3 bg-white border shadow-sm'
          }
        >
          <Menu.Item>
            <button
              className='btn btn-ghost btn-xs capitalize font-light text-gray-800'
              onClick={() => getSortOrder('new')}
            >
              New
            </button>
          </Menu.Item>
          <Menu.Item>
            <button
              className='btn btn-ghost btn-xs capitalize font-light text-gray-800'
              onClick={() => getSortOrder('oldest')}
            >
              Oldest
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default FilterButton;
