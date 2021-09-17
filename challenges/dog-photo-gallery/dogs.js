const buttonEl = document.getElementById('button');

const ulEl = document.getElementById('unorderList');
let liEl = document.createElement('li');
ulEl.appendChild(liEl);

let imgEl = document.createElement('img');
liEl.appendChild(imgEl)

buttonEl.addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
        // console.log(response);
        return response.json();
    })
    .then(result => {
        console.log(result);
        
        imgEl.src = result.message
    })
    .catch(error => {
        console.log(error)
    })
})