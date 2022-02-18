<?php 
require 'functions.php';
require 'todolist_functions.php';


// On récupère le paramètre indexToEdit de l'URL




// Si le formulaire est soumis... 
if (array_key_exists('indexToEdit',$_GET)) {
    
$indexToEdit = $_GET['indexToEdit'];
    // ... on traite les données pour faire la modification de la tâche


$allTasks= getAllTasks();
$tasktoEdit = $allTasks[$indexToEdit];

$title = $tasktoEdit[0];
$description = $tasktoEdit[1];
$date = $tasktoEdit[2];
$priority = $tasktoEdit[3];



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
    
    editTask ($indexToEdit,$title, $description, $date, $priority);
    
        // Redirection vers l'index php en GET (Pour perdre les données en POST)
        header('Location: index.php');
        exit; // C'est le POST redirect GET afin de remettre la page à zéro
       
    }
    
    
    }
}
// On va chercher les données de la tâche à modifier


// Inclusion du fichier de template
include 'edit.phtml';