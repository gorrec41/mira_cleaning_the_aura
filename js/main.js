$(document).ready(function(){
    const navbtn = document.querySelector('.btn')
    const modal = document.querySelector('.modalka')
    const acc = document.getElementsByClassName("four_accordion")
    modal.classList.remove('activ')
    navbtn.addEventListener('click', function(){
        modal.classList.toggle('activ')
    })


    function onIn() {
        acc.mouseover(function () {
            this.classList.mouseover("active_accordion")
            console.log('ffff')
        })
    }



    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("active_accordion")
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none"
        }
        else {
            panel.style.display = "block"
        }
    })
    }
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:5,
        nav:true,
        items:1,
        center:true,
    })
})