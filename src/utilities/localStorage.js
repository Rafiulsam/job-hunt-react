const getFromLocalStorage = () => {
    const savedJobs = localStorage.getItem('job-application')
    if (savedJobs) {
        return JSON.parse(savedJobs)
    }
    return [];
}

const addToLocalStorage = id => {
    const savedJobs = getFromLocalStorage()
    const exits = savedJobs.find (jobId => jobId === id)
    if(!exits){
        savedJobs.push(id)
        localStorage.setItem('job-application', JSON.stringify(savedJobs))
    }
}

export{addToLocalStorage, getFromLocalStorage}