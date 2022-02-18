<?php

function insertComment(string $comment, int $idArticle, int $rate)
{
    // Insertion du commentaire en base de données
    $sql = 'INSERT INTO comment (content, articleId, rate)
    VALUES (?,?,?)';

    prepareAndExecute($sql, [$comment, $idArticle, $rate]);
};

function getCommentByArticleId (int $idArticle) {
    $sql2 = 'SELECT content, rate, createdAt FROM comment 
    WHERE articleId = ?
    ORDER BY createdAt DESC';
    
    $resultsComments = getAllResults($sql2, [$idArticle]);
    if (!$resultsComments) {
        return [];
    }
    return $resultsComments;
   
}