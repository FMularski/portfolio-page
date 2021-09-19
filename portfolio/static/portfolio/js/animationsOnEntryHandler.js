(function(){

    // elements to animate on their entries
    const aboutSection = document.querySelector('#about');
    // ...

    function callbackFunc(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // do stuff when they are on screen
                aboutSection.style.opacity = '1';
                // ...
            }
        });
    }

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4
    }

    let observer = new IntersectionObserver(callbackFunc, options);
    // observe them
    observer.observe(aboutSection);
    // ...
})();