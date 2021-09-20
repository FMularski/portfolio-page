(function(){

    // elements to animate on their entries
    const aboutSection = document.querySelector('#about');

    const techImages = [
        document.querySelector('#python-img'),
        document.querySelector('#django-img'),
        document.querySelector('#html-img'),
        document.querySelector('#sass-img'),
        document.querySelector('#js-img'),
        document.querySelector('#psql-img'),
        document.querySelector('#git-img')
    ];

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }

    function aboutSectionCallback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.style.opacity = '1';
            }
        });
    }
    let aboutSectionObserver = new IntersectionObserver(aboutSectionCallback, options);
    aboutSectionObserver.observe(aboutSection);



    function setObserver(img) {
        function observerImgCallback(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    img.style.transform = 'rotateY(360deg)';
                }
            });
        }
        let observer = new IntersectionObserver(observerImgCallback, options);
        observer.observe(img);
    }

    techImages.forEach(img => {
        setObserver(img);
    });

})();