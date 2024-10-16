//
//	Sticky bar
//
(function() {
    // Get the sticky bar and the trigger element
    const stickyBar = document.querySelector(".sticky-bar");
    const triggerElement = document.querySelector(".js-show-sticky-bar");
    // Function to check when the sticky bar should appear
    function checkStickyBar() {
        const triggerPosition = triggerElement.getBoundingClientRect().top;
        if (triggerPosition <= 0) // Slide the sticky bar down when the trigger element is reached
        //stickyBar.style.top = '0';
        stickyBar.classList.add("is-sticky");
        else // Hide the sticky bar when scrolled back above the trigger
        //stickyBar.style.top = '-64px';
        stickyBar.classList.remove("is-sticky");
    }
    // Listen for the scroll event
    window.addEventListener("scroll", checkStickyBar);
})();

//# sourceMappingURL=index.1c974c2f.js.map
