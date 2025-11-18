document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".menu a");

    // obtiene el archivo actual, ej: "desarrollo.html"
    const actual = window.location.pathname.split("/").pop();

    menuLinks.forEach(link => {
        const archivo = link.getAttribute("href");

        if (archivo === actual) {
            link.classList.add("activo");
        } else {
            link.classList.remove("activo");
        }
    });
});
const btnVerMas = document.getElementById("btnVerMas");
    const textoExtra = document.querySelector(".textoExtra");

    btnVerMas.addEventListener("click", () => {
        if (textoExtra.style.display === "none" || textoExtra.style.display === "") {
            textoExtra.style.display = "block"; // mostrar texto extra
            btnVerMas.textContent = "Ver menos";
        } else {
            textoExtra.style.display = "none"; // ocultar texto extra
            btnVerMas.textContent = "Ver más";
        }
    });