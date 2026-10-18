# -*- coding: utf-8 -*-
"""Manifeste de l'imagier Montessori « animaux et plantes du monde ».

Pour chaque période (un continent) : douze espèces de faune et douze de
flore, choisies pour être caractéristiques du continent et connues des
enfants, ou faciles à leur faire connaître par un documentaire. La flore ne
se réduit pas aux fleurs : arbres, arbustes, fougères, plantes cultivées.

Chaque entrée décrit :
  slug   — nom de fichier de l'image (sans extension) ;
  nom    — le mot écrit sur l'étiquette (script, minuscules, article compris) ;
  taxon  — le nom scientifique, qui sert à interroger iNaturalist.

Utilisé par scripts/chercher-images-imagier.py (photographies + crédits),
scripts/candidats-imagier.py (planches de candidats) et
scripts/generer-imagier.py (planches HTML). Voir le skill imagier-photos.
"""

# Les continents (clé, nom, phrase de la page de garde) sont dans classe.yml.

IMAGIER = {
 1: {
  "faune": [
   ("herisson",          "le hérisson",          "Erinaceus europaeus"),
   ("cigogne-blanche",   "la cigogne blanche",   "Ciconia ciconia"),
   ("renard-roux",       "le renard roux",       "Vulpes vulpes"),
   ("ours-brun",         "l’ours brun",          "Ursus arctos"),
   ("loup-gris",         "le loup",              "Canis lupus"),
   ("cerf-elaphe",       "le cerf",              "Cervus elaphus"),
   ("ecureuil-roux",     "l’écureuil roux",      "Sciurus vulgaris"),
   ("chouette-hulotte",  "la chouette hulotte",  "Strix aluco"),
   ("lynx-boreal",       "le lynx",              "Lynx lynx"),
   ("bouquetin",         "le bouquetin",         "Capra ibex"),
   ("macareux-moine",    "le macareux",          "Fratercula arctica"),
   ("renne",             "le renne",             "Rangifer tarandus"),
  ],
  "flore": [
   ("chene-pedoncule",   "le chêne",             "Quercus robur"),
   ("olivier",           "l’olivier",            "Olea europaea"),
   ("bouleau",           "le bouleau",           "Betula pendula"),
   ("epicea",            "l’épicéa",             "Picea abies"),
   ("chataignier",       "le châtaignier",       "Castanea sativa"),
   ("houx",              "le houx",              "Ilex aquifolium"),
   ("lavande",           "la lavande",           "Lavandula angustifolia"),
   ("bruyere",           "la bruyère",           "Calluna vulgaris"),
   ("coquelicot",        "le coquelicot",        "Papaver rhoeas"),
   ("edelweiss",         "l’edelweiss",          "Leontopodium nivale"),
   ("fougere-aigle",     "la fougère",           "Pteridium aquilinum"),
   ("vigne",             "la vigne",             "Vitis vinifera"),
  ],
 },
 2: {
  "faune": [
   ("lion",              "le lion",              "Panthera leo"),
   ("elephant-afrique",  "l’éléphant d’Afrique", "Loxodonta africana"),
   ("girafe",            "la girafe",            "Giraffa camelopardalis"),
   ("zebre",             "le zèbre",             "Equus quagga"),
   ("hippopotame",       "l’hippopotame",        "Hippopotamus amphibius"),
   ("rhinoceros-blanc",  "le rhinocéros",        "Ceratotherium simum"),
   ("gorille",           "le gorille",           "Gorilla gorilla"),
   ("suricate",          "le suricate",          "Suricata suricatta"),
   ("dromadaire",        "le dromadaire",        "Camelus dromedarius"),
   ("autruche",          "l’autruche",           "Struthio camelus"),
   ("grue-couronnee",    "la grue couronnée",    "Balearica regulorum"),
   ("tortue-sillonnee",  "la tortue sillonnée",  "Centrochelys sulcata"),
  ],
  "flore": [
   ("baobab",            "le baobab",            "Adansonia digitata"),
   ("acacia-parasol",    "l’acacia",             "Vachellia tortilis"),
   ("palmier-dattier",   "le palmier dattier",   "Phoenix dactylifera"),
   ("karite",            "le karité",            "Vitellaria paradoxa"),
   ("cafeier",           "le caféier",           "Coffea arabica"),
   ("sorgho",            "le sorgho",            "Sorghum bicolor"),
   ("pasteque",          "la pastèque",          "Citrullus lanatus"),
   ("papyrus",           "le papyrus",           "Cyperus papyrus"),
   ("nenuphar-bleu",     "le nénuphar bleu",     "Nymphaea nouchali caerulea"),
   ("aloes",             "l’aloès",              "Aloe ferox"),
   ("strelitzia",        "le strélitzia",        "Strelitzia reginae"),
   ("protee-royale",     "la protée royale",     "Protea cynaroides"),
  ],
 },
 3: {
  "faune": [
   ("panda-geant",       "le panda géant",       "Ailuropoda melanoleuca"),
   ("panda-roux",        "le panda roux",        "Ailurus fulgens"),
   ("elephant-asie",     "l’éléphant d’Asie",    "Elephas maximus"),
   ("orang-outan",       "l’orang-outan",        "Pongo pygmaeus"),
   ("yack",              "le yack",              "Bos grunniens"),
   ("chameau",           "le chameau",           "Camelus bactrianus"),
   ("macaque-japonais",  "le macaque japonais",  "Macaca fuscata"),
   ("paon",              "le paon",              "Pavo cristatus"),
   ("grue-japon",        "la grue du Japon",     "Grus japonensis"),
   ("carpe-koi",         "la carpe koï",         "Cyprinus rubrofuscus"),
   ("canard-mandarin",   "le canard mandarin",   "Aix galericulata"),
   ("phasme",            "le phasme",            "Carausius morosus"),
  ],
  "flore": [
   ("bambou",            "le bambou",            "Phyllostachys edulis"),
   ("riz",               "le riz",               "Oryza sativa"),
   ("theier",            "le théier",            "Camellia sinensis"),
   ("lotus",             "le lotus",             "Nelumbo nucifera"),
   ("cerisier-japon",    "le cerisier du Japon", "Prunus serrulata"),
   ("orchidee",          "l’orchidée",           "Phalaenopsis amabilis"),
   ("ginkgo",            "le ginkgo",            "Ginkgo biloba"),
   ("erable-japon",      "l’érable du Japon",    "Acer palmatum"),
   ("bananier",          "le bananier",          "Musa acuminata"),
   ("manguier",          "le manguier",          "Mangifera indica"),
   ("murier-blanc",      "le mûrier blanc",      "Morus alba"),
   ("rhododendron",      "le rhododendron",      "Rhododendron arboreum"),
  ],
 },
 4: {"faune": [], "flore": []},
 5: {"faune": [], "flore": []},
}

