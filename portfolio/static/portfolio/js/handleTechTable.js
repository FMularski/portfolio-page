(function (){

    const deviceScreenWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;

    if (deviceScreenWidth <= 1200) {
        const techTable = document.querySelector('table');
        
        techTable.style.transform = 'rotateZ(90deg)';
        techTable.style.marginTop = '10rem';
    
        const techImages = [
            document.querySelector('#python-img'),
            document.querySelector('#django-img'),
            document.querySelector('#html-img'),
            document.querySelector('#sass-img'),
            document.querySelector('#js-img'),
            document.querySelector('#psql-img'),
            document.querySelector('#git-img')
        ];
    
        techImages.forEach(img => {
            img.style.transform = 'rotateZ(-90deg)';
        })

        const techDescs = document.querySelectorAll('.tech-desc');
        techDescs.forEach(desc => {
            desc.style.display = 'none';
        })
    }


})();