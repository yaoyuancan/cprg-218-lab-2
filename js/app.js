
const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    console.log('click on here')
    this.classList.toggle('active')
  })
}


