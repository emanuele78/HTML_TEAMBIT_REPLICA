$(function () {
    let clonedNavbar = $(".navbar").clone();
    const SCROLLED_NAVBAR_START = 330;
    const SLIDING_DURATION = 200;
    let navbarSlidingDownStarted = false;
    let navbarSlidingDownCompleted = false;
    clonedNavbar.addClass("scrolled");
    clonedNavbar.slideUp(0);

    $(window).scroll(() => {
        let topPosition = $(window).scrollTop();
        if (topPosition > SCROLLED_NAVBAR_START) {
            if (!navbarSlidingDownStarted) {
                navbarSlidingDownStarted = true;
                $("body").prepend(clonedNavbar);
                clonedNavbar.slideDown(SLIDING_DURATION, () => {
                    navbarSlidingDownCompleted = true;
                });
            }
        } else {
            if (navbarSlidingDownCompleted) {
                clonedNavbar.slideUp(SLIDING_DURATION, () => {
                    clonedNavbar.remove();
                    navbarSlidingDownCompleted = false;
                    navbarSlidingDownStarted = false;
                });
            }
        }
    });
});

