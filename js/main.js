/**
 * See the README file for more information. API endpoint here for convenience:
 * http://safetybelt.pythonanywhere.com/quotes/random
 */


function generate() {
    const elem = document.getElementById('quote');
    fetch("http://safetybelt.pythonanywhere.com/quotes/random")
        .then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
            elem.innerHTML = data.quote;
        })
}

(function() {
    const button = document.getElementById('generate');
    if (button) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            generate();
        });
    }
})();