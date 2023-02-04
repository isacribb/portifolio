const projetosNav = document.querySelector('#projetos-nav');
const tecnologiasNav = document.querySelector('#tecnologias-nav');
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

// click
projetosNav.addEventListener('click', () => {
    window.scroll({ top: window.scrollTo(0, 1100), behavior: "smooth" })
})

tecnologiasNav.addEventListener('click', () => {
    window.scroll({ top: window.scrollTo(0, 580), behavior: "smooth" })
})

// scroll
function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.8)
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
        element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if(target.length){
    window.addEventListener('scroll', function(){
        animeScroll();
    })
}
