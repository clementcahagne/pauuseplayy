// ============================================================
//  CONFIGURATION DES HISTOIRES
// ============================================================
// HISTOIRES = liste des affaires (une par personnage).
//
// Chaque affaire possède une liste "questions". Pour chacune :
//   - rubrique    : axe d'enquête {icone, nom, jauge}
//   - scene       : { lieu, duree, audio, dialogue:[{qui, dit}] }
//                   (qui = "" -> didascalie en italique)
//   - question    : la question posée aux apprenants
//   - consigne    : la consigne de prise de notes (optionnel)
//   - revelation  : { titre, texte, indice } (optionnel)
//
// Aucune temporisation : l'utilisateur avance lui-même.
// ============================================================

const ENQUETE = {
  titre: "Bureau des Affaires Non Résolues",
  sousTitre: "Sélectionnez un dossier",
};

// --- Axes d'enquête (rubriques) ---
const R_PERSO  = { icone: "🧑", nom: "Profil personnel",       court: "Profil perso" };
const R_PRO    = { icone: "💼", nom: "Profil professionnel",   court: "Profil pro" };
const R_CONN   = { icone: "📚", nom: "Niveau de connaissance", court: "Connaissance" };
const R_MOTIV  = { icone: "🎯", nom: "Attentes et motivations", court: "Motivations" };
const R_FREINS = { icone: "⚠️", nom: "Freins et pain points",  court: "Freins" };

// Ordre des 5 axes pour l'identimètre
const RUBRIQUES = [R_PERSO, R_PRO, R_CONN, R_MOTIV, R_FREINS];

