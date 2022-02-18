<?php

const FILENAME = 'subscribers.csv';

/**
 * Valide les données du formulaire d'ajout de tâches
 * 
 */
function validate($title,$description, $date, $priority) {
    // On initialise un tableau d'erreurs 
    $errors = [];
    if (!$title) /* || !isset($title) || empty($title))*/ {
        $errors['title']= "le champ titre est obligatoire";
    }
    
    if (! in_array($priority, ['basse','normale','haute'])) {
        $errors['priority'] = "Vous devez choisir une des trois propositions";
    }
    
    if (strtotime($date) < strtotime(date('Y-m-d'))) {
            $errors['date'] = "La deadline doit être postérieure à aujourd'hui";
    }
    
    return $errors;
}


/**
 * Ajoute une nouvelle tâche dans le fichier CSV
 */
function addTasks ($title, $description, $date, $priority)
{   
    $data = [$title, $description, $date, $priority];
    // Appel à la fonction déclarée dans functions.php qui permet d'enregistrer dans le fichier CSV contenu dans la constante FILENAME les données saisies par l'user contenues dans la variable $data qui les regroupe sous forme d'un tableau.
    addDataToCsv (FILENAME , $data);
}

/**
 * Récupère l'ensemble des tâches enregistrées dans le fichier CSV
 */
function getAllTasks () 
{
  return   getAllDataFromCsv(FILENAME);
    
}


/**
 * Supprime des tâches à partir d'un tableau d'indices
 */
function removeTasks($indexesToDelete)
{
    removeDataFromCsv(FILENAME, $indexesToDelete);
}

function editTask($indexToEdit,$title,$description, $date, $priority) {
    editDataFromCsv(FILENAME, $indexToEdit, [$title, $description, $date, $priority]);
}