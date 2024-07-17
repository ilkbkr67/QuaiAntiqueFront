import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/connexion", "Connexion", "/pages/auth/connexion.html"),
    new Route("/inscription", "Inscription", "/pages/auth/inscription.html"),
    new Route("/compte", "Mon Compte", "/pages/auth/compte.html"),
    new Route("/changementmdp", "Modifier votre mot de passe", "/pages/auth/changementmdp.html"),
];
//Le titre s'affiche comme ceci : Route.titre - websitename

export const websiteName = "Quai Antique";