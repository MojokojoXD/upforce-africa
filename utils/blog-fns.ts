
const perigonUrl = 'https://api.goperigon.com/v1/all'

const dateStringOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
}

function formatDateString(date:Date){
    const offset = date.getTimezoneOffset();
    const timeWithOffset = new Date(date.getTime() - (offset*60*1000))
    
    //@ts-ignore
    return timeWithOffset.toISOString(undefined,dateStringOptions).split('T')[0];
}

function getDatePeriod () {
    const today = new Date();
    const fromDate = new Date();
    fromDate.setMonth(fromDate.getMonth() - 3)


    return {
        from: formatDateString(fromDate),
        today: formatDateString(today),
    }
}

export async function getStories () {
    const datePeriod = getDatePeriod()
    const stories = await fetch(`${perigonUrl}?apiKey=${process.env.PERIGON_KEY}&from=${datePeriod.from}&to=${datePeriod.today}&source=briterbridges.com/stories&showNumResults=true&showReprints=false&excludeLabel=Non-news&excludeLabel=Opinion&excludeLabel=Paid News&excludeLabel=Roundup&excludeLabel=Press Release&sortBy=date&source=techcabal.com&source=techcrunch.com/tag/africa&source=ifc.org&source=techpoint.africa&source=disrupt-africa.com&q=tech&size=50`)

    if (stories.ok){
        const data = await stories.json()
        return data;
    }else{
        console.log(stories)
        throw new Error('fetching stories failed')
    }

    return stories;
}