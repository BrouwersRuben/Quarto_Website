const title = document.getElementsByTagName("H2");
const ImageRuben = document.getElementById("RubenPic");
const ImageRodzers = document.getElementById("RodzersPic");

window.onload = changePictures();

function changePictures(){
    document.getElementById("TITLE").addEventListener("click", () =>{
        ImageRuben.setAttribute("src", "../media/RippedRuben.png")
        ImageRodzers.setAttribute("src", "../media/RippedRodžers.png")
    })
}
