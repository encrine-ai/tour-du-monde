# -*- coding: utf-8 -*-
"""Manifeste des cartes-corpus : les mots des trois corpus de chaque période.

Liste, période par période, **tous les noms** des trois corpus de
`01-projet-annuel.md` — le voyage et le continent, la faune, la flore — et
dit d'où vient l'image de chacun. Les verbes et les adjectifs n'ont pas de
carte (NON_ILLUSTRES) : ils s'enseignent et s'évaluent dans le réemploi.

Chaque entrée : (slug, nom écrit sur l'étiquette, source), la source étant
  ("imagier", slug)  une photographie de l'imagier, déjà choisie et créditée ;
  ("fiche", slug)    une image de la banque partagée site/fiches/img/.

Les périodes s'écrivent l'une après l'autre (skill cartes-corpus).
"""

# Les trois corpus de chaque période, tels que les nomme 01-projet-annuel.md.
CORPUS = {
    1: ("le voyage et l’Europe", "les animaux d’Europe", "les arbres et les plantes d’Europe"),
    2: ("le voyage en Afrique", "les animaux d’Afrique", "les arbres et les plantes d’Afrique"),
    3: ("le voyage en Asie", "les animaux d’Asie", "les arbres et les plantes d’Asie"),
    4: ("le voyage aux Amériques", "les animaux des Amériques", "les arbres et les plantes des Amériques"),
}

GROUPES = ("milieu", "faune", "flore")