// ============================================================
//  AFFAIRE N°01 — MARCEL DUBOIS
// ============================================================
const MARCEL = {
  id: "marcel",
  numero: "Affaire n°01",
  nom: "Marcel Dubois",
  role: "Responsable Formation Technique",
  fiche: "52 ans · TechnoPlast Industries (180 employés) · 27 ans d'ancienneté",
  accroche: "12 mars 2024, 9h05. Il débranche le serveur en pleine formation. Pourquoi ?",
  portrait: "portraits/Marcel_Dubois.png",
  briefing: {
    securite: "Dossier classé — Niveau de sécurité : Confidentiel",
    identite: [
      ["Nom", "DUBOIS, Marcel"],
      ["Âge", "52 ans"],
      ["Profession", "Responsable Formation Technique"],
      ["Entreprise", "TechnoPlast Industries (180 employés)"],
      ["Ancienneté", "27 ans"],
    ],
    incident: [
      "12 mars 2024, 9h07. Le serveur de visioconférence de l'entreprise TechnoPlast tombe en panne, précisément au moment du lancement d'une session de formation obligatoire « Transition Digitale ».",
      "Les caméras de surveillance montrent Marcel Dubois, Responsable Formation Technique, quittant la salle serveur à 9h05, soit 2 minutes avant la panne.",
      "Interrogé, Marcel nie d'abord toute implication. Puis, face aux preuves, il s'effondre et avoue : « Oui, c'est moi. J'ai débranché le serveur. »",
    ],
    mission: "Reconstituer le profil psychologique et professionnel de Marcel pour comprendre ce qui a transformé un employé modèle en saboteur de formation… Et, par la même occasion, apprendre à connaître VOS apprenant·e·s.",
  },
  questions: [
    // ---------- 1 ----------
    {
      rubrique: R_PERSO,
      scene: {
        lieu: "Interrogatoire — Salle 3",
        duree: "2 min 50",
        audio: "audio/MARCEL1.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur ouvre le dossier. Marcel, 52 ans, est assis face à vous. Costume-cravate froissé, lunettes de lecture pendues au cou. Il soupire et croise les bras." },
          { qui: "Marcel", dit: "Écoutez, je ne suis pas un criminel. Je suis juste... fatigué. Fatigué de devoir tout réapprendre à mon âge." },
        ],
      },
      question: "Quelle est la tranche d'âge majoritaire de votre public cible ?",
      consigne: "Notez la tranche d'âge de VOS apprenants sur votre fiche d'enquête (section 🧑 Profil personnel). Cette information conditionne leur rapport au digital et au changement.",
      revelation: {
        titre: "PROFIL : GÉNÉRATION TRANSITION",
        texte: "Marcel, 52 ans, est un « digital immigrant ». Il a commencé sa carrière en 1995, quand les fichiers vivaient dans des armoires métalliques. Sa génération a dû s'adapter sans mode d'emploi, dans l'urgence, avec la peur de paraître incompétente. Outlook, Excel, Teams : à chaque fois, la même sensation de partir de zéro et de courir après un train déjà en marche.",
        indice: "L'âge n'est pas qu'un chiffre, c'est un contexte d'apprentissage.",
      },
    },
    // ---------- 2 ----------
    {
      rubrique: R_PERSO,
      scene: {
        lieu: "Interrogatoire — Salle 3",
        audio: "audio/MARCEL2.mp3",
        dialogue: [
          { qui: "", dit: "Marcel desserre sa cravate et fixe ses mains." },
          { qui: "Marcel", dit: "Vous savez ce qui me manque le plus ? Les formations d'avant. On était dans une vraie salle. Avec un tableau blanc, des gens en chair et en os. On pouvait lever la main sans cliquer sur un bouton. On pouvait parler pendant la pause-café, pas dans un « chat ». C'était... humain." },
          { qui: "", dit: "Il marque une pause." },
          { qui: "Marcel", dit: "Maintenant, tout doit être « digital », « interactif », « innovant ». Mais pour moi, c'est juste... froid." },
        ],
      },
      question: "Quel est le niveau d'aisance de votre public avec le changement et la nouveauté ?",
      consigne: "Évaluez si VOS apprenants sont plutôt ouverts aux nouvelles méthodes ou résistants. Notez des exemples concrets si possible (section 🧑 Profil personnel).",
      revelation: {
        titre: "PROFIL : RÉSISTANCE AU CHANGEMENT BRUTAL",
        texte: "Marcel n'est pas « contre le changement » par principe : il a accepté Outlook, Excel, SharePoint, mais chaque fois on lui a laissé quelques mois et l'aide d'un collègue. Ce qu'il ne supporte pas, ce sont les bascules brutales, imposées sans transition ni accompagnement. En mars 2024, l'annonce du « tout en distanciel obligatoire dès le 12 mars » a été un ultimatum sans période d'adaptation : le sol s'est dérobé.",
        indice: "Ce n'est pas le digital qu'il rejette, c'est la violence du rythme imposé.",
      },
    },
    // ---------- 3 ----------
    {
      rubrique: R_PRO,
      scene: {
        lieu: "Interrogatoire — Salle 3",
        audio: "audio/MARCEL3.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur pousse une photo vers Marcel : c'est lui en 1997, lors d'une formation technique, entouré d'ouvriers souriants." },
          { qui: "Inspecteur", dit: "27 ans d'ancienneté chez TechnoPlast. Vous étiez un pilier. Parlez-moi de votre métier, avant... l'incident." },
          { qui: "", dit: "Marcel regarde la photo avec nostalgie." },
          { qui: "Marcel", dit: "Mon métier ? Former des techniciens. Leur montrer comment utiliser les machines, comment respecter les normes de sécurité, comment détecter une panne. Un vrai métier de TRANSMISSION." },
        ],
      },
      question: "Quelle est la fonction ou le métier exact de votre public ?",
      consigne: "Soyez précis sur le métier RÉEL de VOS apprenants. Ne notez pas « employé » ou « cadre », mais le titre exact et les missions principales (section 💼 Profil professionnel).",
      revelation: {
        titre: "PROFIL : FORMATEUR TECHNIQUE TERRAIN",
        texte: "Marcel est Responsable Formation Technique dans une PME industrielle de 180 personnes. Il forme les opérateurs sur les machines de découpe et d'injection, anime les recyclages sécurité et transmet les gestes métiers en situation réelle, dans l'atelier, en montrant et corrigeant le geste en direct. Son principal outil pédagogique, ce sont ses mains. Un métier incompatible, dans son esprit, avec une webcam.",
        indice: "Son métier est ancré dans le geste et la présence physique.",
      },
    },
    // ---------- 4 ----------
    {
      rubrique: R_PRO,
      scene: {
        lieu: "Interrogatoire — Salle 3",
        audio: "audio/MARCEL4.mp3",
        dialogue: [
          { qui: "", dit: "Marcel tape doucement du poing sur la table." },
          { qui: "Marcel", dit: "Mais vous comprenez pas ! Comment vous voulez que je montre un réglage de machine sur une webcam ? Comment je fais pour vérifier que le stagiaire a bien compris le geste de sécurité si je le vois sur un écran 10×10 cm ?!" },
          { qui: "", dit: "Il hausse le ton, frustré." },
          { qui: "Marcel", dit: "Moi, je forme sur des MACHINES. Des vraies. Avec des pièces qui tournent, qui chauffent, qui peuvent blesser. Pas sur PowerPoint !" },
        ],
      },
      question: "Quel est l'environnement de travail habituel de votre public (bureau, terrain, hybride, télétravail) ?",
      consigne: "Décrivez précisément l'environnement quotidien de VOS apprenants. Cela influence directement le format de formation adapté (section 💼 Profil professionnel).",
      revelation: {
        titre: "PROFIL : ENVIRONNEMENT 100% TERRAIN",
        texte: "Marcel passe 70% de son temps en atelier : bruit constant, températures variables, odeurs industrielles, mains sales et gants obligatoires, sans ordinateur à portée. Son « bureau » est un coin de table dans un préfabriqué, sa « salle de formation » un espace près de la ligne de production. Former depuis son salon, casque sur les oreilles, lui paraît aussi absurde que d'opérer un patient par visioconférence.",
        indice: "Son environnement professionnel est incompatible (pour lui) avec le distanciel.",
      },
    },
    // ---------- 5 ----------
    {
      rubrique: R_CONN,
      scene: {
        lieu: "Interrogatoire — Salle 3",
        audio: "audio/MARCEL5.MP3",
        dialogue: [
          { qui: "", dit: "L'inspecteur ouvre un nouveau dossier." },
          { qui: "Inspecteur", dit: "Marcel, parlons formation. Avant mars 2024, aviez-vous déjà suivi des formations en ligne ? Des webinaires ? Des modules e-learning ?" },
          { qui: "", dit: "Marcel secoue la tête." },
          { qui: "Marcel", dit: "Une fois. En 2019. Un truc obligatoire sur la cybersécurité. J'ai cliqué au hasard sur « Suivant » pendant 20 minutes pour valider les écrans. Je pensais que c'était juste une formalité administrative. Je n'ai rien retenu." },
        ],
      },
      question: "Votre public a-t-il déjà été exposé au sujet de votre formation ? Dans quel contexte ?",
      consigne: "Identifiez si VOS apprenants ont déjà rencontré le sujet (même superficiellement) : formations passées, expériences pro, autoformation... Notez le contexte (section 📚 Niveau de connaissance).",
      revelation: {
        titre: "ANALYSE : EXPOSITION NULLE AU DIGITAL LEARNING",
        texte: "Marcel n'a jamais considéré le e-learning comme de la « vraie formation » : pour lui, c'est une obligation administrative, un webinaire sans interaction, un PowerPoint lu devant une caméra. Jamais de formation en ligne bien scénarisée, de MOOC ni de blended learning de qualité. Il arrive en mars 2024 à un niveau zéro, sans savoir qu'un bon digital learning existe. On lui demande de devenir formateur digital sans avoir jamais été apprenant digital.",
        indice: "Comment former en ligne quand on n'a jamais vécu une bonne expérience d'apprentissage en ligne ?",
      },
    },
    // ---------- 6 ----------
    {
      rubrique: R_CONN,
      scene: {
        lieu: "Interrogatoire — Salle 3",
        audio: "audio/MARCEL6.mp3",
        dialogue: [
          { qui: "", dit: "Marcel se redresse, l'air gêné. Il évite le regard de l'inspecteur." },
          { qui: "Marcel", dit: "Bon, OK, je l'avoue. J'avais des... idées fausses. Je croyais vraiment que former en ligne, c'était juste allumer sa caméra et lire un PowerPoint. Je pensais que c'était forcément moins bien que le présentiel." },
          { qui: "", dit: "Il marque une pause." },
          { qui: "Marcel", dit: "Et je croyais aussi que les « jeunes » savaient naturellement tout faire sur l'ordi. Que moi, j'étais le seul à galérer." },
        ],
      },
      question: "Quelles idées reçues ou fausses croyances votre public pourrait-il avoir sur le sujet de votre formation ?",
      consigne: "Listez les préjugés, mythes ou incompréhensions que VOS apprenants ont AVANT votre formation. Ces croyances doivent être déconstruites dès le début (section 📚 Niveau de connaissance).",
      revelation: {
        titre: "ANALYSE : FAUSSES CROYANCES BLOQUANTES",
        texte: "Marcel croyait que former en ligne se résumait à lire un PowerPoint devant une webcam, ignorant les activités interactives, les sous-groupes et les outils collaboratifs. Il pensait aussi que les jeunes maîtrisaient tout naturellement, alors que beaucoup galèrent autrement. Convaincu de défendre la « vraie pédagogie », il combattait en réalité des représentations erronées, fondées sur aucune expérience concrète.",
        indice: "Ses résistances sont fondées sur des représentations erronées, pas sur des expériences réelles.",
      },
    },
    // ---------- 7 ----------
    {
      rubrique: R_CONN,
      scene: {
        lieu: "Interrogatoire — Salle 3",
        audio: "audio/MARCEL7.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur montre une capture d'écran : Marcel lors d'une visioconférence, le regard perdu, la bouche ouverte." },
          { qui: "Inspecteur", dit: "8 mars 2024. Formation « Animer en distanciel - Niveau 1 ». On vous voit lever physiquement la main devant votre écran... sans cliquer sur le bouton « Lever la main ». Vous avez aussi parlé pendant 10 minutes en pensant que votre micro était activé. Il était coupé." },
          { qui: "", dit: "Marcel rougit." },
          { qui: "Marcel", dit: "J'avais honte. Une honte terrible. Tout le monde semblait savoir comment faire... sauf moi." },
        ],
      },
      question: "Votre public possède-t-il les prérequis techniques nécessaires pour aborder votre formation ?",
      consigne: "Évaluez honnêtement : VOS apprenants maîtrisent-ils les bases (utiliser une plateforme, se connecter, naviguer, télécharger) ? Si non, il faut prévoir une acculturation (section 📚 Niveau de connaissance).",
      revelation: {
        titre: "ANALYSE : ABSENCE TOTALE DE PRÉREQUIS TECHNIQUES",
        texte: "Le 8 mars, Marcel ne savait pas gérer son micro (10 minutes en mute, puis coupé en pleine question), a partagé son écran entier avec ses fichiers personnels visibles, tapait le chat dans la barre Google, levait la main devant la webcam et s'est retrouvé seul quand les autres partaient en « breakout rooms ». Il a passé 80% du temps à demander de l'aide technique : venu apprendre à former en ligne, il ne maîtrisait même pas les bases pour la suivre.",
        indice: "On lui a demandé de courir un marathon alors qu'il ne savait pas marcher.",
      },
    },
    // ---------- 8 ----------
    {
      rubrique: R_CONN,
      scene: {
        lieu: "Interrogatoire — Salle 3",
        audio: "audio/MARCEL8.mp3",
        dialogue: [
          { qui: "", dit: "Marcel baisse la voix, presque en murmurant." },
          { qui: "Marcel", dit: "Le soir du 8 mars, je suis rentré chez moi. J'ai dit à ma femme que j'étais fatigué et je me suis enfermé dans le salon. J'ai allumé mon ordinateur. J'ai cherché sur YouTube : « Comment utiliser Teams pour les nuls »." },
          { qui: "", dit: "Il marque une pause." },
          { qui: "Marcel", dit: "J'ai regardé trois tutoriels. J'ai rien compris. Les vidéos allaient trop vite. Ils utilisaient des mots que je connaissais pas : « onglet », « épingler un message », « thread ». J'ai abandonné à 23h30. J'avais mal à la tête. Et surtout... j'avais honte de pas y arriver tout seul." },
        ],
      },
      question: "Votre public a-t-il l'habitude d'apprendre de manière autonome ou a-t-il besoin d'être accompagné ?",
      consigne: "Déterminez si VOS apprenants sont autonomes dans leur apprentissage ou s'ils ont besoin de guidage, de tutorat, de présence humaine (section 📚 Niveau de connaissance).",
      revelation: {
        titre: "ANALYSE : APPRENANT NON-AUTONOME EN DIGITAL",
        texte: "Marcel a toujours appris « sur le tas », un pair à ses côtés : un ancien pour les gestes métier, un collègue pour Excel, la secrétaire pour Outlook. Il a besoin de quelqu'un qu'il peut interrompre pour dire « tu peux refaire plus lentement ? ». L'autoformation en ligne fut un enfer : vidéos trop rapides, vocabulaire incompréhensible, aucun feedback, et la honte de poser des « questions bêtes ». Il a essayé trois soirs, échoué, puis fait semblant de maîtriser.",
        indice: "Il a besoin d'accompagnement humain synchrone, pas de ressources asynchrones.",
      },
    },
    // ---------- 9 ----------
    {
      rubrique: R_CONN,
      scene: {
        lieu: "Interrogatoire — Salle 3",
        audio: "audio/MARCEL9.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur se penche en avant, le ton plus doux." },
          { qui: "Inspecteur", dit: "Marcel, soyons honnêtes. Sur une échelle de 0 à 10, où situez-vous votre niveau sur « animer une formation en ligne » AVANT l'incident du 12 mars ?" },
          { qui: "", dit: "Marcel ferme les yeux, soupire longuement." },
          { qui: "Marcel", dit: "...1. Peut-être même 0. J'en savais rien. Rien du tout. Mais on me demandait de devenir expert en une semaine." },
        ],
      },
      question: "Quel est le niveau de connaissance actuel de votre public sur le sujet de votre formation (débutant, intermédiaire, avancé) ?",
      consigne: "Évaluez HONNÊTEMENT le niveau réel de VOS apprenants. Pas ce qu'ils prétendent, pas ce que vous aimeriez, mais leur niveau RÉEL de départ (section 📚 Niveau de connaissance).",
      revelation: {
        titre: "ANALYSE : NIVEAU GRAND DÉBUTANT ABSOLU",
        texte: "En mars 2024, le niveau réel de Marcel sur « animer une formation digitale » était de 0 sur 10 : jamais animé en ligne, aucune maîtrise de Teams ou Zoom, aucun code de l'animation digitale, aucune scénarisation. On lui a pourtant demandé de devenir autonome après 3 jours de formation et d'animer 4 jours plus tard. C'est comme confier un camion sur l'autoroute à quelqu'un qui n'a jamais conduit, après 3h de théorie.",
        indice: "L'écart entre les attentes institutionnelles et la réalité des compétences était insurmontable.",
      },
    },
    // ---------- 10 ----------
    {
      rubrique: R_MOTIV,
      scene: {
        lieu: "Interrogatoire — Salle 3",
        audio: "audio/MARCEL10.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur change de ton, plus empathique." },
          { qui: "Inspecteur", dit: "Marcel, pourquoi avoir accepté cette formation « Transition Digitale » ? Vous auriez pu dire non. Faire valoir votre ancienneté. Négocier." },
          { qui: "", dit: "Marcel rit jaune." },
          { qui: "Marcel", dit: "Dire non ? Vous rigolez ? C'était OBLIGATOIRE. Email de la DRH, objet : « Formation obligatoire - Présence requise ». En gras. En rouge. Avec écrit à la fin : « L'absence sera considérée comme un manquement aux obligations professionnelles ». Traduction : refuse, et tu risques une sanction." },
        ],
      },
      question: "La formation que vous proposez est-elle imposée ou volontaire pour votre public ? Quel impact sur leur motivation ?",
      consigne: "Identifiez le degré de contrainte pesant sur VOS apprenants. Formation imposée ≠ formation choisie. L'impact motivationnel est radical (section 🎯 Attentes et motivations).",
      revelation: {
        titre: "ANALYSE : FORMATION 100% IMPOSÉE, ZÉRO ADHÉSION",
        texte: "La formation était obligatoire sous peine de sanction, sans aucune consultation : décision venue d'en haut, « c'est maintenant ou jamais », sans alternative. La motivation de Marcel était de 0 sur 10. Imposée par un « plan stratégique du COMEX », elle ne nourrissait que ressentiment, sentiment d'injustice et peur d'échouer en public. Imposée sans travail de sens, une formation génère une motivation négative : l'apprenant arrive déjà en résistance.",
        indice: "La contrainte sans adhésion tue la motivation avant même que la formation ne commence.",
      },
    },
    // ---------- 11 ----------
    {
      rubrique: R_MOTIV,
      scene: {
        lieu: "Interrogatoire — Salle 3",
        audio: "audio/MARCEL11.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur insiste." },
          { qui: "Inspecteur", dit: "D'accord, c'était obligatoire. Mais Marcel, au fond de vous, qu'espériez-vous tirer de cette formation ? Un bénéfice ? Une compétence ?" },
          { qui: "", dit: "Marcel soupire longuement, regarde par la fenêtre." },
          { qui: "Marcel", dit: "Vous voulez la vérité ? Rien. Absolument rien. Je voulais juste que ça se termine vite. Que je coche la case. Et qu'on me laisse former comme avant. C'était mon seul objectif : survivre et retourner à ma vie d'avant." },
        ],
      },
      question: "Quels objectifs concrets votre public vise-t-il à atteindre grâce à votre formation ?",
      consigne: "Distinguez les objectifs OFFICIELS (ce que l'institution attend) des objectifs RÉELS (ce que VOS apprenants veulent vraiment). L'écart entre les deux est une bombe à retardement (section 🎯 Attentes et motivations).",
      revelation: {
        titre: "ANALYSE : DÉCALAGE OBJECTIFS INSTITUTIONNELS VS RÉELS",
        texte: "Côté direction, les objectifs étaient ambitieux : maîtriser Teams, Miro et Klaxoon, digitaliser 50% des formations en 6 mois, devenir acteur de la transformation. Côté Marcel, ils se résumaient à survivre aux 3 jours sans perdre la face, cocher la case RH, éviter la sanction et retourner au terrain. Aucun projet personnel, juste une stratégie d'évitement. Quand institution et apprenant ne visent pas la même chose, l'apprentissage est impossible.",
        indice: "Sans objectif personnel positif, il n'y a pas d'engagement possible.",
      },
    },
    // ---------- 12 ----------
    {
      rubrique: R_MOTIV,
      scene: {
        lieu: "Interrogatoire — Salle 3",
        audio: "audio/MARCEL12.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur ne lâche pas." },
          { qui: "Inspecteur", dit: "Mais Marcel, il devait bien y avoir QUELQUE CHOSE. Un tout petit bénéfice, même caché. Personne ne fait quelque chose sans aucune motivation." },
          { qui: "", dit: "Marcel réfléchit longuement. Puis, presque malgré lui :" },
          { qui: "Marcel", dit: "Peut-être... Peut-être ne pas passer pour un dinosaure. Les jeunes de l'atelier, ils me regardaient bizarrement quand je galérais avec l'ordinateur. Je sentais leur jugement. Alors je me disais... si j'apprenais, peut-être qu'ils me respecteraient encore. Mais..." },
          { qui: "", dit: "Il s'arrête." },
          { qui: "Marcel", dit: "...mais j'ai préféré être vu comme un rebelle plutôt que comme un incapable." },
        ],
      },
      question: "Quels bénéfices professionnels ou personnels votre public espère-t-il retirer de la formation ?",
      consigne: "Même dans une formation imposée, identifiez les bénéfices CACHÉS que VOS apprenants pourraient trouver (reconnaissance, image, compétences transférables...). Ces leviers existent, il faut les révéler (section 🎯 Attentes et motivations).",
      revelation: {
        titre: "ANALYSE : BÉNÉFICE ENFOUI = PRÉSERVER SON IMAGE",
        texte: "Le vrai bénéfice recherché par Marcel, sans se l'avouer, était de préserver sa légitimité face aux jeunes générations. Il sentait sa crédibilité s'effriter à chaque difficulté technique et craignait de perdre le respect bâti en 27 ans. Plutôt que d'avouer « je veux maîtriser le digital pour rester légitime », il a préféré jouer le « rebelle » : un choix plutôt qu'une faiblesse. Paradoxe cruel : en sabotant pour protéger son image, il l'a détruite plus sûrement qu'un échec avoué.",
        indice: "Les bénéfices réels sont souvent cachés derrière des mécanismes de défense. Il faut les valoriser explicitement.",
      },
    },
    // ---------- 13 ----------
    {
      rubrique: R_MOTIV,
      scene: {
        lieu: "Interrogatoire — Salle 3",
        audio: "audio/MARCEL13.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur pousse vers Marcel le programme de la formation : 3 pages A4, densément remplies." },
          { qui: "", dit: "PROGRAMME — « DEVENIR FORMATEUR DIGITAL - NIVEAU 1 » · Durée : 3 jours intensifs (21 heures) · JOUR 1 : Maîtriser Teams, Miro, Klaxoon (7h) · JOUR 2 : Créer des modules interactifs et scénariser (7h) · JOUR 3 : Animer en classe virtuelle - Mise en pratique (7h)" },
          { qui: "", dit: "Marcel regarde le programme et éclate d'un rire nerveux." },
          { qui: "Marcel", dit: "Vous vous foutez de moi ? TROIS JOURS ?! Pour passer de zéro à « formateur digital autonome » ? C'est impossible. Moi, il me faut trois MOIS, pas trois JOURS !" },
        ],
      },
      question: "Votre public souhaite-t-il un apprentissage rapide ou approfondi ? Quelle est sa tolérance à l'effort et à l'investissement temps ?",
      consigne: "Évaluez les contraintes temporelles ET les besoins de profondeur de VOS apprenants. Un rythme inadapté = échec garanti (section 🎯 Attentes et motivations).",
      revelation: {
        titre: "ANALYSE : RYTHME IMPOSÉ VS RYTHME NÉCESSAIRE",
        texte: "Marcel aurait eu besoin d'un apprentissage lent et progressif : des paliers clairs, du temps pour digérer, de la pratique sans enjeu avec droit à l'erreur, un accompagnement sur plusieurs semaines. On lui a imposé 3 jours intensifs à 7h, sans pause entre les concepts, une mise en pratique 4 jours après et aucun suivi. Il a vécu une noyade pédagogique : rien retenu, juste subi. Pour son profil, ce rythme était une violence pédagogique pure.",
        indice: "Un rythme inadapté au profil = destruction de la motivation + échec d'apprentissage.",
      },
    },
    // ---------- 14 ----------
    {
      rubrique: R_MOTIV,
      scene: {
        lieu: "Interrogatoire — Salle 3",
        audio: "audio/MARCEL14.mp3",
        dialogue: [
          { qui: "", dit: "Marcel se redresse, regarde l'inspecteur droit dans les yeux. Sa voix tremble légèrement." },
          { qui: "Marcel", dit: "Vous voulez savoir ce que j'attendais VRAIMENT du formateur ? Une seule chose. Qu'il me dise : « C'est normal de galérer. On va y aller doucement. Vous avez le droit de ne pas savoir. » Juste ça. Juste cette phrase." },
          { qui: "", dit: "Il baisse la voix." },
          { qui: "Marcel", dit: "Mais non. Lui, il partait du principe qu'on savait tous utiliser un ordinateur. Qu'on était tous « à l'aise avec le digital ». Il n'a jamais dit : « Si quelqu'un ne sait pas comment partager son écran, pas de problème, on va le montrer. » Jamais. Alors j'ai fait semblant. Comme les autres, j'imagine." },
        ],
      },
      question: "Qu'attend concrètement votre public du formateur ou de l'accompagnement pédagogique ?",
      consigne: "Identifiez les attentes explicites ET implicites de VOS apprenants vis-à-vis de vous : posture, disponibilité, ton, rythme, niveau de guidance... (section 🎯 Attentes et motivations).",
      revelation: {
        titre: "ANALYSE : ATTENTES NON SATISFAITES = CLIMAT TOXIQUE",
        texte: "Marcel attendait du formateur une bienveillance explicite (« c'est normal de ne pas savoir »), le droit à la question « bête », une démonstration lente montrant chaque clic, une vérification de la compréhension et surtout aucun jugement. Il a reçu l'inverse : un formateur qui présupposait les bases (« tout le monde sait partager son écran, on avance »), un rythme soutenu et des participants qui semblaient à l'aise (alors qu'ils faisaient semblant). Jamais en sécurité, il a passé 3 jours en mode survie, pas en mode apprentissage.",
        indice: "Un climat pédagogique non sécurisant transforme l'apprentissage en épreuve traumatisante.",
      },
    },
    // ---------- 15 ----------
    {
      rubrique: R_FREINS,
      scene: {
        lieu: "Interrogatoire — Salle 3",
        audio: "audio/MARCEL15.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur pose deux dossiers sur la table : « Cybersécurité - 2019 » et « Animer en distanciel - 8 mars 2024 »." },
          { qui: "Inspecteur", dit: "Deux formations. Deux mauvais souvenirs. Ça laisse des traces, non ?" },
          { qui: "", dit: "Marcel fixe les dossiers, le regard sombre." },
          { qui: "Marcel", dit: "À chaque fois, c'est la même histoire. On me jette dans le grand bain, je coule, et personne ne s'en aperçoit. Ou pire : tout le monde le voit." },
          { qui: "", dit: "Il croise les bras." },
          { qui: "Marcel", dit: "Alors maintenant, dès qu'on prononce le mot « formation », je me braque. Je sais déjà comment ça va finir : par de l'humiliation. Je me protège, c'est tout." },
        ],
      },
      question: "Votre public a-t-il vécu des expériences de formation négatives qui nourrissent une méfiance ou une résistance préalable ?",
      consigne: "Les mauvaises expériences passées créent des réflexes défensifs. Reconstituez l'historique de formation de VOS apprenants : échecs, humiliations, formations subies sans accompagnement... Ces souvenirs conditionnent leur posture AVANT même que vous ne commenciez (section ⚠️ Freins et pain points).",
      revelation: {
        titre: "ANALYSE : MÉFIANCE FORGÉE PAR LES ÉCHECS ANTÉRIEURS",
        texte: "Marcel n'arrive pas vierge en mars 2024 : il traîne un passif de formations vécues comme des échecs. En 2019, le module cybersécurité l'a laissé cliquer « Suivant » sans rien retenir ; le 8 mars 2024, « Animer en distanciel » a viré à l'humiliation publique. Chaque épisode a déposé une couche de méfiance. Désormais, le mot « formation » déclenche un réflexe défensif. Cette résistance n'est pas un trait de caractère, c'est une cicatrice qu'un formateur prend à tort pour de la mauvaise volonté.",
        indice: "La résistance d'aujourd'hui est souvent la cicatrice d'une humiliation d'hier.",
      },
    },
    // ---------- 16 ----------
    {
      rubrique: R_FREINS,
      scene: {
        lieu: "Interrogatoire — Salle 3",
        audio: "audio/MARCEL16.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur referme lentement le dossier. Silence. Puis :" },
          { qui: "Inspecteur", dit: "Dernière question, Marcel. LE JOUR J. Le 12 mars 2024, 9h05. Vous êtes dans la salle serveur. Vous avez la main sur la prise. Vous allez débrancher. Pourquoi CE JOUR-LÀ ? Pourquoi MAINTENANT ? Qu'est-ce qui s'est passé dans votre tête ?" },
          { qui: "", dit: "Marcel ferme les yeux. Sa voix se brise." },
          { qui: "Marcel", dit: "Parce que... parce que j'avais trop honte. Une honte insurmontable." },
        ],
      },
      question: "Votre public a-t-il des appréhensions liées à ses capacités d'apprentissage (syndrome de l'imposteur, peur de l'échec, peur du jugement) ?",
      consigne: "Les freins psychologiques sont souvent les plus puissants ET les plus invisibles. Identifiez les peurs cachées de VOS apprenants pour créer un environnement qui les lève (section ⚠️ Freins et pain points).",
      revelation: {
        titre: "MOBILE DU CRIME : SYNDROME DE L'IMPOSTEUR + PEUR DU JUGEMENT",
        texte: "Marcel s'effondre, les mots sortent comme une libération. Le 12 mars à 9h15, il devait animer sa première formation en ligne devant 25 participants : collègues, jeunes de l'atelier, son responsable, des gens connus depuis 20 ans. La veille, il n'a pas dormi. Le matin, il a ouvert Teams, vu les 25 participants en attente, regardé tous ces boutons, et paniqué : « Dans 10 minutes, ils vont voir que je suis un imposteur, que 27 ans ne servent à rien si tu sais pas cliquer sur un bouton. » Alors il a couru débrancher le serveur, pour ne pas avoir à avouer qu'il avait besoin d'aide. Marcel pleure. Il n'était pas un rebelle : juste terrifié d'échouer, d'être jugé, de perdre le respect bâti en 27 ans. L'inspecteur referme le dossier : « Vous n'êtes pas un criminel, vous êtes un apprenant en souffrance. La vraie question n'est pas “Pourquoi avez-vous saboté ?”, mais “Pourquoi le système n'a-t-il pas vu votre détresse ?” »",
        indice: "Derrière chaque « sabotage » se cache souvent une peur que personne n'a su voir.",
        finale: true,
      },
    },
  ],
};

