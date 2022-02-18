-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mer. 09 fév. 2022 à 12:24
-- Version du serveur : 5.7.33
-- Version de PHP : 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `blog_mvc`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `idArticle` int(10) UNSIGNED NOT NULL,
  `title` varchar(155) NOT NULL,
  `content` text NOT NULL,
  `createdAT` datetime NOT NULL,
  `categoryId` int(10) UNSIGNED NOT NULL,
  `image` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`idArticle`, `title`, `content`, `createdAT`, `categoryId`, `image`) VALUES
(1, 'SARS-CoV-2 : « L’enjeu des vaccins est qu’ils induisent l’immunité la plus large »', 'Derek Smith est bio-informaticien et dirige le laboratoire sur l’évolution des pathogènes de l’université de Cambridge, au Royaume-Uni. Il étudie l’évolution du virus de la grippe, de la dengue et du SARS-CoV-2 en cartographiant leurs variants et leurs dérivés selon ce que les scientifiques nomment des distances antigéniques. Ces distances traduisent l’effet, sur le pouvoir neutralisant des anticorps, de mutations entraînant des fines variations de la protéine de surface. La cartographie antigénique, mise au point en 2003, traduit en distance ces variations et contribue aux prédictions sur l’évolution des virus grippaux sur laquelle se fonde la révision annuelle de la composition des vaccins contre la grippe par l’Organisation mondiale de la santé. S’appuyant sur l’analyse des données issues d’un réseau de laboratoires européens et américains, l’équipe de Derek Smith vient de dresser une cartographie antigénique des variants du SARS-CoV-2, permettant de réfléchir aux stratégies de vaccination tout en contribuant à la compréhension de l’évolution du virus.\r\n\r\nSur quel principe la cartographie antigénique repose-t-elle ?\r\nPour en comprendre le principe, on peut faire l’analogie avec les tables kilométriques, indiquant les distances entre les villes d’un même pays. Ces tables sont utiles pour connaître les distances mais ne permettent pas de se représenter par exemple comment ces villes se positionnent les unes par rapport aux autres. Pour les virus tels que la grippe, la dengue ou le SARS-CoV-2, nous disposons de tables analogues indiquant des distances antigéniques obtenues en testant le pouvoir neutralisant des anticorps contenus dans des sérums prélevés à la suite d’une vaccination ou d’une infection.\r\n\r\nLire aussi  Covid-19 : visualisez la part des variants du SARS-CoV-2 qui circulent en France\r\nLe pouvoir neutralisant de ces anticorps est maximal contre le variant contre lesquels ils sont initialement dirigés, mais il diminue envers les autres variants selon une intensité qui dépend de l’importance des variations des sites antigéniques. Ces sites correspondent à des endroits très localisés de la protéine de surface constitués de quelques acides aminés et stimulant, lors de l’infection, le système immunitaire, qui produit en retour des anticorps capables de les reconnaître pour neutraliser le virus. ', '2022-02-09 10:46:34', 1, 'https://www.who.int/images/default-source/mca/mca-covid-19/coronavirus-2.tmb-1024v.jpg?Culture=fr&sfvrsn=4dba955c_6'),
(2, 'Covid-19 : à l’école, « un protocole sanitaire ne fait pas, à lui seul, une stratégie de prévention »', 'Mélanie Heard est responsable du pôle santé du think tank Terra Nova. Elle analyse les choix opérés – et les difficultés rencontrées – pour sécuriser les écoles en deux ans de crise sanitaire, à l’aune d’exemples venus de l’étranger.\r\n\r\nMasques, tests : des pistes d’allégement du protocole sanitaire à l’école sont en passe d’être actées pour entrer en vigueur au retour des vacances de février. Est-ce le bon moment ?\r\nLe mouvement général d’allégement touche tous les secteurs de la société avec le reflux de la vague Omicron ; il est logique que l’école soit concernée. Deux remarques cependant : d’abord, on comprend mal quel argument scientifique vient étayer la décision d’alléger la prévention à l’école, avec un taux d’incidence qui dépasse 4 500 en moyenne nationale chez les enfants scolarisés en primaire, au collège et au lycée – et ce, dans le contexte actuel d’échec de la campagne vaccinale des 5-11 ans.\r\n\r\nLire aussi  Article réservé à nos abonnés Covid-19 : la vaccination des 5-11 ans ne décolle toujours pas en France\r\nDeuxième remarque : on justifie le besoin d’allégement par la lourdeur du protocole. De fait, on est arrivé à un point de rupture, en faisant peser tout le poids du dépistage – la charge de trois autotests successifs, quand l’élève est cas contact – sur les parents. Le poids ne vient pas de l’épidémie elle-même ni de la logique de prévention sanitaire, mais bien de l’absence de gestion globale et raisonnée du Covid à l’école. Et, de cela, l’institution est responsable.\r\n\r\nEn matière de dépistage, d’autres pays ont choisi d’autres méthodes…\r\nL’Allemagne, l’Autriche, le Royaume-Uni ont aussi misé sur le dépistage des élèves, sans en demander trop aux familles. Les « lollipop tests », en Allemagne et en Autriche, sont d’une efficacité redoutable : l’enfant garde la sucette un peu plus d’une minute dans la bouche, et le résultat est connu dans le quart d’heure.', '2022-02-09 10:48:52', 1, 'https://img.lemde.fr/2022/02/09/0/0/5800/3859/664/0/75/0/a1866a7_657032521-000-93r2nk.jpg'),
(3, 'Déficit commercial : la France s’enfonce', 'Pour le ministre de l’économie, Bruno Le Maire, c’est « le problème économique qu’il nous reste à régler dans les dix prochaines années ». Alors que la France affiche une croissance de 7 % pour 2021, supérieure à celle de ses principaux voisins, des créations d’emplois florissantes et que le chômage recule, le commerce extérieur reste l’ombre au tableau économique. Le déficit commercial de la France s’est en effet de nouveau aggravé sur l’année écoulée, à 84,7 milliards d’euros, selon les données des douanes publiées mardi 8 février. Il pulvérise le précédent record de 75 milliards d’euros, atteint en 2011. Une dégradation préoccupante, alors que l’impératif de la souveraineté face aux grands pays producteurs comme la Chine n’a jamais été autant mis en avant.\r\n\r\nLe déficit se creuse, mais les échanges de services se redressent\r\nPar rapport à 2020, où il avait atteint 64,2 milliards d’euros, le déficit commercial s’est donc creusé d’une vingtaine de milliards en grande partie en raison de l’alourdissement de la facture énergétique, passée de 25,2 milliards d’euros en 2020 à 43,1 en 2021.', '2022-02-09 10:50:01', 2, 'https://img.lemde.fr/2022/02/08/0/0/4760/3165/664/0/75/0/e54b8a6_600219225-aluminium-dunkerque.jpg'),
(4, 'Semi-conducteurs : le plan à 42 milliards d’euros de la Commission européenne', 'Petit à petit, brique par brique, les Européens essaient de décliner ce concept de souveraineté européenne qu’ils ont fait leur, mais qui reste à construire. Mardi 8 février, la Commission doit présenter une proposition législative sur les semi-conducteurs, dont l’avenir permettra de mesurer le chemin parcouru par les Vingt-Sept sur le sujet en matière de politique industrielle.\r\n\r\nLe texte en question a pour objectif de doter le Vieux Continent des capacités suffisantes pour peser sur l’échiquier mondial de ce secteur hautement stratégique, alors que les puces électroniques sont désormais partout. On les trouve aussi bien dans les ordinateurs, les smartphones, les téléviseurs, les voitures, les avions, que dans les machines à laver, les climatiseurs ou encore les panneaux solaires. Et avec la digitalisation de l’économie, elles vont prendre de plus en plus de place.\r\n\r\nLire nos explications : Semi-conducteurs : que sont ces puces électroniques dont la pénurie perturbe l’économie mondiale ?\r\nAujourd’hui, l’Union européenne (UE) produit moins de 10 % des semi-conducteurs dans le monde, contre 40 % il y a trente ans. Avec la mondialisation, elle s’est désinvestie de ce pan de l’économie, au profit des Etats-Unis et plus encore de l’Asie. Mais la pandémie de Covid-19 a exposé au grand jour les limites de ce modèle. Les Européens ont violemment pris conscience que, du jour au lendemain, leurs fournisseurs pouvaient arrêter de les servir, comme ils l’ont expérimenté à leurs dépens avec les masques au printemps 2020. Les pénuries, en ces temps de sortie de crise, n’ont pas contribué à les rassurer. « Pour les semi-conducteurs, on dépend à 80 % de l’Asie et à 60 % de Taïwan », résume le commissaire français au marché intérieur, Thierry Breton. « Si Taïwan n’était plus en mesure d’exporter, en trois semaines, l’ensemble des usines du monde s’arrêteraient », poursuit-il.', '2022-02-09 10:51:25', 2, 'https://img.lemde.fr/2022/02/08/0/0/4000/2667/664/0/75/0/4ad51c3_797329245-choix.jpg'),
(5, 'Joe Biden face à la déception de l’électorat noir', 'On peut appeler cela un pèlerinage politique incontournable. Le 12 janvier, en déplacement à Atlanta (Géorgie), Joe Biden s’est recueilli devant la tombe de Martin Luther King, au centre construit à sa mémoire. Il cherchait ainsi une reconnexion symbolique avec une frange de l’électorat décisive dans sa victoire en 2020. Si Joe Biden s’était attardé dans la boutique de souvenirs, au milieu des mugs, des tee-shirts et des stylos, il aurait peut-être lu cette citation de l’icône des droits civiques, déclinée sur des magnets colorés destinés à des frigos philosophes : « Nos vies commencent à finir le jour où nous devenons silencieux au sujet des choses qui importent. »\r\n\r\nIl serait faux de dire que le président américain a été silencieux, jusqu’à lors, à propos des préoccupations de la communauté noire. Le problème se situe plutôt dans ses priorités – essentiellement économiques – et la pénible traduction de ses intentions en actes lorsqu’il s’agit des droits des minorités. D’où une déception prégnante, en particulier à Atlanta, l’un des hauts lieux de la lutte pour l’égalité civique.\r\n\r\nLire aussi  Article réservé à nos abonnés « Le Parti démocrate américain semble de plus en plus s’aliéner les personnes de couleur »\r\nQuelques absences ont été remarquées ce jour-là parmi les invités au centre universitaire, lorsque Joe Biden a pris la parole pour annoncer la poursuite de « la bataille pour l’âme de l’Amérique ». « On est au-delà des discours », a expliqué LaTosha Brown, cofondatrice de l’organisation Black Voters Matter. « Problème d’agenda », a prétendu Stacey Abrams, figure militante du Parti démocrate. « J’ai été derrière eux pendant toute ma carrière », s’est justifié Joe Biden, le 19 janvier, reconnaissant tout juste un problème de « communication ».\r\n\r\nLa question du droit de vote\r\nLa précipitation avec laquelle, une semaine plus tard, la Maison Blanche a confirmé son intention de désigner une Afro-Américaine comme candidate à la Cour suprême pour succéder à Stephen Breyer a été parlante. Elle a donné le sentiment que ce critère d’origine prévalait sur la compétence.', '2022-02-09 10:52:22', 3, 'https://img.lemde.fr/2022/02/08/0/0/6048/4024/664/0/75/0/fad67ad_622779325-000-9vy8wa.jpg'),
(6, 'Crise en Ukraine : l’Allemagne, la France et la Pologne ressuscitent le triangle de Weimar', 'Les dirigeants occidentaux le savent : ce n’est qu’en se montrant unis face à Vladimir Poutine qu’ils pourront agir face aux menaces que le président russe fait peser sur l’intégrité de l’Ukraine et, au-delà, sur la sécurité du continent européen. Dans ce contexte, la rencontre organisée entre le chancelier allemand, Olaf Scholz, et les présidents français et polonais, Emmanuel Macron et Andrzej Duda, mardi 8 février, à Berlin, est en soi une petite victoire diplomatique : depuis la crise ukrainienne de 2014, les trois pays n’avaient pas délivré de message commun.\r\n\r\nCe message, les trois hommes l’ont formulé tour à tour, lors d’un bref point presse, avec des mots quasi identiques. « Nous partageons un objectif : préserver la paix en Europe », a déclaré M. Scholz. « Nous devons trouver une solution pour éviter la guerre », a enchaîné M. Duda. « La paix et la stabilité du continent européen sont notre trésor, et notre devoir est de le préserver », a affirmé M. Macron.\r\n\r\nAucune question n’avait été prévue pour les journalistes, et ce n’était sans doute pas un hasard : en se bornant à des déclarations n’excédant pas une dizaine de minutes au total, les trois dirigeants ont pu s’en tenir à des propos assez généraux et éviter des échanges qui auraient sans doute conduit à mettre en lumière leurs divergences.', '2022-02-09 10:53:33', 3, 'https://img.lemde.fr/2022/02/09/0/0/3600/2400/664/0/75/0/cfe5a62_206908266-macron-kiev-berlin-13.jpg'),
(7, 'Pourquoi les JO de Pékin se déroulent dans une ambiance glaciale', 'Derrière la vitre des bus, on voit de la vie à Pékin. Un vieux monsieur en tricycle trainant une montagne de polystyrène attend au feu rouge, un enfant part à l\'école, des jeunes jouent au basket sur un playground, des gens s\'affairent pour aller au travail, des vélos, des scooters et des voitures vont et viennent. Deux mondes masqués se croisent sans un contact. Dans le TGV pour rejoindre Yanqing ou Zhangjiakou, on compte sur les doigts d\'une main les êtres humains aperçus sur le parcours. Dans les hôtels ou sur les sites, on vit dans un univers parallèle.\r\n\r\n', '2022-02-09 10:54:43', 4, 'https://i.la-croix.com/x/smart/2022/02/04/1201198547/village-olympique-JO-Pekin-3-fevrier-2022_0.jpg'),
(8, 'Sénégal : une marée humaine se déverse dans Dakar pour accueillir les héros de la CAN 2022', 'Des dizaines de milliers de Sénégalais extatiques ont envahi les rues autour de l’aéroport Léopold-Sédar-Senghor dans l’attente de l’équipe nationale de football de retour du Cameroun après avoir remporté pour la première fois la Coupe d’Afrique des nations (CAN), ont constaté les journalistes de l’AFP.\r\n\r\nL’arrivée prévue dans l’après-midi des Lions de la Teranga a drainé avec des heures d’avance un flot dense et tapageur s’étendant à perte de vue sur les axes menant en pleine ville à l’ancienne plate-forme aéroportuaire, qui ne sert plus que pour les occasions exceptionnelles ou les transports militaires et présidentiels.\r\n\r\nLire aussi  CAN 2022 : le Sénégal remporte la première Coupe d’Afrique des nations de son histoire\r\nLes coéquipiers de Sadio Mané ont mis fin dimanche soir 6 février au Cameroun à l’interminable attente de tout un pays fou de ballon en remportant aux tirs au but contre l’Egypte multilauréate le premier titre continental depuis la première participation du Sénégal à la CAN il y a plus de cinquante ans.\r\n\r\n« On a des parents qui n’ont pas pu assister à un sacre des Lions. Donc c’est un évènement merveilleux auquel je dois prendre part », s’enflammait Mohamed Ndoye, 31 ans, chauffeur, au milieu des supporteurs aux couleurs vert, or et rouge, dans un tintamarre de cornes, de sifflets et de chants.\r\n\r\nLire aussi  Après la victoire du Sénégal à la CAN : « C’est un sentiment incroyable, depuis le temps qu’on attendait ce moment ! »\r\nAu cours d’une nuit de liesse, le président Macky Sall avait déclaré ce lundi jour férié pour permettre à ses compatriotes de célébrer la victoire.\r\n\r\nLa tension n’a cessé de monter au cours de la journée, une clameur assourdissante couvrant progressivement différents quartiers de la ville, alors que l’incertitude demeurait sur l’heure d’arrivée des joueurs. Chacun escomptait que les nouveaux champions d’Afrique paraderaient dans les rues à travers les quartiers populaires de la capitale.\r\n\r\nLe chef de l’Etat, rentré exprès, devait aller les accueillir à l’aéroport après avoir annulé une visite officielle aux Comores.', '2022-02-09 10:56:12', 4, 'https://img.lemde.fr/2022/02/07/1/0/3598/2398/664/0/75/0/de667df_416212557-000-9yl99g.jpg');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`idArticle`),
  ADD KEY `categoryId` (`categoryId`),
  ADD KEY `categoryId_2` (`categoryId`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `idArticle` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `article_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category` (`idCategory`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