CARTES = {
 1: {
  "milieu": [
   ("valise",      "la valise",      ("fiche", "valise")),
   ("billet",      "le billet",      ("fiche", "billet")),
   ("passeport",   "le passeport",   ("fiche", "passeport")),
   ("train",       "le train",       ("fiche", "train")),
   ("avion",       "l’avion",        ("fiche", "avion")),
   ("bateau",      "le bateau",      ("fiche", "bateau")),
   ("carte",       "la carte",       ("fiche", "carte")),
   ("globe",       "le globe",       ("fiche", "globe")),
   ("drapeau",     "le drapeau",     ("fiche", "drapeau")),
   ("chateau",     "le château",     ("fiche", "chateau")),
   ("moulin",      "le moulin",      ("fiche", "moulin")),
   ("pont",        "le pont",        ("fiche", "pont")),
  ],
  "faune": [
   ("herisson",    "le hérisson",    ("imagier", "herisson")),
   ("cigogne",     "la cigogne",     ("imagier", "cigogne-blanche")),
   ("renard",      "le renard",      ("imagier", "renard-roux")),
   ("ours",        "l’ours",         ("imagier", "ours-brun")),
   ("loup",        "le loup",        ("imagier", "loup-gris")),
   ("cerf",        "le cerf",        ("imagier", "cerf-elaphe")),
   ("ecureuil",    "l’écureuil",     ("imagier", "ecureuil-roux")),
   ("chouette",    "la chouette",    ("imagier", "chouette-hulotte")),
   ("nid",         "le nid",         ("fiche", "nid")),
   ("terrier",     "le terrier",     ("fiche", "terrier")),
   ("plume",       "la plume",       ("fiche", "plume")),
  ],
  "flore": [
   ("arbre",       "l’arbre",        ("fiche", "arbre")),
   ("chene",       "le chêne",       ("imagier", "chene-pedoncule")),
   ("olivier",     "l’olivier",      ("imagier", "olivier")),
   ("sapin",       "le sapin",       ("fiche", "sapin")),
   ("feuille",     "la feuille",     ("fiche", "feuille")),
   ("gland",       "le gland",       ("fiche", "gland")),
   ("chataigne",   "la châtaigne",   ("fiche", "chataigne")),
   ("olive",       "l’olive",        ("fiche", "olive")),
   ("raisin",      "le raisin",      ("fiche", "raisin")),
   ("fleur",       "la fleur",       ("fiche", "fleur")),
   ("lavande",     "la lavande",     ("imagier", "lavande")),
   ("coquelicot",  "le coquelicot",  ("imagier", "coquelicot")),
  ],
 },
 2: {
  "milieu": [
   ("savane",      "la savane",      ("fiche", "savane")),
   ("desert",      "le désert",      ("fiche", "desert")),
   ("dune",        "la dune",        ("fiche", "dune")),
   ("oasis",       "l’oasis",        ("fiche", "oasis")),
   ("fleuve",      "le fleuve",      ("fiche", "fleuve")),
   ("pirogue",     "la pirogue",     ("fiche", "pirogue")),
   ("case",        "la case",        ("fiche", "case")),
   ("village",     "le village",     ("fiche", "village")),
   ("puits",       "le puits",       ("fiche", "puits")),
   ("marche",      "le marché",      ("fiche", "marche")),
   ("panier",      "le panier",      ("fiche", "panier")),
   ("djembe",      "le djembé",      ("fiche", "djembe")),
  ],
  "faune": [
   ("lion",        "le lion",        ("imagier", "lion")),
   ("elephant",    "l’éléphant",     ("imagier", "elephant-afrique")),
   ("girafe",      "la girafe",      ("imagier", "girafe")),
   ("zebre",       "le zèbre",       ("imagier", "zebre")),
   ("hippopotame", "l’hippopotame",  ("imagier", "hippopotame")),
   ("rhinoceros",  "le rhinocéros",  ("imagier", "rhinoceros-blanc")),
   ("gorille",     "le gorille",     ("imagier", "gorille")),
   ("autruche",    "l’autruche",     ("imagier", "autruche")),
   ("tortue",      "la tortue",      ("imagier", "tortue-sillonnee")),
   ("trompe",      "la trompe",      ("fiche", "trompe")),
   ("carapace",    "la carapace",    ("fiche", "carapace")),
   ("oeuf",        "l’œuf",          ("fiche", "oeuf")),
  ],
  "flore": [
   ("baobab",      "le baobab",      ("imagier", "baobab")),
   ("acacia",      "l’acacia",       ("imagier", "acacia-parasol")),
   ("palmier",     "le palmier",     ("imagier", "palmier-dattier")),
   ("datte",       "la datte",       ("fiche", "datte")),
   ("sorgho",      "le sorgho",      ("imagier", "sorgho")),
   ("pasteque",    "la pastèque",    ("imagier", "pasteque")),
   ("papyrus",     "le papyrus",     ("imagier", "papyrus")),
   ("nenuphar",    "le nénuphar",    ("imagier", "nenuphar-bleu")),
   ("graine",      "la graine",      ("fiche", "graine")),
   ("tronc",       "le tronc",       ("fiche", "tronc")),
   ("branche",     "la branche",     ("fiche", "branche")),
   ("racine",      "la racine",      ("fiche", "racine")),
  ],
 },
 3: {
  "milieu": [
   ("riziere",     "la rizière",     ("fiche", "riziere")),
   ("montagne",    "la montagne",    ("fiche", "montagne")),
   ("pagode",      "la pagode",      ("fiche", "pagode")),
   ("muraille",    "la muraille",    ("fiche", "muraille")),
   ("cerf-volant", "le cerf-volant", ("fiche", "cerf-volant")),
   ("lanterne",    "la lanterne",    ("fiche", "lanterne")),
   ("baguettes",   "les baguettes",  ("fiche", "baguettes")),
   ("bol",         "le bol",         ("fiche", "bol")),
   ("eventail",    "l’éventail",     ("fiche", "eventail")),
   ("gong",        "le gong",        ("fiche", "gong")),
   ("dragon",      "le dragon",      ("fiche", "dragon")),
   ("feu-artifice", "le feu d’artifice", ("fiche", "feu-artifice")),
  ],
  "faune": [
   ("panda",       "le panda",       ("imagier", "panda-geant")),
   ("orang-outan", "l’orang-outan",  ("imagier", "orang-outan")),
   ("yack",        "le yack",        ("imagier", "yack")),
   ("chameau",     "le chameau",     ("imagier", "chameau")),
   ("singe",       "le singe",       ("imagier", "macaque-japonais")),
   ("paon",        "le paon",        ("imagier", "paon")),
   ("grue",        "la grue",        ("imagier", "grue-japon")),
   ("carpe",       "la carpe",       ("imagier", "carpe-koi")),
   ("canard",      "le canard",      ("imagier", "canard-mandarin")),
   ("phasme",      "le phasme",      ("imagier", "phasme")),
   ("ver-a-soie",  "le ver à soie",  ("fiche", "ver-a-soie")),
   ("cocon",       "le cocon",       ("fiche", "cocon")),
  ],
  "flore": [
   ("bambou",      "le bambou",      ("imagier", "bambou")),
   ("riz",         "le riz",         ("imagier", "riz")),
   ("the",         "le thé",         ("imagier", "theier")),
   ("lotus",       "le lotus",       ("imagier", "lotus")),
   ("cerisier",    "le cerisier",    ("imagier", "cerisier-japon")),
   ("orchidee",    "l’orchidée",     ("imagier", "orchidee")),
   ("ginkgo",      "le ginkgo",      ("imagier", "ginkgo")),
   ("erable",      "l’érable",       ("imagier", "erable-japon")),
   ("mangue",      "la mangue",      ("imagier", "manguier")),
   ("banane",      "la banane",      ("imagier", "bananier")),
   ("murier",      "le mûrier",      ("imagier", "murier-blanc")),
   ("rhododendron", "le rhododendron", ("imagier", "rhododendron")),
  ],
 },
 4: {
  "milieu": [
   ("foret-tropicale", "la forêt tropicale", ("fiche", "foret-tropicale")),
   ("prairie", "la prairie", ("fiche", "prairie")),
   ("canyon", "le canyon", ("fiche", "canyon")),
   ("volcan", "le volcan", ("fiche", "volcan")),
   ("pyramide", "la pyramide", ("fiche", "pyramide-maya")),
   ("gratte-ciel", "le gratte-ciel", ("fiche", "gratte-ciel")),
   ("hamac", "le hamac", ("fiche", "hamac")),
   ("poncho", "le poncho", ("fiche", "poncho")),
   ("flute-pan", "la flûte de pan", ("fiche", "flute-pan")),
   ("maracas", "les maracas", ("fiche", "maracas")),
   ("masque", "le masque", ("fiche", "masque")),
   ("voilier", "le voilier", ("fiche", "voilier")),
  ],
  "faune": [
   ("lama", "le lama", ("imagier", "lama")),
   ("bison", "le bison", ("imagier", "bison")),
   ("raton-laveur", "le raton laveur", ("imagier", "raton-laveur")),
   ("tatou", "le tatou", ("imagier", "tatou")),
   ("paresseux", "le paresseux", ("imagier", "paresseux")),
   ("capybara", "le capybara", ("imagier", "capybara")),
   ("toucan", "le toucan", ("imagier", "toucan")),
   ("perroquet", "le perroquet", ("imagier", "ara-rouge")),
   ("colibri", "le colibri", ("imagier", "colibri")),
   ("grenouille", "la grenouille", ("imagier", "rainette")),
   ("iguane", "l’iguane", ("imagier", "iguane")),
   ("papillon", "le papillon", ("imagier", "monarque")),
  ],
  "flore": [
   ("mais", "le maïs", ("imagier", "mais")),
   ("haricot", "le haricot", ("imagier", "haricot")),
   ("potiron", "le potiron", ("imagier", "potiron")),
   ("tomate", "la tomate", ("imagier", "tomate")),
   ("pomme-de-terre", "la pomme de terre", ("imagier", "pomme-de-terre")),
   ("cacao", "le cacao", ("imagier", "cacaoyer")),
   ("ananas", "l’ananas", ("imagier", "ananas")),
   ("tournesol", "le tournesol", ("imagier", "tournesol")),
   ("cactus", "le cactus", ("imagier", "saguaro")),
   ("sequoia", "le séquoia", ("imagier", "sequoia")),
   ("erable", "l’érable", ("imagier", "erable-sucre")),
   ("epi", "l’épi", ("fiche", "epi")),
  ],
 },
 5: {g: [] for g in GROUPES},
}

