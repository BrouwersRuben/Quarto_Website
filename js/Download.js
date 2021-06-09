onload = () => {
    var a = document.createElement("a");
    a.setAttribute("href", "/download/Game/Quarto.jar");
    a.setAttribute("rel", "noopener");
    a.setAttribute("target", "_blank")
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}