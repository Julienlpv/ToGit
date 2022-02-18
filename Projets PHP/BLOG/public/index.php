<?php

// Inclusion du fichier 
require '../app/config.php';


// Inclusion du fichier contenant les contrôleurs
require PROJECT_DIR . '/SRC/controllers/controllers.php';
// Inclusion des fonctions relatives à la BDD
require PROJECT_DIR . '/library/database.php';
// Inclusion des fichiers de modèle
require PROJECT_DIR . '/SRC/models/articleModel.php';
require PROJECT_DIR . '/SRC/models/commentModel.php';
// Plusieurs possibilité pour gérer les URL
// http://localhost/PHP/BLOG/public/index.php/article/37 ou http://localhost/PHP/BLOG/public/index.php/article?id=37 ou http://localhost/PHP/BLOG/public/index.php?action=article&id=37 


// On récupère l'action de l'URL courante par défaut, on va sur la page d'accueil
$action = 'home';
if (array_key_exists('action',$_GET)) {
$action = $_GET['action'];
} 

/**
 * ou en ternaire 
 * $action = $_GET['action'] ?? 'home';
 */


// Routing : trouver et exécuter le controller associé à l'action 
switch($action) {

    case 'home': 
        genHome();
        break;
    case 'article':
        genArticle();
        break;
    case 'contact':
        genContact();
        break;
    case 'mentions':
        genMentions();
        break;
    
    default:
        echo 'ERREUR 404: Page introuvable';
        break;
}