# Les espèces domestiques se cherchent avec captive=true (skill imagier-photos).
DOMESTIQUES = {
    # période 2 : l'animal d'élevage et les cultures (un champ est « captive »)
    "Camelus dromedarius", "Sorghum bicolor", "Phoenix dactylifera",
    "Coffea arabica",
    # période 3 : les animaux d'élevage, l'élevage de la soie, la rizière
    "Bos grunniens", "Camelus bactrianus", "Oryza sativa",
    "Cyprinus rubrofuscus",
}

# La photographie retenue à l'œil pour chaque espèce, sur planche de
# candidats (identifiant de photo iNaturalist).
OVERRIDES = {
    "bouleau": 640727427,
    "bouquetin": 409712246,
    "bruyere": 557655969,
    "cerf-elaphe": 582010792,
    "chataignier": 156687202,
    "chene-pedoncule": 216854955,
    "chouette-hulotte": 192781832,
    "cigogne-blanche": 72429124,     # seule, entière, de profil, dans l’herbe (l’ancienne était sur un lampadaire)
    "coquelicot": 77613327,
    "ecureuil-roux": 60496860,
    "edelweiss": 560454686,
    "epicea": 72268912,
    "fougere-aigle": 209292483,
    "herisson": 656714041,
    "houx": 374018160,
    "lavande": 86012447,
    "loup-gris": 258023086,
    "lynx-boreal": 246545089,
    "macareux-moine": 329738638,
    "olivier": 570108842,
    "ours-brun": 405714763,
    "renard-roux": 543807440,
    "renne": 724700305,
    "vigne": 343502942,
    # — période 2, l'Afrique : choisies à l'œil sur planches (savane, puis
    #   parcs animaliers et cultures pour le gorille, le suricate, le dattier,
    #   le caféier, le sorgho et le strélitzia) —
    "lion": 300761357,              # couché, calme, la crinière ; jamais en chasse
    "elephant-afrique": 63248024,   # seul, entier, de profil (l'autre avait un second éléphant)
    "girafe": 584655415,            # entière, seule dans la savane
    "zebre": 298612820,             # seul sur la piste, de profil
    "hippopotame": 187733006,       # hors de l'eau : on le voit en entier
    "rhinoceros-blanc": 599886911,  # de trois quarts, les deux cornes
    "gorille": 84758833,            # un dos argenté qui marche dans l'herbe (parc animalier)
    "suricate": 197422056,          # debout, en sentinelle
    "dromadaire": 105974064,        # entier, de profil, une seule bosse bien visible
    "autruche": 410703952,          # un mâle seul, entier
    "grue-couronnee": 246076120,    # entière, la couronne de plumes
    "tortue-sillonnee": 218917335,  # sur le sable, la carapace en entier
    "baobab": 244384816,            # l'arbre entier, son tronc énorme
    "acacia-parasol": 624175037,    # seul dans le désert, la forme en parasol
    "palmier-dattier": 467199719,   # un seul palmier, avec ses régimes de dattes
    "karite": 469968092,            # l'arbre entier en fleurs
    "cafeier": 122358955,           # le rameau et ses cerises rouges
    "sorgho": 77277173,             # les épis mûrs du champ
    "pasteque": 237181024,          # le fruit au pied de la plante
    "papyrus": 13488403,            # une tige et son ombelle
    "nenuphar-bleu": 11548018,      # la fleur bleue et ses feuilles flottantes
    "aloes": 251076585,             # la plante entière et ses épis rouges
    "strelitzia": 387549553,        # une fleur seule, fond net
    "protee-royale": 213126269,     # la grosse fleur rose
    # — période 3, l'Asie : choisies à l'œil sur planches (parcs animaliers
    #   pour les pandas ; cultures pour le riz, le cerisier et le ginkgo) —
    "panda-geant": 347071046,          # il mange du bambou, assis (parc animalier)
    "panda-roux": 156682958,           # entier, de profil sur sa branche
    "elephant-asie": 113994860,        # un seul, entier, de profil
    "orang-outan": 62662319,           # un mâle adulte entier, assis
    "yack": 51516618,          # un seul, entier, de profil, ses longs poils
    "chameau": 258581917,              # un seul, ses deux bosses bien visibles
    "macaque-japonais": 616559799,     # assis seul sur la pierre
    "paon": 402383086,                 # la roue ouverte
    "grue-japon": 336788747,           # une seule grue, entière
    "carpe-koi": 545083626,            # une seule carpe dans l'eau claire
    "canard-mandarin": 208838007,      # un mâle seul, entier
    "phasme": 1830461,                 # entier, sur fond clair
    "bambou": 376124726,               # la forêt de tiges
    "riz": 159866036,                  # les pieds de riz dans l'eau de la rizière
    "theier": 339550710,               # le rameau, ses feuilles et une fleur
    "lotus": 390395891,                # la fleur rose
    "cerisier-japon": 266820893,       # un rameau en fleurs
    "orchidee": 368194406,             # les fleurs blanches
    "ginkgo": 105759016,               # les feuilles en éventail, dorées
    "erable-japon": 248194967,         # l'arbre entier, rouge à l'automne
    "bananier": 437308275,             # le régime de bananes sous les grandes feuilles
    "manguier": 67997344,              # la mangue pendue à l'arbre
    "murier-blanc": 395310852,         # le rameau et ses mûres
    "rhododendron": 518147795,         # un bouquet de fleurs rouges
}


def entrees(periode=None):
    """Itère sur (periode, groupe, slug, nom, taxon)."""
    for p, groupes in sorted(IMAGIER.items()):
        if periode and p != periode:
            continue
        for groupe in ("faune", "flore"):
            for slug, nom, taxon in groupes[groupe]:
                yield p, groupe, slug, nom, taxon
