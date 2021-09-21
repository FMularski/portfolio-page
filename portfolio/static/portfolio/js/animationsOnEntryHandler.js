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


    const fadingInElements = [
        document.querySelector('#tech-stack-header'),
        document.querySelector('#projects-header'),
        document.querySelector('#projects-header-2'),
    ];

    const projects = document.querySelectorAll('.project');

    projects.forEach(project => fadingInElements.push(project));

    function setFadingObserver(el) {
        function observerFadingInElementCallback(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    el.classList.remove('hidden');
                    el.classList.remove('hidden-right');
                }
            });
        }
        let observer = new IntersectionObserver(observerFadingInElementCallback, options);
        observer.observe(el);
    }

    fadingInElements.forEach(el => {
        setFadingObserver(el);
    })



})();