<?php

/**
 * Récupère le contenu d'un fichier CSV et le retourne
 * sous forme d'un tableau
 */
function getAllDataFromCsv($filepath) {
    
$data = [];
$file = fopen($filepath, 'r');
while ($line = fgetcsv($file)) {
    $data[] = $line;
}

return $data; 

}

/**
 * Ajoute une ligne de données à la suite d'un
 * fichier CSV
 */

function addDataToCsv ($filepath, $data) {
    $file = fopen($filepath, 'a+');
    fputcsv($file, $data);
    fclose($file);
}

/**
 * Ecrit plusieurs lignes dans un fichier CSV après avoir tout effacer
 */
function saveDataToCsv( $filepath, $allData)
{
    // Ouverture du fichier en écriture et suppression du contenu
    $file = fopen($filepath, 'w');

    foreach ($allData as $data) {
        fputcsv($file, $data);
    }

    fclose($file);
}

/**
 * Supprime des lignes d'un fichier CSV à partir d'un tableau d'indices
 */
function removeDataFromCsv($filepath, $indexesToDelete)
{
    // Tableau des données à conserver
    $dataToKeep = [];

    // Toutes les données du fichier
    $allData = getAllDataFromCsv(FILENAME);
    
    // On parcours toutes les lignes et on garde celles qui ne sont pas à supprimer
    foreach ($allData as $index => $data) {
        if(!in_array($index, $indexesToDelete)) {
            $dataToKeep[] = $data;
        }
    }

    // Une fois qu'on a les données à conserver, on réécrit tout dans le fichier
    saveDataToCsv($filepath, $dataToKeep);
}

function editDataFromCsv($filepath, $indexToEdit,  $data) {
    $allData = getAllDataFromCsv($filepath);
    $allData[$indexToEdit] = $data;
    saveDataToCsv($filepath, $allData);
}