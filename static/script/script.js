window.onload = fadeout;
           
var fade = document.querySelector('.loader-container');
var body = document.getElementsByTagName('body'); 

function fadeout() {

    var intervalID = setInterval(function () {
    
        if (!fade.style.opacity) {
            fade.style.opacity = 1;
        }
        
        if (fade.style.opacity > 0) {
            fade.style.opacity -= 0.1;
        } else {
            clearInterval(intervalID);
        } }, 250);   
      
        if(fade.style.opacity == 0){
            fade.style.display = 'none';
        }
}

let mainTitle = document.getElementById('main-title'); 
const text = 'Développeuse Web Junior'
let i=0;
let currentPhrase = []; 

function typeTitle(){
    mainTitle.innerHTML = currentPhrase.join('');

    if(i<text.length){
        currentPhrase.push(text[i]);
        
        i++;
        
    }
    
    setTimeout(typeTitle, 100); 
}

typeTitle();

const ratio = 0.2
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
  
const slidingElements = document.querySelectorAll('.reveal'); 

window.addEventListener('scroll', ()=>{
    const {scrollTop, clientHeight} = document.documentElement; 

    slidingElements.forEach(element => {

        const topElementToTopViewport = element.getBoundingClientRect().top; 

        if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.90){
        element.classList.add('active');
    }
        
    });
    
})

const navBar = document.querySelector('.navbar-sliding');
const homePage = document.getElementById('accueil'); 

window.addEventListener('scroll', () =>{
    const {scrollTop, clientHeight} = document.documentElement;

    const topElTopViewport = navBar.getBoundingClientRect().top;
    const homePageHeight = homePage.getBoundingClientRect().height;

    if(scrollTop > (scrollTop + topElTopViewport).toFixed()){
        navBar.classList.add('fixed')
    } else if(scrollTop <= homePageHeight){
        navBar.classList.remove('fixed')
    }

    console.log(navBar.getBoundingClientRect()); 
    console.log(homePage.getBoundingClientRect())
})  

