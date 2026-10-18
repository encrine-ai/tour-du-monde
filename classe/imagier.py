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
 2: {"faune": [], "flore": []},
 3: {"faune": [], "flore": []},
 4: {"faune": [], "flore": []},
 5: {"faune": [], "flore": []},
}

# Les espèces domestiques se cherchent avec captive=true (skill imagier-photos).
DOMESTIQUES = set()

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
    "cigogne-blanche": 601229857,
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
}


def entrees(periode=None):
    """Itère sur (periode, groupe, slug, nom, taxon)."""
    for p, groupes in sorted(IMAGIER.items()):
        if periode and p != periode:
            continue
        for groupe in ("faune", "flore"):
            for slug, nom, taxon in groupes[groupe]:
                yield p, groupe, slug, nom, taxon
