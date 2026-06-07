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
      ${h.enPreparation ? '<span class="dossier-scelle">Sous scellés</span>' : ""}
      <div class="dossier-photo">
        <img src="${h.portrait}" alt="${h.nom}"
             onerror="this.onerror=null;this.src='portraits/inconnu.svg'">
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
function ouvrirHistoire(h) {
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
  $("role-enquete").textContent = h.fiche || h.role;
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

// ---- Jauge (axe d'enquête) ----
function rendreJauge(n) {
  let s = "";
  for (let i = 1; i <= 5; i++) {
    s += `<span class="seg ${i <= n ? "on" : ""}"></span>`;
  }
  const prio = n <= 1 ? '<span class="prio-max">Priorité max</span>' : "";
  return s + prio;
}

// ---- Charger la question courante (phase scène) ----
function chargerQuestion() {
  const q = histoireCourante.questions[qIndex];
  const total = histoireCourante.questions.length;

  // En-tête méta
  $("rubrique-chip").textContent = `${q.rubrique.icone} ${q.rubrique.nom}`;
  $("jauge").innerHTML = rendreJauge(q.rubrique.jauge);
  $("etape-courante").textContent = `Question ${qIndex + 1} / ${total}`;
  $("barre-remplie").style.width = `${(qIndex / total) * 100}%`;

  // Scène
  $("scene-lieu").textContent = q.scene.lieu || "";
  // La durée réelle est affichée par le lecteur ; pas d'étiquette figée.
  $("scene-duree").textContent = "";
  // Le script du podcast n'est pas affiché : l'audio est le contenu de la scène.

  // Audio
  audio.src = q.scene.audio;
  audio.load();
  $("temps-actuel").textContent = "0:00";
  $("temps-total").textContent = "0:00";
  $("barre-audio-remplie").style.width = "0%";
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
  $("barre-audio-remplie").style.width = `${(audio.currentTime / audio.duration) * 100 || 0}%`;
});
$("barre-audio").addEventListener("click", (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  if (audio.duration) audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
});

// ---- Boutons de navigation entre phases ----
$("btn-vers-question").addEventListener("click", () => allerPhase("question"));
$("btn-reveler").addEventListener("click", () => allerPhase("revelation"));
$("btn-q-suivante").addEventListener("click", questionSuivante);

$("btn-commencer-enquete").addEventListener("click", demarrerEnquete);
$("btn-briefing-retour").addEventListener("click", () => montrerEcran("ecran-accueil"));

$("btn-retour").addEventListener("click", () => {
  audio.pause();
  montrerEcran("ecran-accueil");
});
$("btn-recommencer").addEventListener("click", () => {
  audio.pause();
  montrerEcran("ecran-accueil");
});
$("btn-prepa-retour").addEventListener("click", () => montrerEcran("ecran-accueil"));

// ---- Démarrage ----
initAccueil();
