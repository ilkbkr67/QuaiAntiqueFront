const galerieImage = document.getElementById("allImages");
let monImage = getImage("titre","../images/cooks-1662709_1280.jpg");

//Récuperer les informations des images
let titre = '<img src=x onerror="window.location.replace(\'https://google.fr\')"/>';
let imgSource = "../images/cooks-1662709_1280.jpg";

let monImage = getImage(titre, imgSource);

galerieImage.innerHTML = monImage

function sanitizeHTML(text){
    const tempHtml = document.createElement('div');
    tempHtml.textContent = text;
    return tempHtml.innerHTML;
}

function getImage(titre, urlImage){
    titre = sanitizeHTML(titre);
    urlImage = sanitizeHTML(urlImage);

    return `<div class="col p-3"> 
        <div class="image-card text-white">
                <img src= ${urlImage} class="rounded w-100">
                <p class="titre-image">${titre}</p>
            <div class="action-image-button" data-show="admin">
                <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-outline-light"><i class="bi bi-trash"></i></button>
            </div>
        </div>
    </div>`;

}