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