"use strict"

const maincolumn = document.querySelectorAll('.messagecol')
const lowerText= document.querySelector('.lowercol')


for (let i = 0; i < maincolumn.length; i++) {
  const element = maincolumn[i];
  element.addEventListener('click', function(){
    lowerText.classList.Toggle('hidden')
  })
  }
  

 


