"use strict"
 
const FAQ = document.querySelectorAll('.FAQS')

FAQ.forEach(element => {
    element.addEventListener("click",()=>{
        element.classList.toggle("active")
        element.classList.toggle("rotate")
    })
    
});
   






  

 


