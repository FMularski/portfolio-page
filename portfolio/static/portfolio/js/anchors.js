(function(){
    const line = document.querySelector('#line');
    const arrowToAbout = document.querySelector('#arrow-to-about');

    line.addEventListener('animationend', function(){
        arrowToAbout.style.opacity = 1;
    });

    arrowToAbout.addEventListener('click', function(){
        $('html,body').animate({
            scrollTop: $("#about-me-section").offset().top
        }, 'fast');

        this.remove();
    });
})();