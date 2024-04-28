const getNowApplication = id => {
    const storedGetApplication = getStoredApplication();
    const exists = storedGetApplication.find(tourismID => tourismID === id);
    if (!exists) {
        storedGetApplication.push(id);
        localStorage.setItem('get-application', JSON.stringify(storedGetApplication));
    }
};

const getStoredApplication = () => {
    const storedGetApplication = localStorage.getItem('get-application');
    if (storedGetApplication) {
        return JSON.parse(storedGetApplication);
    }
    return [];
};

export { getStoredApplication, getNowApplication };