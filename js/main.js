  
    window.addEventListener('scroll', onScroll)
    onScroll()
    
    function onScroll() {
        showNavOnScroll()
        openBackToTop()
    }

    function showNavOnScroll(){
        if (scrollY >= 70) {
            navigation.classList.add('scroll')
        }
        else{
            navigation.classList.remove('scroll')
        }
    }

    function openBackToTop(){
        if (scrollY >= 400) {
            BackToTop.classList.add('open')
        }
        else{
            BackToTop.classList.remove('open')
        }
    }
    
    function closeMenu() {
        document.body.classList.remove('show')
    }

    function openMenu() {
        document.body.classList.add('show')
    }

    ScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 400,
    }).reveal('#inicio, .wrapper img, .stats, #servicos, .card,#sobre, #contato');

    