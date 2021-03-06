const navSlide = () => {
    
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    const pageContent = document.querySelector('.grid-container');

    burger.addEventListener('click', ()=> {

        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
                if (!Object.is(pageContent, null)) {
                    pageContent.style.animation = '';
                }
            }
            else {
                link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 7 + 0.5}s`;
                if (!Object.is(pageContent, null)) {
                    pageContent.style.animation = 'movePageContentDown 0.3s ease forwards';
                }
            }
    
        });

        burger.classList.toggle('toggle');

    });

}

navSlide();