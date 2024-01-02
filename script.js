let prevScrollPos = window.pageYOffset;
    window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    }else{
        document.getElementById("navbar").style.top = "-100%";
    }
    prevScrollPos = currentScrollPos;
    }

    const popUp = document.getElementById('popUp');
    function openPopUp(){
        popUp.classList.add('open-popUp');
    }
    function closePopUp(){
        popUp.classList.remove('open-popUp');
    }

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    })
    
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', ()=>{
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }))