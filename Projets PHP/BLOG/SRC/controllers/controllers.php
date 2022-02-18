<?php 

/**
 * Contrôleur de la page d'accueil
 */
function genHome()
{
   

// Section des articles 
$articles = getAllArticles(5);

 // Affichage : inclusion du fichier template
 $template = 'home';
 include TEMPLATE_DIR .'/base.phtml';
}




function genArticle()
{
    $template = 'article';

    if (!array_key_exists('idArticle',$_GET)) {
        echo 'ID d\'article manquant';
        exit;
        }
    $idArticle =  $_GET['idArticle'];     
        
// Sélection de l'article 
$article = getOneArticle($idArticle);

// Test pour savoir si l'article existe
if (!$article) {
    echo 'ERREUR: aucun article ne possède cet ID' . $idArticle;
    exit;
}


//Traitement des données du formulaire d'ajout de commentaires
if (!empty($_POST)) {

    // Récupérer le texte du commentaire
    $comment = trim($_POST['comment']);
    $rate = (int) $_POST['rate'];
    // Validation 
    $errors = [];

    if (!$comment) {
        $errors['content'] = 'le champ Commentaire est obligatoire';
    }
    // S'il n'y a pas d'erreurs
    if (empty ($errors)) {
        // Insertion du commentaire en BDD 
        insertComment($comment, $idArticle, $rate);
        // redirection 
        header('Location: index.php?action=article&idArticle=' . $idArticle);
        exit;
    }
}

// var_dump($article);S

// Affichage des commentaires

$showComments = getCommentByArticleId ($idArticle);


   // Affichage : inclusion du fichier template
     include TEMPLATE_DIR .'/base.phtml';

    }


/**
 * Contrôleur de la page contacts 
 */ 

 function genContact() 
 {
    $template = 'contact';

     // Affichage : inclusion du fichier template
     include TEMPLATE_DIR .'/base.phtml';
    }
 
function genMentions() 
{
    $template = 'mentions';
    include TEMPLATE_DIR. '/base.phtml';
}