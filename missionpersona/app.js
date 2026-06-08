// ============================================================
//  LOGIQUE DE L'APPLICATION
//  Flux par question : SCÈNE (audio) → QUESTION → RÉVÉLATION
//  Aucune temporisation : l'utilisateur avance toujours lui-même.
// ============================================================

let histoireCourante = null;
let qIndex = 0;
let phase = "scene"; // "scene" | "question" | "revelation"

const $ = (id) => document.getElementById(id);
const audio = $("audio");

// ---- Routage par URL (ex: /missionpersona/marcel) ----
// BASE = chemin de base du site (« /missionpersona/ » en prod, « / » en local).
const BASE = (() => {
  try {
    return new URL(document.baseURI).pathname.replace(/[^/]*$/, "");
  } catch (e) {
    return "/";
  }
})();

function idDepuisURL() {
  let rest = location.pathname;
  if (rest.startsWith(BASE)) rest = rest.slice(BASE.length);
  rest = rest.replace(/index\.html$/, "").replace(/^\/+|\/+$/g, "");
  return rest; // "" pour l'accueil, sinon l'id de l'affaire
}

function majURL(id, remplacer) {
  const url = BASE + (id || "");
  const etat = { id: id || null };
  if (remplacer) history.replaceState(etat, "", url);
  else history.pushState(etat, "", url);
}

