import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[]),
    new Route("/galerie", "La galerie", "/pages/galerie.html",[], "/js/galerie.js"),
    new Route("/connexion", "Connexion", "/pages/auth/connexion.html",["disconnected"], "/js/auth/connexion.js"),
    new Route("/inscription", "Inscription", "/pages/auth/inscription.html",["disconnected"], "/js/auth/signup.js"),
    new Route("/compte", "Mon Compte", "/pages/auth/compte.html",["client", "admin"]),
    new Route("/changementmdp", "Modifier votre mot de passe", "/pages/auth/changementmdp.html",["client", "admin"]),
    new Route("/allresa", "Vos Reservation", "/pages/AllResa/allresa.html", ["client"]),
    new Route("/reserver", "Reservation", "/pages/AllResa/reserver.html", ["client"]),
];
//Le titre s'affiche comme ceci : Route.titre - websitename

export const websiteName = "Quai Antique";