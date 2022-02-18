<?php
require 'functions.php';
require 'todolist_functions.php';

var_dump($_POST);




// // if (!array_key_exists($indexesToDelete)) {
// //     header('Location: index.php');
// //     exit; 
// // }

// // else {
// //     $line = getAllTasks();

// //     foreach ($indexesToDelete as $index) {

// //     }
// // }

// $allTasks = getAllTasks();

if (array_key_exists('indexes', $_POST)) {
//         $indexesToDelete = $_POST['indexes'];
$indexesToDelete = $_POST['indexes'];
// $savedTasks = [];

// foreach($allTasks as $index => $task) {
//     if (! in_array($index, $indexesToDelete)) {
//         $savedTasks[]= $task; 
//     }
// }



// $fh = fopen(FILENAME, 'w');
// foreach ($savedTasks as $task) {
//     fputcsv($fh, $task);
// }
//     fclose($fh);

//     header('Location: index.php');
//     exit; 

        
// }
//  else {
//         header('Location: index.php');
//         exit; 
//     }
    


// ou en refactorisant 


    // Suppression des tâches
    removeTasks($indexesToDelete);
}
// Suppression d'une seule tâche 
if (array_key_exists('indexToDelete',$_GET)) {

    // On récupère l'indice de la tâche à supprimer 
    $indexesToDelete = $_GET['indexToDelete'];
    removeTasks([$indexesToDelete]);
}

    // Redirection vers l'index.php
header('Location: index.php');
exit;

 
