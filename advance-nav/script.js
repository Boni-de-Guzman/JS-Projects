const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems =[nav1,nav2,nav3,nav4,nav5];



// Control Navigation Animation

function navAnimation(dir1,dir2){
    navItems.forEach((nav, i) => {
        console.log(`slide-${dir1}-${i}`,`slide-${dir2}-${i}`);
        nav.classList.replace(`slide-${dir1}-${i + 1}`,`slide-${dir2}-${i+ 1}`);
        
    });
}

function toggleNav(){
    // Toggle:menu Bars Open/closed
    menuBars.classList.toggle('change');
    //Toggle:Menu Active
    overlay.classList.toggle('overlay-active')


    if(overlay.classList.contains('overlay-active')){
       overlay.classList.replace('overlay-slide-left','overlay-slide-right');
        // animate-in
         navAnimation('out','in');
    
    }else{
        overlay.classList.replace('overlay-slide-right','overlay-slide-left');
    //animate out
       navAnimation('in','out');
  
    }
}






//Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click',toggleNav);
});