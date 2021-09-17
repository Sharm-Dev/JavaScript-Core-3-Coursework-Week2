const sectionEl = document.querySelector('section')
const imgEl = document.createElement('img');
sectionEl.appendChild(imgEl)

fetch('https://xkcd.now.sh/?comic=latest')
.then(response => {
    console.log('The response ---->',response)
    return response.json()
})
.then(result => {
    console.log('The result------>', result)
    imgEl.src = result.img
})
.catch(err => {
    console.log(err)
})