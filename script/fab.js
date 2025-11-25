(function(){
    const bottomNavbar = document.querySelector('.bottom-navbar');
    const onclicks = [];
    let state = [];
    let bottom = 0;
    let count = 0;
    
    function repositionFAB(target) {
        const height = target.getBoundingClientRect().height;
        if(height > 1) {
            count++;
            target.style.bottom = `calc(${bottom}px + (1rem * ${count}))`;
            bottom += height;
        }

        if(target && !onclicks.includes(target)) {
            onclicks.push(target);
        }
    }

    function repositionAllFAB() {
        state = [];
        bottom = bottomNavbar ? bottomNavbar.getBoundingClientRect().height : 0;
        count = 0;
        document.querySelectorAll(".primary-fab").forEach((target) => {
            repositionFAB(target);
        });
    }

    repositionAllFAB();
    window.repositionAllFAB = repositionAllFAB;

    window.addEventListener('resize', repositionAllFAB);

    window.addEventListener('click', (ev) => {
        const idx = onclicks.indexOf(ev.target || ev.srcElement);
        if(idx >= 0) {
            onclicks[idx].classList.toggle('active');
        }
    });

    window._onclicks = onclicks;
})();