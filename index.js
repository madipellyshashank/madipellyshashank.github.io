const links = {
    maths: {
        'McGrawhill' : 'https://drive.google.com/file/d/1f70QsjIx8-EmbWtQsZnxrM2NN6dCVQ6O/view?usp=drivesdk',
        'Ramanujan': 'https://drive.google.com/file/d/1fH5DHtiCrG3HaW83pEWy_qclHuetxGYW/view?usp=drivesdk'
    }
};



window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button.btn-go');
    const results = document.querySelector('div.results ul');

    button.addEventListener('click',() => {

        // const selectBoxValue = document.querySelector('select').value;
        // const inputValue = document.querySelector('input').value;
        

        // ping server with above details

        const searchLinks = links.maths;
        let searchItems = ``;
        Object.keys(searchLinks).forEach(key => {
            searchItems += `<li><a href='${searchLinks[key]}'>${key}</a></li>`;
        })

        results.innerHTML = searchItems;
        
    });
});