// ============================================================
//  AFFAIRES 2 À 6 — à compléter (placeholders)
// ============================================================
const PLACEHOLDER = (id, numero, nom, role, accroche, portrait) => ({
  id, numero, nom, role, accroche, portrait,
  enPreparation: true,
  questions: [],
});

const HISTOIRES = [
  MARCEL,
  PLACEHOLDER("amina", "Affaire n°02", "Amina Diallo", "Dossier à instruire",
    "Identité enregistrée. L'enquête reste à mener.", "portraits/Amina_Diallo.png"),
  PLACEHOLDER("karim", "Affaire n°03", "Karim Benali", "Dossier à instruire",
    "Identité enregistrée. L'enquête reste à mener.", "portraits/Karim_Benali.png"),
  PLACEHOLDER("lea", "Affaire n°04", "Léa Martinez", "Dossier à instruire",
    "Identité enregistrée. L'enquête reste à mener.", "portraits/Lea_Martinez.png"),
  PLACEHOLDER("sophie", "Affaire n°05", "Sophie Nguyen", "Dossier à instruire",
    "Identité enregistrée. L'enquête reste à mener.", "portraits/Sophie_Nguyen.png"),
  PLACEHOLDER("thomas", "Affaire n°06", "Thomas Lefèvre", "Dossier à instruire",
    "Identité enregistrée. L'enquête reste à mener.", "portraits/Thomas_Lefevre.png"),
];
