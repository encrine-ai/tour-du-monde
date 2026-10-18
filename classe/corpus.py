# -*- coding: utf-8 -*-
"""Manifeste des cartes-corpus : les mots des trois corpus de chaque période.

Liste, période par période, **tous les noms** des trois corpus de
`01-projet-annuel.md` — le voyage et le continent, la faune, la flore — et
dit d'où vient l'image de chacun. Les verbes et les adjectifs n'ont pas de
carte (NON_ILLUSTRES) : ils s'enseignent et s'évaluent dans le réemploi.

Chaque entrée : (slug, nom écrit sur l'étiquette, source), la source étant
  ("imagier", slug)  une photographie de l'imagier, déjà choisie et créditée ;
  ("fiche", slug)    une image de la banque partagée site/fiches/img/.

Seule la période 1 est écrite ; les autres le seront avec leur période
(skill cartes-corpus).
"""

# Les trois corpus de chaque période, tels que les nomme 01-projet-annuel.md.
CORPUS = {
    1: ("le voyage et l’Europe", "les animaux d’Europe", "les arbres et les plantes d’Europe"),
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
 2: {g: [] for g in GROUPES},
 3: {g: [] for g in GROUPES},
 4: {g: [] for g in GROUPES},
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
}

# Les étiquettes de tri de la fiche X.1 (les « boîtes-catégories »).
TRI = {
 1: ("le voyage", "les animaux", "les végétaux"),
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
