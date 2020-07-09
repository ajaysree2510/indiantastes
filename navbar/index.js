
const navSlide = ()=>{
    const burger= document.querySelector('.burger');
    const nav= document.querySelector('.nav-links');
    const navLinks= document.querySelectorAll('.nav-links li')


    burger.addEventListener('click', ()=>{

        //toggle burger
        nav.classList.toggle('nav-active');
        //animation li
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation="";
            }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7}s`
            }
        })
        //burger animation

        burger.classList.toggle('toggle');


    });


    
}
const navUl= document.querySelectorAll('nav ul')


document.addEventListener('click',()=>{
    console.log('document clicked')

 var navClass=  document.getElementById('navigate').className;
 console.log(navClass)
    if(navClass==='nav-links nav-active'){
        console.log("Navigation active")
        
        document.getElementById('navigate').className= 'nav-links';
    }
})


navSlide();