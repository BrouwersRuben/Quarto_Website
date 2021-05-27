
const ImageRuben = document.getElementById("RubenPic");
const ImageRodzers = document.getElementById("RodzersPic");

// Credits for the photoshop edits go to Ruben's amazing girlfriend

document.getElementById("TITLE").addEventListener("click", () =>{
    ImageRuben.setAttribute("src", "../media/RippedRuben.png")
    ImageRodzers.setAttribute("src", "../media/RippedRodžers.png")
})

document.getElementById("EXPL").addEventListener("click", () =>{
    ImageRuben.setAttribute("src", "../media/Ruben.png")
    ImageRodzers.setAttribute("src", "../media/Rodžers.png")
})