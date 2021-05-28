const back = document.getElementById("BackButton")

back.addEventListener("click", (event) => {
    event.preventDefault();
    location.href = 'About.html';
})