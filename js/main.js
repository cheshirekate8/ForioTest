/**
 * See the README file for more information. API endpoint here for convenience:
 * http://safetybelt.pythonanywhere.com/quotes/random
 */


function generate() {
    const quote = document.getElementById('quote');
    const author = document.getElementById('author');
    const container = document.getElementById('quote-container')
    const button = document.getElementById('generate');
    fetch("http://safetybelt.pythonanywhere.com/quotes/random")
        .then(response => {
            if (!response.ok) {
                button.click();
                return;
            }
            return response.json()
        }).then(data => {
            console.log(data)
            quote.innerHTML = data.quote;
            author.innerHTML = `- ${data.author}`
            return data
        }).then(data => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            container.setAttribute("style", `background-color: #${randomColor};`)
            button.setAttribute("style", `background-color: #${randomColor};`)
            container.classList.add('animation-trigger');
            setTimeout(() => {
                container.classList.remove('animation-trigger');
            }, 1001)
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