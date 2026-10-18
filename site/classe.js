/* Fabriqué par scripts/classe.py depuis classe.yml : ne pas modifier à la main. */
var CLASSE = {
  "nom": "Classe de démonstration",
  "niveau": {
    "code": "GS",
    "libelle": "Grande Section"
  },
  "annee": "2026-2027",
  "projet": "Le tour du monde",
  "sous_titre": "classe de démonstration",
  "accroche": "Un continent par période, de l’Europe aux pôles, avec Plume, la cigogne voyageuse. Les cinq périodes sont prêtes : progressions, évaluations, fiches, imagier et cartes de vocabulaire.",
  "conformite": "Conforme au programme officiel de l'école maternelle (cycle 1, 2024-2026) et au programme d'éducation à la vie affective et relationnelle.",
  "theme": "tour-du-monde",
  "ton": "tu",
  "depot": "encrine-ai/tour-du-monde",
  "moteur": {
    "depot": "encrine-ai/moteur",
    "version": "447c707"
  },
  "galerie": {
    "depot": "encrine-ai/encrine-ai.github.io"
  },
  "partage": {
    "prenoms_fictifs": [
      "Nils",
      "Ana",
      "Malik",
      "Elsa"
    ],
    "textes_autorises": [],
    "licence": "CC BY-SA 4.0",
    "auteur": "Encrine"
  },
  "contenu": {
    "referentiel": "referentiel/cycle1-gs.yml",
    "annotations": "classe/annotations.yml",
    "imagier": "classe/imagier.py",
    "corpus": "classe/corpus.py"
  },
  "calendrier": {
    "zone": "C",
    "rentree": "2026-09-01",
    "fin": "2027-07-02",
    "toussaint": {
      "debut": "2026-10-17",
      "reprise": "2026-11-02"
    },
    "noel": {
      "debut": "2026-12-19",
      "reprise": "2027-01-04"
    },
    "hiver": {
      "debut": "2027-02-06",
      "reprise": "2027-02-22"
    },
    "printemps": {
      "debut": "2027-04-03",
      "reprise": "2027-04-19"
    },
    "ponts": [
      {
        "nom": "Pont de l’Ascension",
        "du": "2027-05-06",
        "au": "2027-05-09"
      }
    ]
  },
  "periodes": [
    {
      "cle": "europe",
      "milieu": "L’Europe",
      "icone": "map-pin",
      "emoji": "🇪🇺",
      "couleur": "bleu",
      "imagier": "Les animaux et les plantes d’Europe, du parc voisin aux montagnes et aux côtes."
    },
    {
      "cle": "afrique",
      "milieu": "L’Afrique",
      "icone": "sprout",
      "emoji": "🌍",
      "couleur": "vert",
      "imagier": "Les animaux et les plantes d’Afrique, de la savane au désert et au bord du fleuve."
    },
    {
      "cle": "asie",
      "milieu": "L’Asie",
      "icone": "mountain-snow",
      "emoji": "🌏",
      "couleur": "violet",
      "imagier": "Les animaux et les plantes d’Asie, des forêts de bambous aux rizières et aux jardins du Japon."
    },
    {
      "cle": "ameriques",
      "milieu": "Les Amériques",
      "icone": "compass",
      "emoji": "🌎",
      "couleur": "ocre",
      "imagier": "Les animaux et les plantes des Amériques, de la prairie aux forêts tropicales et aux déserts."
    },
    {
      "cle": "oceanie-poles",
      "milieu": "L’Océanie et les pôles",
      "icone": "waves",
      "emoji": "🧊",
      "couleur": "turquoise",
      "imagier": "Les animaux et les plantes de l’Océanie et des pôles, du récif de corail à la banquise et à la toundra."
    }
  ],
  "periodes_nom": "continents",
  "materiel": [
    {
      "cle": "entrainement",
      "titre": "Entraînement",
      "icone": "pencil",
      "desc": "12 fiches, 2 niveaux (★ / ★★) et défis",
      "periodes": [
        1,
        2,
        3,
        4,
        5
      ],
      "source": "fiches/entrainement-periode-{n}.html",
      "pdf": "pdf/fiches-entrainement-periode-{n}.pdf",
      "nom": "fiches-entrainement",
      "budget": 10000
    },
    {
      "cle": "evaluation",
      "titre": "Évaluation",
      "icone": "printer",
      "desc": "les fiches élève de fin de période",
      "periodes": [
        1,
        2,
        3,
        4,
        5
      ],
      "source": "fiches/periode-{n}.html",
      "pdf": "pdf/fiches-eleve-periode-{n}.pdf",
      "nom": "fiches-eleve",
      "budget": 10000
    },
    {
      "cle": "imagier",
      "titre": "Imagier",
      "icone": "image",
      "desc": "12 animaux et 12 plantes en photographies",
      "intitule": "animaux et plantes du monde",
      "fichier": "imagier-monde",
      "periodes": [
        1,
        2,
        3,
        4,
        5
      ],
      "source": "imagier/periode-{n}.html",
      "pdf": "pdf/imagier-periode-{n}.pdf",
      "nom": "imagier",
      "budget": 30000,
      "couverture": true
    },
    {
      "cle": "cartes-corpus",
      "titre": "Cartes-corpus",
      "icone": "layers",
      "desc": "les mots des trois corpus et les étiquettes de tri",
      "periodes": [
        1,
        2,
        3,
        4,
        5
      ],
      "source": "cartes-corpus/periode-{n}.html",
      "pdf": "pdf/cartes-corpus-periode-{n}.pdf",
      "nom": "cartes-corpus",
      "budget": 30000,
      "couverture": true
    }
  ],
  "documents": [
    {
      "id": "accueil",
      "titre": "Accueil",
      "icone": "house"
    },
    {
      "id": "projet-annuel",
      "titre": "Le projet annuel",
      "icone": "target",
      "md": "content/01-projet-annuel.md",
      "groupe": "Pour piloter l’année",
      "desc": "Le fil rouge, les thèmes, les albums, les chants, les sorties."
    },
    {
      "id": "programmation",
      "titre": "La programmation annuelle",
      "icone": "calendar-range",
      "md": "content/02-programmation-annuelle.md",
      "groupe": "Pour piloter l’année",
      "desc": "Tous les domaines période par période, en un coup d’œil."
    },
    {
      "id": "langage",
      "titre": "Langage oral et écrit",
      "icone": "message-circle",
      "md": "content/03-progressions/01-langage-oral-ecrit.md",
      "groupe": "Mes progressions",
      "par_periode": true,
      "desc": "Vocabulaire, phonologie, lettres, écriture, compréhension."
    },
    {
      "id": "maths",
      "titre": "Mathématiques",
      "icone": "shapes",
      "md": "content/03-progressions/02-mathematiques.md",
      "groupe": "Mes progressions",
      "par_periode": true,
      "desc": "Nombres, problèmes, formes, grandeurs, motifs."
    },
    {
      "id": "eps",
      "titre": "Activités physiques",
      "icone": "person-standing",
      "md": "content/03-progressions/03-activites-physiques.md",
      "groupe": "Mes progressions",
      "par_periode": true,
      "desc": "Les unités d’apprentissage de l’année, séance par séance."
    },
    {
      "id": "arts",
      "titre": "Activités artistiques",
      "icone": "palette",
      "md": "content/03-progressions/04-activites-artistiques.md",
      "groupe": "Mes progressions",
      "par_periode": true,
      "desc": "Dessin, graphisme, compositions, musique, spectacle vivant."
    },
    {
      "id": "temps-espace",
      "titre": "Temps et espace",
      "icone": "compass",
      "md": "content/03-progressions/05-temps-espace.md",
      "groupe": "Mes progressions",
      "par_periode": true,
      "desc": "Rituels, chronologie, positions, la carte du monde."
    },
    {
      "id": "monde",
      "titre": "Le monde du vivant et des objets",
      "icone": "sprout",
      "md": "content/03-progressions/06-monde-vivant-matiere-objets.md",
      "groupe": "Mes progressions",
      "par_periode": true,
      "desc": "Animaux et plantes des continents, élevages, matière, objets."
    },
    {
      "id": "evar",
      "titre": "Vie affective et relationnelle",
      "icone": "heart-handshake",
      "md": "content/03-progressions/07-evar.md",
      "groupe": "Mes progressions",
      "desc": "Les séances spécifiques et le fil continu."
    },
    {
      "id": "eval-guide",
      "titre": "Mode d’emploi et livret de suivi",
      "icone": "clipboard-list",
      "md": "content/04-evaluations/00-mode-emploi-et-livret-de-suivi.md",
      "groupe": "Mes évaluations",
      "desc": "Principes, codage, livret de l’année."
    },
    {
      "id": "eval-p1",
      "fiches": 1,
      "md": "content/04-evaluations/periode-1-europe.md",
      "groupe": "Mes évaluations",
      "desc": "12 fiches d’évaluation + grilles d’observation (octobre).",
      "titre": "Période 1 · L’Europe",
      "icone": "map-pin"
    },
    {
      "id": "eval-p2",
      "fiches": 2,
      "md": "content/04-evaluations/periode-2-afrique.md",
      "groupe": "Mes évaluations",
      "desc": "12 fiches d’évaluation + grilles d’observation (décembre).",
      "titre": "Période 2 · L’Afrique",
      "icone": "sprout"
    },
    {
      "id": "eval-p3",
      "fiches": 3,
      "md": "content/04-evaluations/periode-3-asie.md",
      "groupe": "Mes évaluations",
      "desc": "12 fiches d’évaluation + grilles d’observation (février).",
      "titre": "Période 3 · L’Asie",
      "icone": "mountain-snow"
    },
    {
      "id": "eval-p4",
      "fiches": 4,
      "md": "content/04-evaluations/periode-4-ameriques.md",
      "groupe": "Mes évaluations",
      "desc": "12 fiches d’évaluation + grilles d’observation (avril).",
      "titre": "Période 4 · Les Amériques",
      "icone": "compass"
    },
    {
      "id": "eval-p5",
      "fiches": 5,
      "md": "content/04-evaluations/periode-5-oceanie-poles.md",
      "groupe": "Mes évaluations",
      "desc": "12 fiches d’évaluation + grilles d’observation (juin).",
      "titre": "Période 5 · L’Océanie et les pôles",
      "icone": "waves"
    }
  ],
  "appli": {
    "nom": "Classe de démonstration — Le tour du monde",
    "nom_court": "Tour du monde",
    "initiale": "T"
  }
};
