# Prendre en main votre classe

<!-- Écrit par scripts/classe.py generer, depuis classe.yml : ne pas retoucher à la main.
     Ce qui est propre à cette classe s'écrit à la fin, entre les marqueurs
     classe:debut et classe:fin (un titre « ## Propre à cette classe ») : c'est gardé. -->

Bienvenue. Cette page vous explique, en mots simples, ce qu'est votre classe,
« Le tour du monde » (Grande Section, 2026-2027), comment la reprendre à votre
nom, et ce que vous pouvez demander ensuite. Vous n'avez rien à apprendre de
technique : vous parlez à Claude comme à un collègue, et c'est lui qui fait.

## Votre classe, c'est quoi ?

Votre classe tient en trois choses, qui vont ensemble :

- **votre site** : la page web de votre classe, avec le projet de l'année, la
  programmation, les progressions, les évaluations et tous les cahiers. Il
  s'ouvre sur un ordinateur, une tablette ou un téléphone, et s'installe comme
  une appli ;
- **les PDF** : chaque document et chaque cahier (entraînement, évaluation,
  imagier et cartes-corpus), prêts à imprimer en A4. Ils sont refabriqués à
  chaque publication, vous n'avez jamais à les faire vous-même ;
- **le dépôt** : l'endroit, sur GitHub, qui garde tout — les textes, les
  images, l'historique de chaque changement. Le site et les PDF en sont tirés.

**Encrine** est l'outil qui a fabriqué votre classe : un « moteur » qui sait
écrire une année conforme au programme, mettre en page les fiches, choisir les
photos, fabriquer les PDF. Il s'améliore avec les retours des enseignants qui
s'en servent, et votre classe peut recevoir ses nouveautés quand vous le
souhaitez. Le bas du site porte la mention « Conçu avec Encrine » et renvoie
aux mentions légales d'Encrine, qui publie cette classe.

## Le premier lancement, après le transfert

Si votre classe passe d'un compte GitHub à un autre (un transfert, depuis
celui de la personne qui l'a préparée, par exemple), voici la marche à suivre.

1. Ouvrez une session Claude Code sur votre classe (votre dépôt
   `<votre-identifiant>/tour-du-monde`).
2. Dites simplement :

   > Je reprends ma classe.

Claude fera alors, sans vous demander de détail technique :

- **la nouvelle adresse** : il écrit votre dépôt dans la fiche d'identité de
  votre classe (`classe.yml`, la ligne `depot`), ce qui refait le lien « Voir
  le site de la classe » en haut de la page d'accueil du dépôt, le contact des
  mentions légales du site, et l'aperçu qui s'affiche quand on colle le lien
  du site dans un message ;
- **les contrôles** : la classe est complète et cohérente, l'année couvre
  toujours tout le programme, chaque fiche tient sur une page, chaque image a
  sa licence et son auteur, rien ne désigne un élève ;
- **les PDF** : il les fabrique tous et vérifie qu'ils s'impriment bien, une
  page par fiche et par planche ;
- **la publication** : il enregistre et publie, attend que le site soit en
  ligne à sa nouvelle adresse, l'ouvre et ouvre un PDF pour s'en assurer, puis
  vous donne le lien.

**Un réglage à vérifier une fois** : pour que votre site se publie, GitHub
doit savoir qu'il est fabriqué par l'outil. Dans votre dépôt, sur GitHub :
*Settings* → *Pages* → *Build and deployment* → *Source* doit être **GitHub
Actions**. Claude le vérifie pendant ce premier lancement ; s'il ne peut pas
le régler lui-même, il vous dit exactement où cliquer.

Si vous aviez installé le site sur votre téléphone, ou donné son lien (à des
collègues, aux familles, dans un code QR), refaites-le avec la nouvelle
adresse.

## Ce que vous pouvez dire ensuite

Parlez avec vos mots, depuis votre téléphone si vous voulez, photos et
captures à l'appui. Claude ne vous pose que les questions qui vous reviennent
(pédagogie, goût, diffusion), **une à la fois**, et vous montre ce qu'il a
fait avant de le publier.

| Vous voulez… | Vous dites, par exemple… |
|---|---|
| faire des retours sur une fiche, une image, une séance | « J'ai des retours sur la période 2 », « la consigne de la fiche 2.2 n'est pas claire », « les cases sont trop petites pour écrire » |
| changer une image | « Change cette photo de l'imagier », « on ne voit pas bien l'animal », « ce dessin ne va pas sur la fiche » |
| ajouter ou déplacer quelque chose dans l'année | « Ajoute la comptine jusqu'à 30 en période 2 », « il manque un mot dans les cartes de la période 2 » |
| signaler un problème de l'outil, ou une idée pour tous | « Transmets ça à l'outil », « ce serait bien pour tout le monde », « signale ce problème » |
| recevoir les nouveautés de l'outil | « Mets l'outil à jour » |
| partager votre classe avec d'autres enseignants | « Je voudrais partager ma classe » |
| imprimer | « Refais les PDF », « vérifie que tout s'imprime bien avant que j'imprime la période 2 », « la fiche déborde sur deux pages » |
| savoir où vous en êtes | « Qu'est-ce qui a changé depuis la dernière fois ? », « est-ce que l'année couvre tout le programme ? » |

Ce qui se passe derrière ces phrases :

- **Vos retours** : Claude les trie un par un. Ce qui concerne votre classe,
  il le corrige ici, vous le montre et le publie. Ce qui viendrait d'un défaut
  de l'outil, il le corrige aussi s'il le peut, et vous propose de le
  signaler.
- **« Transmets ça à l'outil »** : Claude rédige un signalement, sans jamais
  rien qui désigne un élève, vous le relit et, avec votre accord, l'envoie au
  moteur Encrine. Quand une amélioration en sort, toutes les classes peuvent
  la recevoir.
- **« Mets l'outil à jour »** : Claude récupère la dernière version de l'outil
  (les programmes qui fabriquent les pages, les contrôles, les savoir-faire de
  Claude), sans toucher à votre contenu, refait tous les contrôles jusqu'aux
  PDF, et ne publie que si tout est juste.
- **« Je voudrais partager ma classe »** : Claude relit d'abord tout ce qui
  doit l'être (programme couvert, impression, licences des images, aucun
  prénom d'élève, aucune photo de classe, aucun album ni chanson recopié),
  prépare la présentation de votre classe et vous demande votre accord. Vous
  envoyez vous-même la proposition depuis votre compte. Après une relecture,
  une **copie relue** de votre classe est montrée dans « Les classes », la
  galerie d'encrine.ai ; votre classe et votre site restent à vous. Vous
  pouvez la retirer à tout moment : « retire ma classe de la galerie ».

## Ce qui reste à vous, et ce qui est protégé

- **Votre contenu ne bouge que sur votre demande.** Claude peut proposer,
  jamais décider à votre place.
- **Une mise à jour de l'outil ne touche jamais votre contenu** : ni votre
  fiche d'identité (`classe.yml`), ni vos documents, ni vos fiches, ni vos
  cahiers, ni votre style.
- **Vos notes sont gardées.** Quand Claude apprend quelque chose qui ne vaut
  que pour votre classe (une décision sur une image, une habitude de la
  classe), il l'écrit dans la section « Propre à cette classe » de ses
  savoir-faire, ou de cette page ; les mises à jour de l'outil la conservent.
- **Rien n'est perdu** : chaque changement est enregistré, et peut être
  défait. Si quelque chose vous déplaît, dites-le : « reviens à la version
  d'avant ».

## Les règles de prudence

- **Votre site et votre classe sont publics** : n'importe qui peut les lire,
  même ce qui n'est pas encore publié. N'y mettez donc rien de privé.
- **Aucun prénom d'élève réel.** Les prénoms des énoncés (Nils, Ana, Malik et
  Elsa) sont inventés ; si vous en ajoutez, choisissez-les inventés aussi, et
  dites-le à Claude.
- **Aucune photo d'élève**, ni de la classe, ni d'un travail d'élève.
- Ni le nom de l'école, ni la ville : le site n'en a pas besoin.

## Si quelque chose ne va pas

1. **Demandez d'abord à Claude**, avec vos mots : « le site ne s'ouvre plus »,
   « le PDF de la période 2 a une page blanche », « je ne comprends pas ce que
   tu as fait ». Il cherche, explique sans jargon, et répare.
2. **Si ça bloque encore**, dites « signale ce problème » : Claude le transmet
   à l'outil avec votre accord. Ou écrivez à hello@encrine.ai.
