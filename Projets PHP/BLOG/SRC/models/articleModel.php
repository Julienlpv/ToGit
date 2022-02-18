<?php 

/**
 * Sectionne tous les articles
 */

function getAllArticles(?int $limit = null) // le ?int veut dire que le paramètre peut être nul
{
    //Requête SQL
    $sql = 'SELECT  idArticle, title, content, createdAT, label, `image`
        FROM article AS A 
        INNER JOIN category AS C ON A.categoryId = C.idCategory  
        ORDER BY createdAT DESC';

    if ($limit != null) {

        $sql = $sql . ' LIMIT ' . $limit; // ou $sql .= 
    }
    // La concaténation prévoit par défaut une chaine de caractère.. problème
    // On doit diviser en deux le test , ici on est obligés de concaténer avec
    // la variable, ce qu'il ne faut pas faire en général. 
    
    // Sélection des articles
    $articles = getAllResults($sql);

    return $articles;
}


/**
 * Sectionne UN article à partir de son ID
 */
function getOneArticle (int $idArticle): array  
{
    $sql = 'SELECT  idArticle, title, content, createdAT, label, `image`
    FROM article AS A 
    INNER JOIN category AS C ON A.categoryId = C.idCategory  
    WHERE idArticle = ?';

    $article = getOneResult($sql, [$idArticle]);

    if (!$article) {
        return []; // On pourrait aussi lancer une "exception"
    }
    return $article;
}

// function insertCommentaryIntoDB (int $idArticle) {

//     // On démarre la BDD
//     $pdo = getPDOConnection();
//     // Requête SQL 
//     $sqlInsertComment = 'INSERT INTO comment  
//     WHERE idArticle = ?';
    
//     // Préparation de la requête et exécution
//     $pdoStatement = prepareAndExecute($sqlInsertComment, $values);
// }