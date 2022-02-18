<?php

/**
 * Créer la connexion à la BDD avec PDO
 */

 function getPDOConnection(): PDO 
 {
    $pdo = new PDO ('mysql:host='.DB_HOST.';dbname='.DB_NAME.';'.'charset=utf8',DB_USER,DB_PASSWORD);
    //l'encodage de communication avec la BDD
$pdo->exec('SET NAMES utf8');

// Ajout de configuration pour l'objet PDO avec la méthode setAttribute() : https://www.php.net/manual/fr/pdo.setattribute.php
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Choix du mode de rapport d'erreur : création d'un exception PHP (erreur)
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
return $pdo;
 }

 /**
  * Prépare et exécute une requête SQL 
  */

function prepareAndExecute(string $sql, array $values = []): PDOStatement
{
$pdo = getPDOconnection();
$pdoStatement = $pdo->prepare($sql);
$pdoStatement -> execute($values);
return $pdoStatement;
} 

/**
 * Exécute une requête de sélection et récupère UN résultat
 */
function getOneResult(string $sql, array $values = []): array 
{
 $pdoStatement = prepareAndExecute($sql, $values);   
 $result = $pdoStatement->fetch();
 if (!$result) {
    return [];
}
 
 return $result;
}

/**
 * exécute une requête de sélection et récupère TOUS les résultats
 */
function getAllResults(string $sql, array $values = []): array 
{
 $pdoStatement = prepareAndExecute($sql, $values);
 $results = $pdoStatement->fetchAll();

 if (!$results) {
    return [];
}
 return $results;
}


