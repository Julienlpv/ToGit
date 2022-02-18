<?php
// Inclusion des dépendances 
require 'functions.php';
require 'todolist_functions.php';



const TITLE = 0;
const DESC = 1;
const DATE = 2;
const PRIO = 3;
// Initialisation des variables pour remplir le formulaire
$title = '';
$description = '';
$date = null; 
$priority = 'priority-basse';



if (!empty($_POST)) {
// On récupère le titre saisi
$title = $_POST['title'];
// la description
$description = $_POST['description'];
// la date
$date = $_POST['date'];
// le niveau de priorité
$priority = $_POST['priority'];
// Puis on crée une variable data qui va regrouper les données saisies


$errors = validate($title, $description, $date, $priority);

if (empty($errors)) {
// VALIDATION DES DONNEES    
// On ouvre le fichier csv en écriture et pour qu'il soit crée s'il n'existe pas
// On écrit les données saisies par l'utilisateur au format CSV

addTasks($title, $description, $date, $priority);

    // Redirection vers l'index php en GET (Pour perdre les données en POST)
    header('Location: index.php');
    exit; // C'est le POST redirect GET afin de remettre la page à zéro
   
}


}




$tasks = getAllTasks();


// Inclusion du template 
include 'index.phtml';

?>