    var countriesData = [];

    async function setApps() {
        const apps = []
        const githubURL = 'https://api.github.com/users/hoseacodes/repos';
        await fetch(githubURL)
        .then(response => response.json())
        .then(data => {
            data.map((repo) => {
                console.log(repo.name)
                apps.push(repo.name)
            }) // Prints result from `response.json()` in getRequest
        })
        .catch(error => console.error({ error }))
        
        await fetch('https://api.github.com/orgs/PattonGroup/repos', {
            headers: new Headers({
                'User-agent': 'Mozilla/4.0 Custom User Agent'
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log("---PattonGroup---")
            data.map((repo) => {
                console.log(repo.name)
                apps.push(repo.name)
            }) // Prints result from `response.json()` in getRequest
            console.log("------")
        })
        .catch(error => console.error({ error }))
        
        await fetch('https://api.github.com/orgs/Ambitious-Concepts-Labs/repos', {
            headers: new Headers({
                'User-agent': 'Mozilla/4.0 Custom User Agent'
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log("---Ambitious-Concepts-Labs---")
            data.map((repo) => {
                console.log(repo.name)
                apps.push(repo.name)
            }) // Prints result from `response.json()` in getRequest
            console.log("------")
        })
        .catch(error => console.error({ error }))
        
        console.log({ app: apps.sort() })
        countriesData = [...apps];

        return apps.sort()
    }
    
    
    function waitForDataLoad() {
        return new Promise(function (resolve, reject) {
            setApps();
            // process your data load or any processs
            setTimeout(function () {
                resolve();
            }, 3000)
            
            
        })
    }
    
    waitForDataLoad().then(function (result) {
        // use the result here
        // Further process here
        // this script will be only loaded when above function return resolve();
        console.log('before')
        setOptions()
        console.log("data is loaded compeletly")
    });
    
    function setOptions() {
        const appDropdown = document.querySelector('#appDropdown');
        const countriesDropDown = document.getElementById("appDropdown");
        console.log({ appDropdown, countriesDropDown, 'here': "now" })
        console.log({ countriesData })
        // Create New Option.
        for (let app of countriesData) {
            console.log({app}, 'steOptions')
            const newOption = $('<option>');
            newOption.attr('value', app).text(app);
            // Append that to the DropDownList.
            $('#appDropdown').append(newOption);
        }

    }
