/* Les gabarits du thème « atlas » : le site est un grand atlas ancien.
 *
 * L'en-tête porte la table de l'atlas (ordinateur) et, sur téléphone, la
 * rose des vents « Légende » qui ouvre la légende sur fond de mer ;
 * l'accueil ouvre la mappemonde, un sceau par continent, puis l'échelle de
 * l'année, le portefeuille des cahiers et la table des matières ; chaque
 * document est un chapitre (lettrine, sommaire à losanges, « en fin de
 * période » en note de marge) ; chaque période est une planche gravée.
 *
 * Le moteur calcule (m, le modèle : site/modele.js) et garde la logique
 * (routes, menu, focus : site/app.js) ; ces fonctions ne font que dessiner.
 * Skill charte-graphique, « Le mini-site ».
 */
(function () {
  'use strict';

  var CARTE_MONDE = 'images/carte-monde-delisle.jpg';
  var observateur = null;

  /* ——— Petits ornements tracés (CC0, tracés pour le thème) ——— */
  function rose(classe) {
    return '<svg class="a-rose' + (classe ? ' ' + classe : '') + '" viewBox="0 0 100 100" aria-hidden="true">' +
      '<g fill="none" stroke="currentColor"><circle cx="50" cy="50" r="44" stroke-width="1.5"/><circle cx="50" cy="50" r="38" stroke-width=".8"/></g>' +
      '<g class="a-aiguille"><path d="M50 4 L57 43 L96 50 L57 57 L50 96 L43 57 L4 50 L43 43 Z" fill="currentColor"/>' +
      '<path d="M50 4 L50 96 M4 50 L96 50" fill="none" style="stroke: var(--t-velin)" stroke-width="1"/>' +
      '<path d="M50 22 L54 46 L78 50 L54 54 L50 78 L46 54 L22 50 L46 46 Z" style="fill: var(--t-velin)" transform="rotate(45 50 50)" opacity=".9"/></g>' +
      '<circle cx="50" cy="50" r="4" style="fill: var(--t-velin)" stroke="currentColor"/></svg>';
  }
  function fleuron() {
    return '<svg class="a-fleuron" viewBox="0 0 140 18" aria-hidden="true"><path d="M2 9 H58 M82 9 H138" stroke="currentColor" stroke-width="1"/>' +
      '<path d="M70 2 L78 9 L70 16 L62 9 Z" fill="currentColor"/><circle cx="56" cy="9" r="2" fill="currentColor"/><circle cx="84" cy="9" r="2" fill="currentColor"/></svg>';
  }
  function lavis(n) { return '<span class="a-lavis" data-periode="' + n + '"></span>'; }

  /* « L’Europe » → « Europe » ; « Les Amériques » → « Amériques ». */
  function court(milieu) { return String(milieu).replace(/^(L’|L'|La |Le |Les )/, ''); }
  /* « L’Europe » → « l’Europe », pour « avec l’Europe ». */
  function minuscule(milieu) { return String(milieu).replace(/^(L’|L'|La |Le |Les )/, function (a) { return a.toLowerCase(); }); }
  /* « Pour piloter l’année » → « Piloter » ; « Mes progressions » → « Progressions ». */
  function etiquette(titre) {
    var mots = String(titre).split(/\s+/);
    if (/^(mes|les|la|le|pour|nos)$/i.test(mots[0]) && mots.length > 1) mots.shift();
    var w = mots[0];
    return w.charAt(0).toUpperCase() + w.slice(1);
  }
  function etat(p) {
    if (p.statut === 'en-cours') return 'nous y sommes';
    if (p.statut === 'passee') return 'planche parcourue';
    if (p.prochaine) return 'prochaine escale';
    return 'à venir';
  }
  function sansEmoji(t) {
    return String(t).replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, '').replace(/\s+/g, ' ').trim();
  }
  function atlas(p) { return (p.theme && p.theme.atlas) || {}; }
  function chapitre(num, titre, id, intro) {
    return '<div class="a-chapitre-tete"><span class="a-num">' + num + '</span><h2 id="' + id + '">' + titre + '</h2>' + fleuron() +
      (intro ? '<p>' + intro + '</p>' : '') + '</div>';
  }

  /* ——— L'en-tête : le titre de l'atlas, la table, la légende ——— */
  function entete(m) {
    var o = m.outils, esc = o.esc, C = m.classe;
    var groupes = m.menu.filter(function (g) { return g.entrees.length; });
    var table = groupes.map(function (g, i) {
      var periodes = g.cle === 'periodes';
      var large = g.entrees.length > 4 ? ' a-large' : '';
      var cote = i >= groupes.length - 2 ? ' a-droite' : '';
      return '<li><button type="button" class="a-entree" data-sous-menu aria-expanded="false" aria-controls="a-sm-' + g.cle + '">' +
        esc(etiquette(g.titre)) + o.icone('chevron-down', 'a-chevron') + '</button>' +
        '<div class="a-planche-menu' + large + cote + '" id="a-sm-' + g.cle + '" data-sous-menu-panneau hidden>' +
        '<p class="a-planche-menu-titre">' + esc(g.titre) + '</p>' + fleuron() + '<ol>' +
        g.entrees.map(function (e, k) {
          var marque = periodes ? lavis(e.periode) : '<span class="a-rom">' + o.romain(k + 1) + '.</span>';
          var titre = periodes ? 'Planche ' + o.romain(e.periode) + ' · ' + e.titre : e.titre;
          return '<li><a href="' + e.lien + '">' + marque + '<strong>' + esc(titre) + '</strong><small>' + esc(e.desc) + '</small></a></li>';
        }).join('') + '</ol></div></li>';
    }).join('');
    var legende = groupes.map(function (g) {
      var periodes = g.cle === 'periodes';
      return '<h3><span class="a-sym" aria-hidden="true">◇</span>' + esc(g.titre) + '</h3><ul' + (periodes ? ' class="a-continents"' : '') + '>' +
        g.entrees.map(function (e, k) {
          var sym = periodes ? lavis(e.periode) : '<span class="a-sym" aria-hidden="true">' + (g.entrees.length > 2 ? o.romain(k + 1) : '◆') + '</span>';
          return '<li><a href="' + e.lien + '">' + sym + esc(periodes ? court(e.titre) : e.titre) + '</a></li>';
        }).join('') + '</ul>';
    }).join('');
    return '<div class="a-entete"><div class="a-entete-int">' +
      '<a class="a-marque" href="#/accueil">' + rose() + '<span><span class="a-marque-nom">' + esc(C.projet) + '</span>' +
        '<span class="a-marque-sous">atlas de la ' + esc(C.niveau.libelle.toLowerCase()) + ' · ' + esc(C.annee) + '</span></span></a>' +
      '<nav class="a-table" aria-label="Table de l’atlas"><ul><li><a class="a-entree" href="#/accueil">L’Année</a></li>' + table + '</ul></nav>' +
      '<button type="button" class="a-boussole" data-menu-ouvrir aria-expanded="false" aria-controls="a-legende" aria-label="Ouvrir la légende de l’atlas">' +
        rose() + '<span class="a-mot">Légende</span></button>' +
      '<div class="a-legende" id="a-legende" data-menu-panneau role="dialog" aria-modal="true" aria-label="Légende de l’atlas" hidden>' +
        '<div class="a-legende-tete"><p class="a-legende-titre">Légende<small>toutes les rubriques de l’atlas</small></p>' +
        '<button type="button" class="a-fermer" data-menu-fermer>' + o.icone('x') + 'Fermer</button></div>' +
        '<ul><li><a href="#/accueil"><span class="a-sym" aria-hidden="true">✦</span>La carte de l’année</a></li></ul>' + legende +
      '</div></div></div>';
  }

  /* ——— L'accueil ——— */
  function epingles(m, carte) {
    var o = m.outils, esc = o.esc;
    var pts = m.periodes.map(function (p) { return atlas(p).carte; });
    var route = '';
    pts.forEach(function (pt, i) {
      if (!pt) return;
      if (!route) { route = 'M' + pt.x + ' ' + pt.y; return; }
      var prec = pts[i - 1] || pts[0];
      var cx = (prec.x + pt.x) / 2, cy = Math.min(prec.y, pt.y) - 8;
      route += ' Q' + cx.toFixed(1) + ' ' + cy.toFixed(1) + ' ' + pt.x + ' ' + pt.y;
    });
    var html = '<svg class="a-route" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="' + route + '"/></svg>';
    m.periodes.forEach(function (p) {
      var pt = atlas(p).carte;
      if (!pt) return;
      html += '<a class="a-epingle a-' + esc(pt.cote || 'droite') + '" href="' + p.lien + '" data-statut="' + p.statut + (p.prochaine ? ' prochaine' : '') + '" data-periode="' + p.n + '"' +
        ' style="--x:' + pt.x + '%;--y:' + pt.y + '%" aria-label="Planche ' + p.romain + ', ' + esc(p.milieu) + ', ' + esc(p.dates.court) + ', ' + etat(p) + '">' +
        '<span class="a-sceau">' + p.romain + '</span><span class="a-cartouche"><b>' + esc(p.milieu) + '</b><span>' +
        esc(p.dates.court) + ' · ' + p.sem + ' sem.</span><span class="a-etat">' + etat(p) + '</span></span></a>';
    });
    var ici = m.ici;
    if (ici.statut === 'vacances') {
      var a = atlas(m.periode(ici.vacances.avant)).carte, b = atlas(m.periode(ici.vacances.apres)).carte;
      if (a && b) {
        html += '<div class="a-ici" style="--x:' + ((a.x + b.x) / 2) + '%;--y:' + ((a.y + b.y) / 2) + '%"><span class="a-ici-point"></span>' +
          '<span class="a-ici-texte"><b>Vous êtes ici</b>' + esc(ici.vacances.libelle.charAt(0).toUpperCase() + ici.vacances.libelle.slice(1)) +
          ' · reprise le ' + esc(o.jourLong(ici.vacances.reprise)) + '.</span></div>';
      }
    }
    return '<figure class="a-carte-monde"><div class="a-carte-cadre">' +
      '<img src="' + esc(carte.chemin) + '" width="2400" height="1387" alt="Mappemonde gravée et coloriée du XVIIIe siècle, en deux hémisphères : les Amériques à gauche, l’Europe, l’Afrique, l’Asie et l’Océanie à droite.">' +
      html + '</div></figure>';
  }

  function listePlanches(m) {
    var o = m.outils, esc = o.esc;
    var lignes = [];
    m.periodes.forEach(function (p) {
      lignes.push('<li><a href="' + p.lien + '" data-statut="' + p.statut + (p.prochaine ? ' prochaine' : '') + '"><span class="a-sceau">' + p.romain + '</span><b>' + esc(p.milieu) + '</b><span>' +
        esc(p.dates.court) + ' · ' + p.sem + ' semaines · ' + etat(p) + '</span></a></li>');
      var v = m.vacances[p.n - 1];
      if (v && v.enCours) {
        lignes.push('<li class="a-ici-liste"><b>Vous êtes ici</b>' + esc(v.libelle.charAt(0).toUpperCase() + v.libelle.slice(1)) + ', ' + esc(v.dates) +
          '. Reprise le ' + esc(o.jourLong(v.reprise)) + (m.periode(v.apres) ? ', cap sur ' + esc(minuscule(m.periode(v.apres).milieu)) : '') + '.</li>');
      }
    });
    return '<ul class="a-planches-liste">' + lignes.join('') + '</ul>';
  }

  function echelle(m) {
    var o = m.outils, esc = o.esc;
    var segs = [], liste = [], total = 0, ici = null;
    m.periodes.forEach(function (p) {
      var debut = total;
      total += p.sem;
      if (p.statut === 'en-cours') ici = { a: debut, b: total, texte: 'planche ' + p.romain + ', ' + court(p.milieu) };
      segs.push('<div class="a-seg a-seg-p' + (p.statut === 'en-cours' ? ' a-ici-seg' : '') + '" data-periode="' + p.n + '" style="--sem:' + p.sem + '">' +
        '<span class="a-seg-nom"><small>Planche ' + p.romain + '</small>' + esc(court(p.milieu)) + '</span>' +
        '<span class="a-seg-bas"><b>' + p.sem + ' semaines</b>' + esc(o.jourCourt(p.debut)) + '</span></div>');
      liste.push('<div style="--sem:' + p.sem + '"' + (p.statut === 'en-cours' ? ' class="a-ici-l"' : '') + '><small>Planche ' + p.romain + '</small><b>' + esc(court(p.milieu)) + '</b>' +
        esc(p.dates.court) + ' · ' + p.sem + ' semaines</div>');
      var v = m.vacances[p.n - 1];
      if (v) {
        var d = total;
        total += v.semaines;
        if (v.enCours) ici = { a: d, b: total, texte: v.libelle };
        segs.push('<div class="a-seg a-vac' + (v.enCours ? ' a-ici-seg' : '') + '" style="--sem:' + v.semaines + '" title="' + esc(v.libelle) + '"></div>');
        liste.push('<div class="a-vac' + (v.enCours ? ' a-ici-l' : '') + '" style="--sem:' + v.semaines + '">' + (v.enCours ? 'Vous êtes ici · ' : '') + esc(v.libelle) + '</div>');
      }
    });
    var fleche = '';
    if (ici) {
      var gauche = Math.max(0, Math.min(78, ((ici.a + ici.b) / 2) / total * 100 - 1));
      fleche = '<p class="a-ici-fleche" style="left:' + gauche.toFixed(1) + '%"><b>Vous êtes ici</b>' + esc(ici.texte) + '</p>';
    }
    return '<div class="a-echelle"><div class="a-echelle-barre" aria-hidden="true">' + segs.join('') + '</div>' +
      '<div class="a-echelle-liste">' + liste.join('') + '</div>' + fleche + '</div>';
  }

  function aujourdhui(m) {
    var o = m.outils, ici = m.ici;
    var j = 'Nous sommes le ' + o.jourLong(m.aujourdhui, true) + ' : ';
    if (ici.statut === 'vacances') {
      var a = m.periode(ici.vacances.avant), b = m.periode(ici.vacances.apres);
      return j + 'la planche de ' + minuscule(a.milieu).replace(/^(la |le )/, '') + ' est parcourue' +
        (b ? ', et Plume vole vers ' + minuscule(b.milieu) : '') + '.';
    }
    if (ici.statut === 'periode') return j + 'nous parcourons la planche ' + ici.periode.romain + ', ' + minuscule(ici.periode.milieu) + '.';
    if (ici.statut === 'avant') return j + 'l’atlas s’ouvrira à la rentrée.';
    return j + 'le tour du monde est accompli.';
  }

  function portefeuille(m, p, avecSuite) {
    var o = m.outils, esc = o.esc;
    var lettres = 'ABCDEFGH';
    var estampes = p.cahiers.map(function (c, i) {
      return '<a class="a-estampe" href="' + c.href + '" download="' + esc(c.nom) + '"><span class="a-lettre">' + lettres.charAt(i) + '</span>' +
        o.icone(c.icone, 'a-ic-grand') + '<strong>' + esc(c.titre) + '</strong><small>' + esc(c.desc) + '</small><em>' + esc(c.usage) + '</em>' +
        '<span class="a-pdf">' + o.icone('download') + 'PDF</span></a>';
    }).join('');
    var autres = avecSuite ? m.periodes.filter(function (q) { return q.n !== p.n; }).map(function (q) {
      return '<a href="' + q.lien + '">' + lavis(q.n) + '<span><b>Planche ' + q.romain + ' · ' + esc(court(q.milieu)) + '</b><br>' +
        (q.prete ? 'ses cahiers sont prêts' : (q.statut === 'passee' ? 'planche parcourue' : 'en préparation, pour le ' + esc(o.jourCourt(q.debut)))) + '</span></a>';
    }).join('') : '';
    return '<div class="a-portefeuille">' + estampes +
      (autres ? '<div class="a-a-graver"><p>Les autres planches</p>' + autres + '</div>' : '') + '</div>';
  }

  function accueil(m) {
    var o = m.outils, esc = o.esc, C = m.classe;
    var carte = m.image(CARTE_MONDE);
    var mascotte = (m.projet.annee || {}).mascotte;
    var sous = 'en ' + o.nombre(m.periodes.length) + ' ' + C.periodes_nom + (mascotte ? ', avec ' + mascotte.nom : '');
    // le portefeuille : la période en cours, sinon la prochaine, sinon la dernière prête
    var prete = m.periodes.filter(function (p) { return p.cahiers.length; });
    var pf = [m.ici.periode, m.ici.prochaine].filter(function (p) { return p && p.cahiers.length; })[0] ||
      prete.filter(function (p) { return p.statut === 'passee'; }).pop() || prete[0];
    var matieres = m.groupes.map(function (g) {
      return '<div><h3>' + esc(g.titre) + '</h3><ol>' + g.documents.map(function (d, k) {
        return '<li><a href="' + d.lien + '"><span class="a-rom">' + o.romain(k + 1) + '</span><strong>' + esc(d.titre) + '</strong>' +
          o.icone(d.icone) + '<small>' + esc(d.desc) + '</small></a></li>';
      }).join('') + '</ol></div>';
    }).join('');
    var ens = C.enseignant;
    return '<section class="a-ouverture" aria-labelledby="a-titre"><div class="a-ouverture-int">' +
      '<div class="a-ouverture-tete"><div><p class="a-surtitre">' + esc(C.niveau.libelle) + ' · ' + esc(C.annee) + '</p>' +
        '<h1 id="a-titre">' + esc(C.projet) + '<em>' + esc(sous) + '</em></h1>' +
        (ens.signature ? '<p class="a-signature-classe">La classe ' + esc(GS.de(ens.signature)) + '</p>' : '') + '</div>' +
        '<div><p class="a-chapo">' + o.texte(C.accroche) + '</p>' +
        (ens.mot ? '<p class="a-mot">' + o.texte(ens.mot) + '</p>' : '') +
        '<ul class="a-reperes"><li><b>' + m.periodes.length + '</b>planches</li><li><b>' + m.annee.semaines + '</b>semaines</li><li><b>' + esc(C.zone) + '</b>zone</li></ul></div></div>' +
      (carte ? epingles(m, carte) : '') +
      listePlanches(m) +
      (carte ? '<p class="a-carte-legende"><span>' + esc(carte.auteur) + ', <i>' + esc(carte.titre) + '</i>, ' + esc(carte.date) + ' · ' + esc(carte.institution) +
        ', domaine public</span><span>Touchez un sceau pour ouvrir la planche du continent.</span></p>' : '') +
      '</div></section>' +
      '<div class="a-feuillet">' +
      '<section class="a-chapitre" aria-labelledby="a-t-echelle">' +
        chapitre('Échelle de l’année', 'L’année en ' + o.nombre(m.periodes.length) + ' ' + esc(C.periodes_nom), 'a-t-echelle',
          'À l’échelle des semaines : chaque planche est aussi longue que la période, les hachures sont les vacances de la zone ' + esc(C.zone) + '.') +
        echelle(m) +
        '<div class="a-echelle-pied"><table class="a-escales"><caption>Les escales : les vacances de la zone ' + esc(C.zone) + '</caption>' +
          '<thead><tr><th scope="col">Vacances</th><th scope="col">Dates</th><th scope="col">Reprise</th></tr></thead><tbody>' +
          m.vacances.map(function (v) {
            return '<tr' + (v.enCours ? ' class="a-ici-ligne"' : '') + '><th scope="row">' + esc(v.nom.charAt(0).toUpperCase() + v.nom.slice(1)) +
              (v.enCours ? '<span class="a-marque-ici">vous êtes ici</span>' : '') + '</th><td>' + esc(v.dates) + '</td><td>' + esc(o.jourCourt(v.reprise)) + '</td></tr>';
          }).join('') + '</tbody></table>' +
          '<div class="a-notes-echelle"><p>' + esc(m.annee.texte) + ' ' + esc(aujourdhui(m)) + '</p>' +
          m.ponts.map(function (p) { return '<p>' + esc(p.texte) + '</p>'; }).join('') +
          '<p>Chaque document se télécharge en PDF prêt à imprimer, dates comprises.</p></div></div>' +
      '</section>' +
      (pf ? '<section class="a-chapitre" aria-labelledby="a-t-imprimer">' +
        chapitre('Portefeuille de la planche ' + pf.romain, 'À imprimer pour la classe', 'a-t-imprimer',
          'Les cahiers de ' + esc(minuscule(pf.milieu)) + ', en A4, sobres et faciles à imprimer.') +
        portefeuille(m, pf, true) + '<p class="a-note-materiel">' + esc(m.materielNote) + '</p></section>' : '') +
      '<section class="a-chapitre" aria-labelledby="a-t-docs">' + chapitre('Table des matières', 'Mes documents', 'a-t-docs') +
        '<div class="a-matieres">' + matieres + '</div></section>' +
      '</div>';
  }

  /* ——— Un document : un chapitre de l'atlas ——— */
  function boutons(m, page) {
    var o = m.outils, esc = o.esc, doc = page.doc, html = '';
    if (doc.pdf) html += '<a class="a-bouton" href="' + doc.pdf.href + '" download="' + esc(doc.pdf.nom) + '">' + o.icone('download') + 'Télécharger le PDF</a>';
    if (page.periode) {
      html += page.periode.cahiers.map(function (c) {
        return '<a class="a-bouton a-clair" href="' + c.href + '" download="' + esc(c.nom) + '">' + o.icone(c.icone) + esc(c.titre) + '</a>';
      }).join('');
      html += '<a class="a-bouton a-clair" href="' + page.periode.lien + '">' + o.icone('map-pin') + 'Planche ' + page.periode.romain + ' · ' + esc(court(page.periode.milieu)) + '</a>';
    }
    return html;
  }
  function document_(m, page) {
    var o = m.outils, esc = o.esc, doc = page.doc;
    var groupe = m.groupes.filter(function (g) { return g.titre === doc.groupe; })[0];
    var rang = groupe ? groupe.documents.indexOf(groupe.documents.filter(function (d) { return d.id === doc.id; })[0]) : -1;
    var fil = doc.groupe ? esc(doc.groupe) + (rang >= 0 ? ' · planche ' + o.romain(rang + 1) + ' de ' + o.romain(groupe.documents.length) : '') : 'L’atlas';
    var extraits = doc.extraits.length ? '<p class="a-extraits">' + o.icone('printer') + ' L’extrait d’une période, pour l’afficher en classe : ' +
      doc.extraits.map(function (e) {
        return '<a href="' + e.href + '" download="' + esc(e.nom) + '">' + lavis(e.n) + esc(court(e.milieu)) + '</a>';
      }).join('') + '</p>' : '';
    var sommaire = page.sections.length > 1 ? '<nav class="a-sommaire" aria-label="Dans ce document"><p>Sommaire</p><ol>' +
      page.sections.map(function (s) {
        var t = s.periode && m.periode(s.periode) ? o.romain(s.periode) + '. ' + court(m.periode(s.periode).milieu)
          : sansEmoji(s.titre).replace(/\s*\(.*$/, '').replace(/^\d+\.\s*/, '');
        if (t.length > 40 && t.indexOf(' :') > 0) t = t.slice(0, t.indexOf(' :'));
        return '<li><a href="#' + s.id + '">' + esc(t.length > 42 ? t.slice(0, 40) + '…' : t) + '</a></li>';
      }).join('') + '</ol></nav>' : '';
    var sous = page.titre && page.titre !== doc.titre ? '<p class="a-sous">' + esc(sansEmoji(page.titre)) + '</p>' : '';
    return '<div class="a-feuillet a-doc">' +
      '<header class="a-doc-tete"><p class="a-fil">' + fil + '</p><h1>' + esc(doc.titre) + '</h1>' + sous + fleuron() +
        '<div class="a-actions">' + boutons(m, page) + '</div>' + extraits + '</header>' +
      '<div class="a-doc-corps' + (sommaire ? '' : ' a-sans-sommaire') + '">' + sommaire +
        '<div class="a-texte">' + page.corps + '</div></div></div>';
  }

  /* ——— Une période : une planche de l'atlas ——— */
  function oeuvre(o, x) {
    if (typeof x === 'string') return { titre: o.texte(x), sous: '' };
    return { titre: o.texte(x.titre), sous: o.texte([x.auteur, x.note].filter(Boolean).join(' · ')), etude: x.etude, image: x.image };
  }
  function gravure(m, fichier, titre, classe) {
    var im = m.image(fichier), esc = m.outils.esc;
    if (!im) return '';
    return '<figure class="' + (classe || 'a-gravure') + '"><div class="a-cadre"><img src="' + esc(im.chemin) + '" alt="' + esc(im.alt || im.titre) + '" loading="lazy"></div>' +
      '<figcaption><b>' + titre + '</b>' + esc([im.auteur, im.date].filter(Boolean).join(', ')) + ' · ' + esc(im.institution || '') + '</figcaption></figure>';
  }
  function notes(o, liste) {
    return liste.filter(function (x) { return x[1] && x[1].length; }).map(function (x) {
      return '<p><b>' + x[0] + '</b>' + x[1].map(function (y) { var w = oeuvre(o, y); return w.titre + (w.sous ? ' (' + w.sous + ')' : ''); }).join(' ; ') + '</p>';
    }).join('');
  }

  function periode(m, page) {
    var o = m.outils, esc = o.esc, p = page.periode, pr = p.projet || {}, at = atlas(p);
    var N = m.periodes.length;
    var planche = at.planche;
    var carteImg = planche && m.image(planche.image);
    var monde = m.image(CARTE_MONDE);
    var reperes = (planche && planche.reperes) || [];
    var legende = reperes.length ? '<ol class="a-legende-carte">' + reperes.map(function (r, i) {
      return '<li data-repere="' + (i + 1) + '"><span class="a-n">' + (i + 1) + '</span><span><b>' + esc(r.lieu) + '</b> — ' + o.texte(r.texte) + '</span></li>';
    }).join('') + '</ol>' : '';
    var figure;
    if (carteImg) {
      figure = '<figure class="a-carte-planche"><div class="a-cadre"><img src="' + esc(carteImg.chemin) + '" width="2000" height="1726" alt="Carte gravée de l’Europe, 1812, avec ' + reperes.length + ' repères numérotés.">' +
        (planche.route ? '<svg class="a-depart" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="' + esc(planche.route) + '"/></svg>' : '') +
        reperes.map(function (r, i) {
          return '<a class="a-repere" id="a-r' + (i + 1) + '" href="#a-l' + (i + 1) + '" style="--x:' + r.x + '%;--y:' + r.y + '%" aria-label="' + (i + 1) + ', ' + esc(r.lieu) + ' : ' + esc(String(r.texte).replace(/\*/g, '')) + '">' + (i + 1) + '</a>';
        }).join('') + '</div><figcaption>' + esc(carteImg.titre) + ', ' + esc(carteImg.auteur) + ', ' + esc(carteImg.date) + ' · ' + esc(carteImg.institution) + ', domaine public.' +
        (planche.route_texte ? ' ' + esc(planche.route_texte) : '') + '</figcaption></figure>';
    } else if (monde && (planche || at.carte)) {
      // pas de carte gravée pour ce continent : un détail de la mappemonde,
      // agrandi sur lui, avec ses repères (en % de la mappemonde)
      var centre = (planche && planche.centre) || at.carte;
      var zoom = (planche && planche.zoom) || 2.4;
      var gauche = Math.min(0, Math.max(100 - zoom * 100, 50 - centre.x * zoom));
      var haut = Math.min(0, Math.max(100 - zoom * 100, 50 - centre.y * zoom));
      figure = '<figure class="a-carte-planche a-detail"><div class="a-cadre a-loupe">' +
        '<div class="a-loupe-int" style="width:' + (zoom * 100) + '%;left:' + gauche.toFixed(2) + '%;top:' + haut.toFixed(2) + '%">' +
        '<img src="' + esc(monde.chemin) + '" width="2400" height="1387" alt="Détail de la mappemonde : ' + esc(minuscule(p.milieu)) +
          (reperes.length ? ', avec ' + reperes.length + ' repères numérotés' : '') + '.">' +
        (planche && planche.route ? '<svg class="a-depart" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="' + esc(planche.route) + '"/></svg>' : '') +
        reperes.map(function (r, i) {
          return '<a class="a-repere" id="a-r' + (i + 1) + '" href="#a-l' + (i + 1) + '" style="--x:' + r.x + '%;--y:' + r.y + '%" aria-label="' + (i + 1) + ', ' + esc(r.lieu) + ' : ' + esc(String(r.texte).replace(/\*/g, '')) + '">' + (i + 1) + '</a>';
        }).join('') + '</div></div>' +
        '<figcaption>Détail de la ' + esc(monde.titre.charAt(0).toLowerCase() + monde.titre.slice(1)) + ', ' + esc(monde.auteur.split(',')[0]) + ' · ' + esc(monde.institution.split(',')[0]) + ', domaine public.' +
        (planche && planche.route_texte ? ' ' + esc(planche.route_texte) : '') + '</figcaption></figure>';
    } else figure = '';

    // le carnet de route : la lettre de la mascotte, les fils rouges, le passeport
    var fil = pr.fil_rouge || pr.mascotte;
    var annee = m.projet.annee || {};
    var fils = (annee.fils_rouges || []);
    var passeport = fils.filter(function (f) { return f.cle === 'passeport'; })[0];
    var autresFils = fils.filter(function (f) { return f.cle !== 'passeport' && f.cle !== 'carte' && f.cle !== 'elevages'; });
    var lettre = fil ? '<div class="a-lettre-plume">' + (fil.embleme && m.image(fil.embleme) ?
        '<img src="' + esc(m.image(fil.embleme).chemin) + '" alt="' + esc(m.image(fil.embleme).alt || '') + '" loading="lazy">' : '') +
      '<h3>' + esc(fil.nom) + '</h3>' + (fil.message ? '<p class="a-ecrit">' + o.texte(fil.message) + '</p><p class="a-signe">' + esc(((annee.mascotte || {}).nom || '').split(',')[0]) + '</p>' : '') +
      '<p>' + o.texte(fil.texte || '') + '</p></div>' : '';
    var carnet = (lettre || autresFils.length || passeport) ? '<section class="a-chapitre" aria-labelledby="a-t-route">' +
      chapitre('Carnet de route', (annee.mascotte ? esc(annee.mascotte.nom.split(',')[0]) + ', ' : '') + 'les fils rouges', 'a-t-route') +
      '<div class="a-carnet-route' + (lettre ? '' : ' a-sans-lettre') + '">' + lettre + '<div>' +
        '<div class="a-notes">' + autresFils.map(function (f) { return '<p><b>' + esc(f.nom) + '</b>' + o.texte(f.texte) + '</p>'; }).join('') +
        notes(o, [['Les sorties et les projets', pr.sorties]]) + '</div>' +
        (passeport ? '<div class="a-passeport"><h3>' + esc(passeport.nom) + '</h3><p>' + o.texte(passeport.texte) + '</p>' +
          '<div class="a-visas" role="list" aria-label="Les visas du passeport">' + m.periodes.map(function (q) {
            var fait = q.statut === 'passee' || q.n === p.n && q.statut === 'en-cours';
            return '<span role="listitem" class="' + (fait ? 'a-fait' : '') + (q.n === p.n ? ' a-ici-visa' : '') + '">' + esc(court(q.milieu)) +
              (fait ? '<span class="a-visa-sr"> : tamponné</span>' : '') + '</span>';
          }).join('') + '</div></div>' : '') +
      '</div></div></section>' : '';

    // le glossaire
    var glossaire = p.corpus ? '<section class="a-chapitre" aria-labelledby="a-t-glossaire">' +
      chapitre('Glossaire', 'Les ' + o.nombre(p.corpus.corpus.length) + ' corpus de ' + esc(minuscule(p.milieu)), 'a-t-glossaire', 'Les mots de l’enfant, écrits comme il les lira.') +
      '<div class="a-glossaire">' + p.corpus.corpus.map(function (k, i) {
        return '<section><h3><small>Corpus ' + o.romain(i + 1) + '</small>' + esc(k.titre.charAt(0).toUpperCase() + k.titre.slice(1)) + '</h3><ul>' +
          k.mots.map(function (w) { return '<li class="mot-enfant">' + esc(w) + '</li>'; }).join('') + '</ul></section>';
      }).join('') + '</div>' +
      (p.corpus.sans_carte.length ? '<p class="a-sans-carte">Et pour parler de tout cela : <span class="mot-enfant">' + p.corpus.sans_carte.map(esc).join(', ') + '</span>.</p>' : '') +
      '</section>' : '';

    // le bestiaire et l'herbier
    var docGravures = (pr.documentaires || []).filter(function (x) { return x.image; });
    var herbier = ['faune', 'flore'].map(function (g) {
      var es = p.imagier[g] || [];
      if (!es.length) return '';
      return '<li class="a-groupe">' + (g === 'faune' ? 'la faune' : 'la flore') + '</li>' + es.map(function (e) {
        return '<li><div class="a-ovale"><img src="' + esc(e.chemin) + '" alt="" loading="lazy" width="1100" height="753"></div><span class="mot-enfant">' + esc(e.nom) + '</span></li>';
      }).join('');
    }).join('');
    var nbF = (p.imagier.faune || []).length, nbV = (p.imagier.flore || []).length;
    var bestiaire = (herbier || docGravures.length) ? '<section class="a-chapitre" aria-labelledby="a-t-bestiaire">' +
      chapitre('Bestiaire et herbier', 'Animaux et plantes de ' + esc(minuscule(p.milieu)), 'a-t-bestiaire',
        herbier ? nbF + ' animaux et ' + nbV + ' plantes en photographies : les cartes du cahier «\u00a0Imagier\u00a0». Au survol, la photographie reprend ses couleurs.' : '') +
      (docGravures.length ? '<div class="a-planches-gravees">' + docGravures.map(function (x) { return gravure(m, x.image, o.texte(x.titre)); }).join('') + '</div>' : '') +
      (herbier ? '<ul class="a-herbier">' + herbier + '</ul>' : '') + '</section>' : '';

    // la bibliothèque
    var albums = pr.albums || [];
    var albGravures = albums.filter(function (x) { return x.image; });
    var bibli = (albums.length || (pr.textes || []).length) ? '<section class="a-chapitre" aria-labelledby="a-t-biblio">' +
      chapitre('Bibliothèque', 'Contes, albums et comptines', 'a-t-biblio') +
      '<div class="a-bibliotheque' + (albGravures.length ? '' : ' a-sans-image') + '">' +
        (albGravures.length ? '<div class="a-bibli-images">' + albGravures.map(function (x) { return gravure(m, x.image, o.texte(x.titre)); }).join('') + '</div>' : '') +
        '<div><ol class="a-ouvrages">' + albums.map(function (x, i) {
          var w = oeuvre(o, x);
          return '<li><span class="a-rom">' + o.romain(i + 1) + '</span><span><b>' + w.titre + '</b>' + (w.sous ? '<small>' + w.sous + '</small>' : '') + '</span>' +
            (w.etude ? '<span class="a-etoile">★ étude approfondie</span>' : '') + '</li>';
        }).join('') + '</ol><div class="a-notes">' +
        notes(o, [['Documentaires', pr.documentaires], ['Textes appris', pr.textes], ['Spectacle', pr.spectacle]]) + '</div></div></div></section>' : '';

    // le cabinet des arts
    var oeuvres = pr.oeuvres || [];
    var toiles = oeuvres.filter(function (x) { return x.image; });
    var cabinet = (oeuvres.length || (pr.musique || []).length) ? '<section class="a-chapitre" aria-labelledby="a-t-cabinet">' +
      chapitre('Cabinet des arts', 'Les œuvres et la musique', 'a-t-cabinet') +
      '<div class="a-cabinet' + (toiles.length ? '' : ' a-sans-image') + '">' + toiles.map(function (x) {
        var w = oeuvre(o, x);
        return gravure(m, x.image, w.titre + (x.auteur ? ', ' + o.texte(x.auteur) : ''), 'a-toile').replace('<figcaption><b>', '<figcaption><b>');
      }).join('') +
      '<div class="a-notes a-une-colonne">' + oeuvres.filter(function (x) { return !x.image; }).map(function (x) {
        var w = oeuvre(o, x); return '<p><b>' + w.titre + '</b>' + w.sous + '</p>';
      }).join('') + (pr.musique || []).map(function (x) {
        var w = oeuvre(o, x); return '<p><b>' + o.icone('music') + ' ' + w.titre + '</b>' + w.sous + '</p>';
      }).join('') + '</div></div></section>' : '';

    // le portefeuille et les documents
    var docs = p.documents.map(function (d) {
      return '<li><a href="' + d.lien + '">' + o.icone(d.icone) + '<span><b>' + esc(d.titre) + '</b><small>' + esc(d.desc) + '</small></span></a></li>';
    }).join('') + p.extraits.map(function (e) {
      return '<li><a href="' + e.href + '" download="' + esc(e.nom) + '">' + o.icone(e.icone) + '<span><b>' + esc(e.titre) + '</b><small>l’extrait de la planche, en PDF</small></span>' + o.icone('download', 'a-dl') + '</a></li>';
    }).join('');
    var prec = m.periode(p.n - 1), suiv = m.periode(p.n + 1);
    var port = '<section class="a-chapitre" id="a-portefeuille" aria-labelledby="a-t-port">' +
      chapitre('Portefeuille de la planche ' + p.romain, p.cahiers.length ? 'Les cahiers de ' + esc(minuscule(p.milieu)) : 'Les documents de la planche', 'a-t-port',
        p.cahiers.length ? '' : 'Les cahiers de cette planche seront prêts pour le ' + esc(o.jourLong(p.debut)) + '.') +
      (p.cahiers.length ? portefeuille(m, p, false) + '<p class="a-note-materiel">' + esc(m.materielNote) + '</p>' : '') +
      '<ul class="a-docs-planche" id="a-documents">' + docs + '</ul>' +
      '<nav class="a-suite" aria-label="Les planches"><a href="' + (prec ? prec.lien : '#/accueil') + '"><small>← ' + (prec ? 'planche ' + prec.romain : 'retour') + '</small>' +
        (prec ? esc(prec.milieu) : 'La carte de l’année') + '</a>' +
        (suiv ? '<a class="a-suivante" href="' + suiv.lien + '"><small>planche ' + suiv.romain + ' →</small>' + esc(suiv.milieu) + ', à partir du ' + esc(o.jourCourt(suiv.debut)) + '</a>'
              : '<a class="a-suivante" href="#/accueil"><small>fin du voyage →</small>La carte de l’année</a>') + '</nav></section>';

    var esquisse = !p.prete ? '<p class="a-esquisse-note">Planche esquissée : elle se gravera avec la période. On n’y lit que ce que le projet annuel prévoit déjà.</p>' : '';
    return '<div class="a-feuillet a-planche" data-periode="' + p.n + '">' +
      '<div class="a-planche-tete' + (figure ? '' : ' a-sans-carte') + '"><div>' +
        '<p class="a-num">Planche ' + p.romain + ' de ' + o.romain(N) + '</p><h1>' + esc(p.milieu) + '</h1>' +
        '<p class="a-dates">' + esc(p.dates.long) + '</p>' +
        '<p class="a-meta">' + p.sem + ' semaines · zone ' + esc(m.classe.zone) + ' · ' + etat(p) + '</p>' +
        (pr.resume ? '<p class="a-chapo">' + o.texte(pr.resume) + '</p>' : '') + esquisse +
        '<div class="a-actions a-gauche">' + (p.cahiers.length ? '<a class="a-bouton" href="#a-portefeuille">' + o.icone('printer') + 'Les cahiers</a>' : '') +
          '<a class="a-bouton a-clair" href="#a-documents">' + o.icone('book-open') + 'Les documents</a></div>' +
        legende + '</div>' + figure + '</div>' +
      carnet + glossaire + bestiaire + bibli + cabinet + port + '</div>';
  }

  /* ——— Une page qui n'existe pas : terra incognita ——— */
  function introuvable() {
    return '<div class="a-feuillet a-doc"><header class="a-doc-tete"><p class="a-fil">Hors de l’atlas</p><h1>Terra incognita</h1>' + fleuron() +
      '<p class="a-sous">Cette page n’existe pas, ou plus. Les cartographes d’autrefois écrivaient ces mots sur les terres inconnues.</p>' +
      '<div class="a-actions"><a class="a-bouton" href="#/accueil">Revenir à la carte de l’année</a></div></header></div>';
  }

  /* ——— Le pied : le colophon ——— */
  function pied(m) {
    var esc = m.outils.esc, C = m.classe;
    var sources = [];
    m.images.forEach(function (im) {
      var s = (im.institution || '').split(',')[0];
      if (s && sources.indexOf(s) === -1) sources.push(s);
    });
    return '<div class="a-colophon"><div class="a-colophon-int">' + fleuron() +
      (C.enseignant.signature ? '<p class="a-signature-classe">La classe ' + esc(GS.de(C.enseignant.signature)) + '</p>' : '') +
      '<p>' + esc(m.pied.conformite) + ' ' + esc(m.pied.calendrier) + '</p>' +
      '<a class="a-signature" href="' + m.signature.lien + '">' + rose() + '<span>Atlas de la classe<b>' + esc(m.signature.texte) + '</b></span></a>' +
      '<p class="a-credits">Cartes et gravures anciennes du domaine public (' + esc(sources.join(', ')) + ') ; photographies de l’imagier : iNaturalist, CC BY et CC0. ' +
      '<a href="' + m.pied.credits + '">Tous les crédits</a></p></div></div>';
  }

  /* ——— Après le rendu : la forme seulement ——— */
  function enArticles(racine, m) {
    var texte = racine.querySelector('.a-texte');
    if (!texte) return;
    var periodeCourante = null;
    Array.prototype.slice.call(texte.children).forEach(function (el) {
      if (el.tagName === 'H2') {
        var n = /P[ée]riode\s*(\d)/i.exec(el.textContent);
        periodeCourante = n ? m.periode(parseInt(n[1], 10)) : null;
        if (periodeCourante) {
          var badge = el.querySelector('.zone-badge');
          var esquisse = /esquisse/i.test(el.textContent);
          el.className = 'a-titre-planche' + (esquisse ? ' a-esquisse' : '');
          el.dataset.periode = periodeCourante.n;
          el.innerHTML = '<span class="a-num">Planche ' + periodeCourante.romain + '</span><span class="a-nom">' + m.outils.esc(periodeCourante.milieu) + '</span>' +
            (esquisse ? '<span class="a-mention">esquisse</span>' : '');
          if (badge) el.appendChild(badge);
        }
        return;
      }
      if (el.tagName !== 'TABLE') return;
      var tetes = Array.prototype.map.call(el.querySelectorAll('thead th'), function (th) { return th.textContent.trim(); });
      if (tetes.length < 3 || !/fin de période|sait faire/i.test(tetes[tetes.length - 1])) {
        // un autre tableau : il défile dans son cadre, jamais la page
        var cadre = document.createElement('div');
        cadre.className = 'a-tableau';
        el.parentNode.insertBefore(cadre, el);
        cadre.appendChild(el);
        return;
      }
      var bloc = document.createElement('div');
      bloc.className = 'a-articles';
      Array.prototype.forEach.call(el.querySelectorAll('tbody tr'), function (tr, i) {
        var cs = tr.children;
        var art = document.createElement('article');
        art.className = 'a-article';
        if (periodeCourante) art.dataset.periode = periodeCourante.n;
        var h = '<h3><span class="a-rom">' + m.outils.romain(i + 1) + '</span>' + cs[0].innerHTML + '</h3><div class="a-princ">';
        for (var k = 1; k < cs.length - 1; k++) {
          var lab = /situation/i.test(tetes[k]) && periodeCourante ? 'Avec ' + minuscule(periodeCourante.milieu) : tetes[k];
          h += '<p><b class="a-lab">' + m.outils.esc(lab) + '</b>' + cs[k].innerHTML + '</p>';
        }
        h += '</div><aside class="a-marge"><b>En fin de période</b>' + cs[cs.length - 1].innerHTML + '</aside>';
        art.innerHTML = h;
        bloc.appendChild(art);
      });
      el.replaceWith(bloc);
    });
  }

  function monter(racine, m, page) {
    if (observateur) { observateur.disconnect(); observateur = null; }
    if (page.type === 'document' || page.type === 'credits') {
      enArticles(racine, m);
      var liens = racine.querySelectorAll('.a-sommaire a');
      if (liens.length && 'IntersectionObserver' in window) {
        observateur = new IntersectionObserver(function (es) {
          es.forEach(function (e) {
            if (!e.isIntersecting) return;
            Array.prototype.forEach.call(liens, function (a) { a.classList.toggle('a-actif', a.getAttribute('href') === '#' + e.target.id); });
          });
        }, { rootMargin: '-20% 0px -70% 0px' });
        Array.prototype.forEach.call(liens, function (a) {
          var c = document.getElementById(a.getAttribute('href').slice(1));
          if (c) observateur.observe(c);
        });
      }
    }
    if (page.type === 'periode') {
      // la légende allume son repère sur la carte
      Array.prototype.forEach.call(racine.querySelectorAll('[data-repere]'), function (li) {
        var r = document.getElementById('a-r' + li.dataset.repere);
        li.id = 'a-l' + li.dataset.repere;
        if (!r) return;
        li.addEventListener('mouseenter', function () { r.classList.add('a-actif'); });
        li.addEventListener('mouseleave', function () { r.classList.remove('a-actif'); });
      });
    }
  }

  GS.theme({
    entete: entete, accueil: accueil, document: document_, periode: periode,
    introuvable: introuvable, pied: pied, monter: monter
  });
})();
