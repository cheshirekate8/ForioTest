/**
 * See the README file for more information. API endpoint here for convenience:
 * http://safetybelt.pythonanywhere.com/quotes/random
 */


function generate() {
    const quote = document.getElementById('quote');
    const author = document.getElementById('author');
    fetch("http://safetybelt.pythonanywhere.com/quotes/random")
        .then(response => {
            if (!response.ok) {
                const button = document.getElementById('generate');
                button.click();
                return;
            }
            return response.json()
        }).then(data => {
            console.log(data)
            
            quote.innerHTML = data.quote;
            author.innerHTML = `- ${data.author}`
        }).catch(error => {
            console.log(error)
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
    button.click();
})();