const links = document.querySelectorAll(".nav-link");
const wipe = document.querySelector(".screen-wipe");
links.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault(); 
        const destination = this.href;
        wipe.classList.add("show");
        setTimeout(() => {
            window.location.href = destination;
        }, 700);
    });
});