// ---- Navigation entre écrans ----
function montrerEcran(id) {
  document.querySelectorAll(".ecran").forEach((e) => e.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo(0, 0);
}

// ---- Accueil : grille de dossiers ----
function initAccueil() {
  $("titre-bureau").textContent = ENQUETE.titre;
  $("soustitre-bureau").textContent = ENQUETE.sousTitre || "";

  const grille = $("grille-dossiers");
  grille.innerHTML = "";

  HISTOIRES.forEach((h) => {
    const carte = document.createElement("button");
    carte.className = "dossier" + (h.enPreparation ? " dossier-prepa" : "");
    carte.innerHTML = `
      <span class="dossier-num">${h.numero}</span>
      <div class="dossier-photo">
        <img src="${h.portrait}" alt="${h.nom}"
             onerror="this.onerror=null;this.src='portraits/inconnu.svg'">
        ${h.enPreparation ? '<span class="dossier-scelle">Sous scellés</span>' : ""}
      </div>
      <div class="dossier-infos">
        <div class="dossier-nom">${h.nom}</div>
        <div class="dossier-role">${h.role}</div>
        <div class="dossier-accroche">${h.accroche}</div>
        <span class="dossier-ouvrir">${h.enPreparation ? "Dossier non instruit" : "Ouvrir le dossier ›"}</span>
      </div>
    `;
    carte.addEventListener("click", () => ouvrirHistoire(h));
    grille.appendChild(carte);
  });
}

// ---- Ouvrir une affaire ----
function ouvrirHistoire(h, options) {
  const opts = options || {};
  if (opts.url !== false) majURL(h.id, opts.remplacer);

  if (h.enPreparation || !h.questions || h.questions.length === 0) {
    $("prepa-nom").textContent = h.nom;
    montrerEcran("ecran-prepa");
    return;
  }
  histoireCourante = h;
  qIndex = 0;

  // En-tête de l'écran d'enquête
  $("badge-affaire").textContent = h.numero;
  $("nom-enquete").textContent = h.nom;
  $("avatar-enquete").src = h.portrait;

  // Briefing si disponible, sinon démarrage direct
  if (h.briefing) {
    remplirBriefing(h);
    montrerEcran("ecran-briefing");
  } else {
    demarrerEnquete();
  }
}

// ---- Remplir l'écran de briefing ----
function remplirBriefing(h) {
  const b = h.briefing;
  $("brief-portrait").src = h.portrait;
  $("brief-affaire").textContent = h.numero;
  $("brief-nom").textContent = h.nom;
  $("brief-role").textContent = h.role;
  $("brief-securite").textContent = b.securite || "";
  $("brief-identite").innerHTML = (b.identite || [])
    .map(([k, v]) => `<div class="id-ligne"><span class="id-cle">${k}</span><span class="id-val">${v}</span></div>`)
    .join("");
  $("brief-incident").innerHTML = (Array.isArray(b.incident) ? b.incident : [b.incident])
    .map((p) => `<p>${p}</p>`)
    .join("");
  $("brief-mission").textContent = b.mission || "";
}

// ---- Lancer l'enquête (1re question) ----
function demarrerEnquete() {
  qIndex = 0;
  allerPhase("scene");
  montrerEcran("ecran-lecture");
}

// ---- Identimètre : les 5 axes (axe courant en valeur, autres grisés) ----
function rendreIdentimetre(rubriqueActive) {
  const liste = typeof RUBRIQUES !== "undefined" ? RUBRIQUES : [];
  $("identimetre").innerHTML = liste
    .map((r) => {
      const actif = r === rubriqueActive || r.nom === (rubriqueActive && rubriqueActive.nom);
      return `<div class="idm-cell ${actif ? "actif" : ""}">
        <span class="idm-ico">${r.icone}</span>
        <span class="idm-lib">${r.court || r.nom}</span>
      </div>`;
    })
    .join("");
}

// ---- Forme d'onde du lecteur (construite une fois) ----
const ONDE_N = 46;
function construireOnde() {
  const onde = $("onde");
  if (!onde || onde.childElementCount) return;
  let html = "";
  for (let i = 0; i < ONDE_N; i++) {
    // hauteurs déterministes pour un rendu "pièce sonore"
    const h = 22 + Math.round(Math.abs(Math.sin(i * 1.7) + 0.5 * Math.sin(i * 0.55)) * 60);
    html += `<span style="height:${Math.min(100, h)}%"></span>`;
  }
  onde.innerHTML = html;
}
function majOnde(ratio) {
  const barres = $("onde").children;
  for (let i = 0; i < barres.length; i++) {
    barres[i].classList.toggle("on", (i + 0.5) / barres.length <= ratio);
  }
}

// ---- Charger la question courante (phase scène) ----
function chargerQuestion() {
  const q = histoireCourante.questions[qIndex];
  const total = histoireCourante.questions.length;

  // N° de question + fil d'Ariane + identimètre
  $("etape-courante").textContent = `Question ${qIndex + 1} / ${total}`;
  $("barre-remplie").style.width = `${((qIndex + 1) / total) * 100}%`;
  rendreIdentimetre(q.rubrique);

  // Scène
  $("scene-lieu").textContent = q.scene.lieu || "";

  // Audio
  audio.src = q.scene.audio;
  audio.load();
  $("temps-actuel").textContent = "0:00";
  $("temps-total").textContent = "0:00";
  majOnde(0);
  majIconePlay(false);

  // Question + consigne
  $("texte-question").textContent = q.question;
  if (q.consigne) {
    $("bloc-consigne").style.display = "";
    $("texte-consigne").textContent = q.consigne;
  } else {
    $("bloc-consigne").style.display = "none";
  }

  // Révélation
  if (q.revelation) {
    $("revelation-titre").textContent = q.revelation.titre || "";
    $("revelation-texte").textContent = q.revelation.texte || "";
    $("revelation-indice").textContent = q.revelation.indice || "";
  }

  // Libellé du bouton de révélation (dernière question)
  const estDerniere = qIndex === total - 1;
  $("btn-q-suivante").textContent = estDerniere ? "Clore le dossier ›" : "Question suivante ›";
  $("btn-reveler").style.display = q.revelation ? "" : "none";
}

// ---- Gestion des phases ----
function allerPhase(p) {
  phase = p;
  const q = histoireCourante.questions[qIndex];

  if (p === "scene") chargerQuestion();
  if (p !== "scene") audio.pause();

  $("phase-scene").classList.toggle("active", p === "scene");
  $("phase-question").classList.toggle("active", p === "question");
  $("phase-revelation").classList.toggle("active", p === "revelation");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function questionSuivante() {
  audio.pause();
  qIndex++;
  if (qIndex < histoireCourante.questions.length) {
    allerPhase("scene");
  } else {
    montrerEcran("ecran-fin");
  }
}

// ---- Lecteur audio ----
function majIconePlay(enLecture) {
  $("icone-play").textContent = enLecture ? "❚❚" : "▶";
}
$("btn-play").addEventListener("click", () => {
  if (audio.paused) audio.play();
  else audio.pause();
});
audio.addEventListener("play", () => majIconePlay(true));
audio.addEventListener("pause", () => majIconePlay(false));
audio.addEventListener("ended", () => majIconePlay(false));

function formatTemps(s) {
  if (isNaN(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
}
audio.addEventListener("loadedmetadata", () => {
  $("temps-total").textContent = formatTemps(audio.duration);
});
audio.addEventListener("timeupdate", () => {
  $("temps-actuel").textContent = formatTemps(audio.currentTime);
  majOnde((audio.currentTime / audio.duration) || 0);
});
$("onde").addEventListener("click", (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  if (audio.duration) audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
});

// ---- Boutons de navigation entre phases ----
$("btn-vers-question").addEventListener("click", () => allerPhase("question"));
$("btn-reveler").addEventListener("click", () => allerPhase("revelation"));
$("btn-q-suivante").addEventListener("click", questionSuivante);

$("btn-commencer-enquete").addEventListener("click", demarrerEnquete);

function retourAccueil() {
  audio.pause();
  majURL("");
  montrerEcran("ecran-accueil");
}
$("btn-briefing-retour").addEventListener("click", retourAccueil);
$("btn-retour").addEventListener("click", retourAccueil);
$("btn-recommencer").addEventListener("click", retourAccueil);
$("btn-prepa-retour").addEventListener("click", retourAccueil);

// ---- Bouton précédent/suivant du navigateur ----
window.addEventListener("popstate", () => {
  audio.pause();
  appliquerRoute(true);
});

// ---- Appliquer la route courante (sans toucher à l'historique) ----
function appliquerRoute(remplacer) {
  const id = idDepuisURL();
  const h = id && HISTOIRES.find((x) => x.id === id);
  if (h) {
    ouvrirHistoire(h, { url: false });
  } else {
    montrerEcran("ecran-accueil");
  }
}

// ---- Démarrage ----
construireOnde();
initAccueil();
appliquerRoute();