# Un mot qui revient d'une période à l'autre : sa carte y est réimprimée.
RAPPELS = {}

# Les verbes et les adjectifs des corpus, qui n'ont volontairement pas de carte.
# La liste est exhaustive : scripts/verifier-cartes-corpus.py la relit contre
# le tableau des corpus du projet annuel.
NON_ILLUSTRES = {
 1: ("voyager", "partir", "arriver", "traverser", "loin", "près",
     "migrer", "hiberner", "grimper", "se cacher", "roux", "piquant",
     "pousser", "cueillir", "ramasser", "parfumé"),
 2: ("porter", "acheter", "vendre", "chaud", "sec", "sauvage",
     "rugir", "galoper", "se baigner", "rayé", "lourd", "léger",
     "semer", "arroser", "germer", "sucré", "épineux"),
 3: ("fêter", "souhaiter", "joyeux", "fier", "timide", "surpris",
     "se transformer", "pondre", "manger", "lent", "soyeux", "doux",
     "planter", "repiquer", "fleurir", "lisse", "rugueux"),
 4: ("explorer", "défiler", "se déguiser", "immense", "coloré", "humide",
     "butiner", "se balancer", "s’envoler", "lent", "rapide", "minuscule",
     "récolter", "éplucher", "mûr", "juteux", "géant"),
}

# Les étiquettes de tri de la fiche X.1 (les « boîtes-catégories »).
TRI = {
 1: ("le voyage", "les animaux", "les végétaux"),
 2: ("le voyage", "les animaux", "les végétaux"),
 3: ("le voyage", "les animaux", "les végétaux"),
 4: ("le voyage", "les animaux", "les végétaux"),
}
TRI_MILIEUX = ()


def entrees(periode=None):
    """(période, groupe, slug, nom, source) pour toutes les cartes."""
    for p in sorted(CARTES):
        if periode and p != periode:
            continue
        for g in GROUPES:
            for slug, nom, source in CARTES[p][g]:
                yield p, g, slug, nom, source
