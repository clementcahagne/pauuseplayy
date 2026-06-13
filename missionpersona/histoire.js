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
  resolution: {
    mobile: {
      resume: "Syndrome de l'imposteur + peur du jugement + transformation digitale imposée sans accompagnement.",
      texte: "Marcel n'a pas débranché le serveur par malveillance, mais par terreur : convaincu qu'il allait être démasqué comme « imposteur » devant 25 collègues qui le connaissaient depuis 20 ans, il a préféré tout arrêter plutôt qu'avouer qu'il avait besoin d'aide.",
    },
    circonstances: [
      { titre: "Une bascule brutale, sans transition", texte: "Le « tout distanciel obligatoire » a été imposé du jour au lendemain, sans période d'adaptation." },
      { titre: "Aucun prérequis technique", texte: "On lui a demandé d'animer en ligne alors qu'il ne savait ni gérer son micro ni partager son écran." },
      { titre: "Un métier ancré dans le geste et le terrain", texte: "Former sur des machines en atelier est, pour lui, incompatible avec une webcam." },
      { titre: "Un rythme de formation intenable", texte: "3 jours intensifs pour passer de zéro à « formateur digital autonome », puis animer 4 jours plus tard." },
      { titre: "Une formation imposée, sans adhésion", texte: "Obligation RH sous peine de sanction, aucun travail de sens, motivation nulle." },
      { titre: "Un besoin d'accompagnement humain ignoré", texte: "Marcel apprend « sur le tas » avec un pair ; on l'a laissé seul face à des tutoriels." },
      { titre: "Un climat pédagogique non sécurisant", texte: "Le formateur présupposait les bases ; jamais un « c'est normal de ne pas savoir »." },
      { titre: "Des humiliations passées jamais réparées", texte: "Cybersécurité 2019, distanciel du 8 mars : chaque formation avait laissé une cicatrice." },
    ],
    verdict: [
      "Marcel n'est pas un « saboteur » ni un « réfractaire au changement ».",
      "Marcel est un apprenant en souffrance, lâché par un système qui n'a pas su voir sa détresse.",
      "Le sabotage n'est pas la cause, c'est le symptôme.",
      "La cause : une transformation digitale imposée sans accompagnement, sans sécurité psychologique et sans temps.",
    ],
    mission: {
      intro: "Vous avez reconstitué le portrait complet de Marcel en 16 questions.",
      sousTitre: "Maintenant, faites le parallèle avec VOS apprenants :",
      etapes: [
        "Relisez votre fiche d'enquête complétée.",
        "Identifiez les points communs entre Marcel et votre public.",
        "Rédigez un portrait narratif de VOS apprenants (5-8 lignes).",
      ],
    },
    questionEquipe: "Qu'allez-vous faire DIFFÉREMMENT dans votre formation et votre accompagnement pour qu'aucun de VOS apprenants ne devienne un « Marcel » ?",
    questionEquipeNote: "Notez 2-3 décisions pédagogiques ET organisationnelles concrètes au dos de votre fiche.",
  },
  questions: [
    // ---------- 1 ----------
    {
      rubrique: R_PERSO,
      scene: {
        lieu: "Interrogatoire — Salle 3",
        duree: "2 min 50",
        audio: "audio/marcel/MARCEL1.mp3",
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
        audio: "audio/marcel/MARCEL2.mp3",
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
        audio: "audio/marcel/MARCEL3.mp3",
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
        audio: "audio/marcel/MARCEL4.mp3",
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
        audio: "audio/marcel/MARCEL5.MP3",
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
        audio: "audio/marcel/MARCEL6.mp3",
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
        audio: "audio/marcel/MARCEL7.mp3",
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
        audio: "audio/marcel/MARCEL8.mp3",
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
        audio: "audio/marcel/MARCEL9.mp3",
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
        audio: "audio/marcel/MARCEL10.mp3",
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
        audio: "audio/marcel/MARCEL11.mp3",
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
        audio: "audio/marcel/MARCEL12.mp3",
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
        audio: "audio/marcel/MARCEL13.mp3",
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
        audio: "audio/marcel/MARCEL14.mp3",
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
        audio: "audio/marcel/MARCEL15.mp3",
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
        audio: "audio/marcel/MARCEL16.mp3",
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
//  AFFAIRE N°02 — LÉA MARTINEZ
// ============================================================
const LEA = {
  id: "lea",
  numero: "Affaire n°02",
  nom: "Léa Martinez",
  role: "Chef de Projet Digital",
  fiche: "29 ans · FastGrow (scale-up tech, 85 employés) · 18 mois d'ancienneté",
  accroche: "Certifiée à 94 %… en gérant 5 écrans à la fois. A-t-elle vraiment appris quelque chose ?",
  portrait: "portraits/Lea_Martinez.png",
  briefing: {
    securite: "Dossier classé — Niveau de sécurité : Confidentiel",
    identite: [
      ["Nom", "MARTINEZ, Léa"],
      ["Âge", "29 ans"],
      ["Profession", "Chef de Projet Digital"],
      ["Entreprise", "FastGrow (scale-up tech, 85 employés)"],
      ["Ancienneté", "18 mois"],
    ],
    incident: [
      "23 avril 2024, 14h37. Léa Martinez obtient sa certification « Management Agile - Niveau Expert » avec un score de 94 %. Temps de formation déclaré : 35 heures sur 3 semaines. Taux de complétion : 100 %.",
      "Problème : les logs de connexion révèlent des anomalies troublantes. Pendant les sessions de formation en ligne, Léa était aussi connectée à 3 visioconférences simultanées (clients, équipe, COMEX), à Slack (147 messages envoyés), à 2 Google Docs partagés et à son CRM (17 fiches clients mises à jour).",
      "L'analyse des quiz révèle des réponses étrangement… parfaites. Trop parfaites. Suspectes. Interrogée, Léa assume : « Oui, j'ai fait plusieurs choses en même temps. Et alors ? J'ai validé la formation, non ? J'ai mon certificat. Mission accomplie. »",
    ],
    mission: "Reconstituer le profil de Léa pour comprendre comment une professionnelle brillante et ultra-performante en est venue à « hacker » son propre apprentissage… au point de ne plus rien apprendre du tout.",
  },
  resolution: {
    mobile: {
      resume: "Système organisationnel qui valorise la validation sur l'apprentissage + surcharge cognitive chronique + formation inadaptée au profil opérationnel.",
      texte: "Léa a « hacké » la formation non par malhonnêteté, mais parce que le système lui-même rendait l'apprentissage réel impossible et inutile.",
    },
    circonstances: [
      { titre: "Aucun temps réellement libéré", texte: "On lui a demandé de se former EN PLUS de son travail à 120 %." },
      { titre: "Formation obligatoire sur un sujet déjà maîtrisé", texte: "Elle connaissait 80 % du contenu avant de commencer." },
      { titre: "Objectif systémique = certificat, pas compétence", texte: "L'entreprise valorisait le PDF, pas l'apprentissage réel." },
      { titre: "Absence de vérification post-formation", texte: "Personne n'a vérifié ce qu'elle avait appris ou retenu." },
      { titre: "Format inadapté au profil : théorie vs praticité", texte: "Elle avait besoin d'outils actionnables, pas de théorie." },
      { titre: "Surcharge cognitive empêchant l'apprentissage profond", texte: "Son cerveau était biologiquement incapable d'apprendre en profondeur." },
      { titre: "Culture d'entreprise de l'urgence permanente", texte: "Le multi-tâches était la norme, pas l'exception." },
      { titre: "Injonction paradoxale managériale", texte: "« Forme-toi… mais ne ralentis rien. »" },
    ],
    verdict: [
      "Léa n'est pas une « tricheuse » ou une « apprenante désengagée ».",
      "Léa est le produit d'un système qui organise structurellement l'échec de l'apprentissage.",
      "Le hack n'est pas la cause, c'est le symptôme.",
      "La cause : un écosystème professionnel qui détruit systématiquement les conditions nécessaires à l'apprentissage réel.",
    ],
    mission: {
      intro: "Vous avez reconstitué le portrait complet de Léa en 16 questions.",
      sousTitre: "Maintenant, faites le parallèle avec VOS apprenants :",
      etapes: [
        "Relisez votre fiche d'enquête complétée.",
        "Identifiez les points communs entre Léa et votre public.",
        "Rédigez un portrait narratif de VOS apprenants (5-8 lignes).",
      ],
    },
    questionEquipe: "Qu'allez-vous faire DIFFÉREMMENT dans votre formation et dans votre SYSTÈME pour éviter que VOS apprenants ne deviennent des « Léa » ?",
    questionEquipeNote: "Notez 2-3 décisions pédagogiques ET organisationnelles concrètes au dos de votre fiche.",
  },
  questions: [
    // ---------- 1 ----------
    {
      rubrique: R_PERSO,
      scene: {
        lieu: "Interrogatoire — Salle 5",
        audio: "audio/lea/lea1.mp3",
        dialogue: [
          { qui: "", dit: "Léa entre dans la salle, iPhone à la main, AirPods autour du cou. Elle s'assoit avec assurance, croise les jambes. Tailleur moderne, vernis impeccable. Elle jette un œil à sa montre connectée." },
          { qui: "Léa", dit: "Bon, on a combien de temps ? J'ai un call à 15h. Enfin, deux calls en fait. Simultanés. Mais je gère." },
          { qui: "", dit: "Elle sourit, mi-provocation, mi-fatigue." },
        ],
      },
      question: "Quelle est la tranche d'âge majoritaire de votre public cible ?",
      consigne: "Notez la tranche d'âge de VOS apprenants sur votre fiche d'enquête (section 🧑 Profil personnel). Cela influence leur rapport au temps, à la productivité, au multi-tâches.",
      revelation: {
        titre: "PROFIL : GÉNÉRATION HYPER-CONNECTÉE",
        texte: "Léa, 29 ans, est une « digital native hyperactive » : pour elle, le multi-tâches est un signe de performance et l'attente une perte de temps intolérable. Elle jongle en permanence entre onglets, écrans et conversations Slack. Se concentrer deux heures sur une seule chose lui semble impossible, voire du gaspillage.",
        indice: "L'âge définit un rapport au temps et à l'attention.",
      },
    },
    // ---------- 2 ----------
    {
      rubrique: R_PERSO,
      scene: {
        lieu: "Interrogatoire — Salle 5",
        audio: "audio/lea/lea2.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur observe Léa qui consulte discrètement son téléphone sous la table." },
          { qui: "Inspecteur", dit: "Léa, posez ce téléphone. Vous êtes ici pour répondre à des questions." },
          { qui: "", dit: "Léa lève les yeux, surprise." },
          { qui: "Léa", dit: "Mais je vous écoute ! Je peux faire les deux. Je fais toujours les deux. Enfin… les cinq, en fait. Je gère 12 projets en parallèle. Le multi-tâches, c'est ma vie." },
        ],
      },
      question: "Quelles sont les habitudes de consommation de contenu de votre public (lecture linéaire, vidéo accélérée, audio en marchant, survol rapide) ?",
      consigne: "Identifiez COMMENT vos apprenants consomment l'information au quotidien. Cela révèle leur capacité d'attention et leur mode d'apprentissage naturel (section 🧑 Profil personnel).",
      revelation: {
        titre: "PROFIL : CONSOMMATION FRAGMENTÉE ET ACCÉLÉRÉE",
        texte: "Léa regarde ses vidéos en vitesse ×1.5 ou ×2, écoute des podcasts uniquement en bougeant, lit les articles en diagonale et préfère les résumés Blinkist aux livres entiers. Elle survole tout pour extraire l'essentiel en un minimum de temps. Elle a désappris la lecture lente et l'attention soutenue : son cerveau est câblé pour le zapping permanent.",
        indice: "Une génération habituée à la fragmentation de l'attention.",
      },
    },
    // ---------- 3 ----------
    {
      rubrique: R_PERSO,
      scene: {
        lieu: "Interrogatoire — Salle 5",
        audio: "audio/lea/lea3.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur se penche en avant." },
          { qui: "Inspecteur", dit: "Léa, quand avez-vous pris des vacances pour la dernière fois ? De vraies vacances. Sans ordinateur. Sans téléphone pro." },
          { qui: "", dit: "Léa réfléchit. Longtemps. Trop longtemps." },
          { qui: "Léa", dit: "Euh… je crois que c'était… attends, non, même là-bas j'avais pris mon laptop. Donc… jamais ? Enfin, je sais pas. J'aime pas m'arrêter. J'ai l'impression de perdre le contrôle." },
        ],
      },
      question: "Votre public est-il plutôt autonome ou a-t-il besoin d'être guidé ? Quel est son rapport à la discipline personnelle ?",
      consigne: "Évaluez si VOS apprenants sont capables de s'auto-discipliner ou s'ils ont besoin de cadre externe, de contraintes, de deadlines imposées (section 🧑 Profil personnel).",
      revelation: {
        titre: "PROFIL : HYPER-AUTONOME MAIS SANS RÉGULATION INTERNE",
        texte: "Léa est très autonome professionnellement, mais incapable de s'arrêter : aucune pause spontanée, aucune limite entre vie pro et perso, une culpabilité massive dès qu'elle ne « fait rien ». Son autonomie est devenue une prison, et le « temps mort » la terrifie. Suivre une formation exigeant deux heures d'attention pleine lui est physiquement impossible.",
        indice: "L'autonomie sans régulation mène au burn-out et à l'incapacité d'apprendre en profondeur.",
      },
    },
    // ---------- 4 ----------
    {
      rubrique: R_PRO,
      scene: {
        lieu: "Interrogatoire — Salle 5",
        audio: "audio/lea/lea4.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur sort le CV de Léa." },
          { qui: "Inspecteur", dit: "Chef de Projet Digital chez FastGrow. Qu'est-ce que ça veut dire concrètement ? Qu'est-ce que vous FAITES, au quotidien ?" },
          { qui: "", dit: "Léa sourit, fière." },
          { qui: "Léa", dit: "Je gère 12 projets en parallèle. Lancement d'app, refonte de site, campagnes marketing, migrations techniques. Je coordonne les devs, les designers, les commerciaux. Je fais les points clients. J'anime les rétros. Je… je fais tout, en fait." },
        ],
      },
      question: "Quelle est la fonction ou le métier exact de votre public ?",
      consigne: "Soyez ultra-précis sur le métier de VOS apprenants : missions, livrables, interactions. Ne notez pas « manager » mais « manager de quoi, avec qui, dans quel contexte » (section 💼 Profil professionnel).",
      revelation: {
        titre: "PROFIL : CHEF D'ORCHESTRE SURCHARGÉ",
        texte: "Chef de projet digital dans une scale-up en hyper-croissance, Léa gère 12 projets simultanés et coordonne des équipes transverses (développeurs, designers, commerciaux) tout en suivant 8 clients. Elle enchaîne 6 à 8 réunions par jour, parfois en parallèle, et éteint les crises en continu. Un métier de flux, fait de micro-tâches urgentes, qui l'a câblée en mode « réactif-rapide », jamais « réflexif-lent ».",
        indice: "Son métier façonne un mode cognitif incompatible avec l'apprentissage profond.",
      },
    },
    // ---------- 5 ----------
    {
      rubrique: R_PRO,
      scene: {
        lieu: "Interrogatoire — Salle 5",
        audio: "audio/lea/lea5.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur montre une capture d'écran de l'agenda de Léa : des blocs de 30 min, 15 min, même 10 min. Aucun espace vide." },
          { qui: "Inspecteur", dit: "Votre agenda, le 23 avril. Jour où vous étiez censée suivre la formation « Management Agile ». Je vois 11 réunions. 11. Comment avez-vous fait ?" },
          { qui: "", dit: "Léa hausse les épaules." },
          { qui: "Léa", dit: "J'ai ouvert 4 fenêtres sur mon écran. Formation en haut à gauche, réunion client en haut à droite, Slack en bas à gauche, Google Doc en bas à droite. Classique." },
        ],
      },
      question: "Quel est le rythme de l'activité professionnelle de votre public (stable, imprévisible, saisonnier, en pic permanent) ?",
      consigne: "Décrivez le rythme réel du travail de VOS apprenants. Un rythme haché et urgent rend l'apprentissage posé quasi impossible (section 💼 Profil professionnel).",
      revelation: {
        titre: "PROFIL : RYTHME CHAOTIQUE ET URGENCE PERMANENTE",
        texte: "Aucune journée type, des interruptions constantes (Slack, emails, appels) et des urgences en cascade : un bug bloque un projet, déclenche une réunion de crise, génère un nouveau planning. Sa plus longue plage de concentration dépasse rarement 45 minutes. Bloquer deux heures pour se former, sans être interrompue ni culpabiliser pendant que des projets brûlent, est tout simplement impossible.",
        indice: "Le rythme professionnel empêche physiquement l'engagement dans une formation linéaire.",
      },
    },
    // ---------- 6 ----------
    {
      rubrique: R_PRO,
      scene: {
        lieu: "Interrogatoire — Salle 5",
        audio: "audio/lea/lea6.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur affiche une liste." },
          { qui: "Inspecteur", dit: "Vos outils de travail quotidiens. J'en compte… 23. Vingt-trois applications différentes que vous utilisez CHAQUE JOUR. Comment vous gérez ça ?" },
          { qui: "", dit: "Léa rit." },
          { qui: "Léa", dit: "Ah ça ? C'est rien. J'ai 47 onglets ouverts en ce moment sur Chrome. Et 3 navigateurs différents. Normal." },
        ],
      },
      question: "Quels outils et logiciels votre public utilise-t-il au quotidien dans son travail ?",
      consigne: "Listez TOUS les outils que VOS apprenants manipulent quotidiennement. Plus la liste est longue, plus leur attention est fragmentée (section 💼 Profil professionnel).",
      revelation: {
        titre: "PROFIL : HYPERCONNEXION NUMÉRIQUE TOTALE",
        texte: "Léa utilise chaque jour des dizaines d'outils : Slack (8 espaces), 3 boîtes Gmail, Teams, Discord, Notion, Trello, Asana, la suite Google, Miro, Figma, HubSpot, Mixpanel, Zoom… Résultat implacable : environ 73 notifications par heure, 15 secondes d'attention avant interruption, un cerveau en surveillance permanente. Ultra-compétente techniquement, mais une attention pulvérisée en mille fragments.",
        indice: "Maîtrise technique ≠ capacité d'attention. L'hyperconnexion détruit la concentration profonde.",
      },
    },
    // ---------- 7 ----------
    {
      rubrique: R_PRO,
      scene: {
        lieu: "Interrogatoire — Salle 5",
        audio: "audio/lea/lea7.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur montre un graphique : la charge de travail de Léa sur 6 mois. La courbe ne descend jamais en dessous de 120 %." },
          { qui: "Inspecteur", dit: "120 % de charge. Depuis 18 mois. Sans interruption. Comment c'est possible ?" },
          { qui: "", dit: "Léa soupire." },
          { qui: "Léa", dit: "Parce que je dis jamais non. On me demande un projet, je dis oui. On me demande d'aider sur un truc, je dis oui. On me propose une formation obligatoire, je dis oui. Et je m'arrange." },
        ],
      },
      question: "Quelles sont les contraintes de temps de votre public (disponibilité réelle, planning surchargé, temps protégé ou non) ?",
      consigne: "Soyez honnêtes : VOS apprenants ont-ils VRAIMENT du temps dédié pour se former ? Ou doivent-ils « caser » la formation entre deux urgences ? (section 💼 Profil professionnel).",
      revelation: {
        titre: "PROFIL : ZÉRO TEMPS DISPONIBLE RÉEL",
        texte: "Aucun temps protégé, aucune décharge de projets, aucun relais pendant les trois semaines de formation : Léa devait se former « en plus » d'une charge à 120 %. Le message implicite de l'entreprise : « Forme-toi, mais continue à tout livrer. Débrouille-toi. » Le multi-tâches n'était pas un vice, mais sa seule stratégie de survie.",
        indice: "Sans temps réellement libéré, toute formation est condamnée à être survolée.",
      },
    },
    // ---------- 8 ----------
    {
      rubrique: R_PRO,
      scene: {
        lieu: "Interrogatoire — Salle 5",
        audio: "audio/lea/lea8.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur montre un email du manager de Léa, envoyé le 22 avril à 18h37 : « Léa, j'ai vu que tu es en formation cette semaine. Cool ! Mais n'oublie pas le rendu client jeudi. Et le point avec les devs demain matin. Merci ! »" },
          { qui: "", dit: "Léa lit l'email et lève les yeux au ciel." },
          { qui: "Léa", dit: "Vous voyez ? « Cool que tu te formes… mais surtout n'arrête rien. » C'est toujours comme ça." },
        ],
      },
      question: "Existe-t-il un manque de soutien managérial ou d'encouragement de la hiérarchie pour se former ?",
      consigne: "Identifiez si VOS apprenants bénéficient d'un soutien RÉEL (temps libéré, encouragements, valorisation) ou si la formation est vue comme une contrainte périphérique (section 💼 Profil professionnel).",
      revelation: {
        titre: "PROFIL : INJONCTION PARADOXALE MANAGÉRIALE",
        texte: "Le discours RH affirme que « la formation continue est une priorité stratégique ». La réalité de terrain dit l'inverse : aucun projet déprogrammé, aucun délai décalé, un manager qui sollicite pendant les sessions, aucune reconnaissance si la formation est validée. Léa a donc traité la formation comme on le lui demandait implicitement : une case à cocher, pas un apprentissage.",
        indice: "Le discours RH vs la réalité managériale créent des apprenants-tricheurs malgré eux.",
      },
    },
    // ---------- 9 ----------
    {
      rubrique: R_CONN,
      scene: {
        lieu: "Interrogatoire — Salle 5",
        audio: "audio/lea/lea9.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur ouvre le dossier pédagogique de Léa." },
          { qui: "Inspecteur", dit: "Formation « Management Agile - Niveau Expert ». Score : 94 %. Quiz : 100 % de bonnes réponses. Vous avez même corrigé une erreur dans un exercice. Vous êtes brillante, Léa." },
          { qui: "", dit: "Léa sourit." },
          { qui: "Léa", dit: "Merci. J'avais déjà fait 3 formations sur l'agilité avant celle-là. J'ai lu 5 bouquins sur Scrum. Je pratique au quotidien depuis 2 ans. Alors oui, je maîtrisais déjà 80 % du contenu." },
        ],
      },
      question: "Quel est le niveau de connaissance actuel de votre public sur le sujet de votre formation (débutant, intermédiaire, avancé) ?",
      consigne: "Évaluez honnêtement : VOS apprenants partent-ils de zéro ou ont-ils déjà des bases solides ? Cela change radicalement votre approche pédagogique (section 📚 Niveau de connaissance).",
      revelation: {
        titre: "ANALYSE : NIVEAU AVANCÉ, FORMATION TROP BASIQUE",
        texte: "Avant la formation, Léa maîtrisait déjà 80 % du contenu : certification Scrum Master, cinq livres lus, deux ans de pratique quotidienne. Elle l'a suivie par pure obligation RH et pour fournir un certificat à un client, faute de test de positionnement. Résultat : 35 heures à réviser ce qu'elle savait déjà. Son « hack » via l'IA était moins une fraude qu'un raccourci face à un processus jugé absurde.",
        indice: "Former quelqu'un qui sait déjà = gaspillage de temps perçu, donc stratégies de contournement.",
      },
    },
    // ---------- 10 ----------
    {
      rubrique: R_MOTIV,
      scene: {
        lieu: "Interrogatoire — Salle 5",
        audio: "audio/lea/lea10.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur se cale dans sa chaise." },
          { qui: "Inspecteur", dit: "Léa, pourquoi avoir suivi cette formation ? Vous saviez déjà tout." },
          { qui: "", dit: "Léa soupire." },
          { qui: "Léa", dit: "Parce que j'avais pas le choix. La RH a envoyé un mail : « Formation obligatoire pour tous les chefs de projet. Date limite : 30 avril. » Après, un client nous a demandé de prouver qu'on avait des certifs agiles dans l'équipe pour valider un contrat. Donc… obligation × 2." },
        ],
      },
      question: "Pourquoi votre public souhaite-t-il suivre cette formation (obligation, curiosité, évolution de carrière, résolution de problème) ?",
      consigne: "Identifiez la VRAIE raison qui pousse VOS apprenants à s'inscrire. Obligation ≠ motivation intrinsèque (section 🎯 Attentes et motivations).",
      revelation: {
        titre: "ANALYSE : DOUBLE OBLIGATION, ZÉRO MOTIVATION INTRINSÈQUE",
        texte: "Les raisons de Léa sont purement externes : une obligation RH sous deadline et une exigence client (des certifications agiles pour signer un contrat). Aucun désir personnel d'approfondir un sujet qu'elle maîtrise, aucun problème concret à résoudre. Sa motivation réelle : 0 sur 10. Elle a suivi la formation comme on remplit une déclaration d'impôts : sans le choix, en espérant que ça aille vite.",
        indice: "Formation obligatoire + contenu déjà maîtrisé = recette parfaite pour le désengagement.",
      },
    },
    // ---------- 11 ----------
    {
      rubrique: R_MOTIV,
      scene: {
        lieu: "Interrogatoire — Salle 5",
        audio: "audio/lea/lea11.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur insiste." },
          { qui: "Inspecteur", dit: "OK, c'était obligatoire. Mais qu'espériez-vous en RETIRER ? Un bénéfice ? Une compétence ? Une reconnaissance ?" },
          { qui: "", dit: "Léa réfléchit à peine." },
          { qui: "Léa", dit: "Le certificat. Point. J'avais besoin du PDF à envoyer au client. C'est tout ce qui comptait. Le contenu ? Peu importe. L'apprentissage ? Peu importe. Juste : obtenir le certificat le plus vite possible." },
        ],
      },
      question: "Votre public valorise-t-il davantage le diplôme/certificat ou les compétences réellement acquises ?",
      consigne: "Identifiez ce qui MOTIVE réellement VOS apprenants : le papier (badge, certificat, titre) ou la compétence concrète ? Cela change tout à votre approche (section 🎯 Attentes et motivations).",
      revelation: {
        titre: "ANALYSE : CERTIFICAT > COMPÉTENCE",
        texte: "Léa ne valorisait que le certificat : preuve pour le client, ligne sur LinkedIn, validation RH, argument commercial. La compétence, elle l'avait déjà et n'y voyait aucune utilité, faute de temps comme de reconnaissance. La formation est devenue un jeu vidéo : un badge à débloquer, un temps à optimiser, un cheat code (l'IA pour les quiz). Pas de la malhonnêteté, juste l'« optimisation » d'un processus jugé inutile.",
        indice: "Quand le certificat devient la seule valeur, l'apprentissage disparaît.",
      },
    },
    // ---------- 12 ----------
    {
      rubrique: R_MOTIV,
      scene: {
        lieu: "Interrogatoire — Salle 5",
        audio: "audio/lea/lea12.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur montre les logs de connexion de Léa." },
          { qui: "Inspecteur", dit: "Vous avez validé la formation en 3 semaines. Programme officiel : 6 semaines. Vous avez fait 2× plus vite. Pourquoi cette urgence ?" },
          { qui: "", dit: "Léa rit." },
          { qui: "Léa", dit: "Parce que 6 semaines, c'était beaucoup trop long ! J'avais 12 projets qui avançaient, des clients qui attendaient. Je pouvais pas me permettre de « perdre » 2h par semaine pendant 6 semaines. Alors j'ai optimisé." },
        ],
      },
      question: "Votre public souhaite-t-il un apprentissage rapide ou approfondi ? Ont-ils besoin de résultats visibles rapidement pour rester motivés ?",
      consigne: "Évaluez la tolérance de VOS apprenants à l'investissement temps et leur besoin de « quick wins » (section 🎯 Attentes et motivations).",
      revelation: {
        titre: "ANALYSE : URGENCE PERMANENTE, APPRENTISSAGE SACRIFIÉ",
        texte: "Léa voulait du « fast learning » : des modules de 15-20 minutes, une validation immédiate, l'essentiel sans la profondeur, le tout bouclé en 3 semaines au lieu de 6. La formation proposait l'inverse : modules d'1h30, exercices de réflexion, approfondissements théoriques. Face à ce décalage, elle a choisi le contournement — IA, multi-tâches et survol systématique.",
        indice: "Le rythme de la formation doit s'aligner sur le rythme de vie des apprenants, sinon ils trichent.",
      },
    },
    // ---------- 13 ----------
    {
      rubrique: R_MOTIV,
      scene: {
        lieu: "Interrogatoire — Salle 5",
        audio: "audio/lea/lea13.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur change de ton, plus direct." },
          { qui: "Inspecteur", dit: "Léa, soyons clairs. Vous avez utilisé ChatGPT pour répondre aux quiz. Vous étiez en visio avec des clients pendant les modules. Vous n'avez pas VRAIMENT suivi cette formation. Pourquoi ?" },
          { qui: "", dit: "Léa se raidit." },
          { qui: "Léa", dit: "Parce que personne ne m'a demandé d'apprendre. On m'a demandé de VALIDER. Nuance." },
        ],
      },
      question: "Quels sont les critères de réussite de votre public pour considérer que la formation est utile ?",
      consigne: "Identifiez ce que VOS apprenants considèrent comme « réussite » : avoir le certificat ? Savoir faire concrètement ? Résoudre un problème ? (section 🎯 Attentes et motivations).",
      revelation: {
        titre: "ANALYSE : RÉUSSITE = VALIDATION, PAS APPRENTISSAGE",
        texte: "Pour Léa, réussir = certificat obtenu, temps optimisé, aucun projet retardé, client satisfait. Apprendre, approfondir ou échanger ne comptait pas. Elle a appliqué à la formation la logique de ses projets : identifier l'objectif, prendre le chemin le plus court, livrer, passer au suivant. Le système valorisait le certificat sans vérifier l'apprentissage ; elle a optimisé le système.",
        indice: "Si le système valorise le certificat sans vérifier l'apprentissage, les apprenants optimisent le système, pas l'apprentissage.",
      },
    },
    // ---------- 14 ----------
    {
      rubrique: R_MOTIV,
      scene: {
        lieu: "Interrogatoire — Salle 5",
        audio: "audio/lea/lea14.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur sort un email que Léa a envoyé à une collègue, le 18 avril : « Sarah, cette formation est chiante à mourir. C'est que de la théorie. Rien de concret. Je connais déjà tout. Vivement que ce soit fini. »" },
          { qui: "", dit: "Léa rougit légèrement." },
          { qui: "Léa", dit: "OK, j'avoue. C'était nul. Enfin… pas nul. Mais inadapté. Pour moi en tout cas." },
        ],
      },
      question: "Votre public préfère-t-il la théorie, la pratique, ou un mix des deux ? Ont-ils besoin d'applicabilité immédiate ?",
      consigne: "Identifiez le format pédagogique qui ENGAGE vraiment VOS apprenants : théorie ? Cas pratiques ? Mises en situation ? (section 🎯 Attentes et motivations).",
      revelation: {
        titre: "ANALYSE : BESOIN D'ULTRA-PRATICITÉ, REJET DE LA THÉORIE",
        texte: "Léa attendait des cas concrets, des outils actionnables (templates, checklists), des retours d'expérience, du micro-learning : 1 problème = 1 solution = 10 minutes. La formation offrait l'histoire de l'agilité, la philosophie du manifeste et des exercices introspectifs. Elle fonctionne en mode « problème → solution » : elle n'a pas besoin de savoir pourquoi l'agilité marche, mais comment mieux l'appliquer.",
        indice: "Pour les profils opérationnels pressés, théorie = temps perdu. Seule la praticité immédiate a de la valeur.",
      },
    },
    // ---------- 15 ----------
    {
      rubrique: R_FREINS,
      scene: {
        lieu: "Interrogatoire — Salle 5",
        audio: "audio/lea/lea15.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur se penche en avant, ton plus doux." },
          { qui: "Inspecteur", dit: "Léa, vous semblez fatiguée. Depuis combien de temps vivez-vous à ce rythme ?" },
          { qui: "", dit: "Léa hésite, puis :" },
          { qui: "Léa", dit: "18 mois. Depuis que j'ai rejoint FastGrow. Au début c'était excitant. Maintenant… je sais plus trop. Parfois j'ai l'impression de courir sans savoir pourquoi. Mais si je m'arrête, tout s'effondre." },
        ],
      },
      question: "Quelles sont les contraintes de temps et de disponibilité mentale de votre public ? Sont-ils en surcharge cognitive ?",
      consigne: "Évaluez honnêtement : VOS apprenants ont-ils la BANDE PASSANTE mentale pour apprendre ? Ou sont-ils déjà en surchauffe ? (section ⚠️ Freins et pain points).",
      revelation: {
        titre: "ANALYSE : SURCHARGE COGNITIVE CHRONIQUE",
        texte: "Léa présente les signes d'un burn-out latent : fatigue chronique, incapacité à déconnecter, attention épuisée, culpabilité permanente. En surcharge, le cerveau passe en mode « survie » et privilégie les automatismes, les raccourcis (ChatGPT) et la rapidité ; l'apprentissage profond devient biologiquement impossible. Léa n'a pas choisi de ne pas apprendre : son cerveau n'en avait pas la capacité.",
        indice: "On ne peut pas former quelqu'un dont le cerveau est déjà en surchauffe. Il faut d'abord créer de l'espace mental.",
      },
    },
    // ---------- 16 ----------
    {
      rubrique: R_FREINS,
      scene: {
        lieu: "Interrogatoire — Salle 5",
        audio: "audio/lea/lea16.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur referme le dossier. Silence." },
          { qui: "Inspecteur", dit: "Dernière question, Léa. Le 23 avril, à 14h37, vous cliquez sur « Valider le test final ». Score : 94 %. Certification obtenue. Vous fermez l'onglet. Et ensuite ?" },
          { qui: "", dit: "Léa regarde par la fenêtre." },
          { qui: "Léa", dit: "Ensuite ? J'ai ouvert Slack. J'ai répondu à 12 messages en retard. J'ai rejoint une réunion qui avait déjà commencé. Et j'ai continué. Comme d'habitude." },
          { qui: "", dit: "Elle marque une pause." },
          { qui: "Léa", dit: "Je me suis même pas dit « bravo, t'as réussi ». Je me suis juste dit « ouf, c'est fait, next »." },
        ],
      },
      question: "Quels sont les « tue-motivations » qui pourraient faire abandonner ou dévaluer la formation aux yeux de votre public ?",
      consigne: "Identifiez les OBSTACLES FATALS pour VOS apprenants : qu'est-ce qui les ferait décrocher complètement ou les pousserait à « juste valider » sans s'investir ? (section ⚠️ Freins et pain points).",
      revelation: {
        titre: "MOBILE DU CRIME : UN SYSTÈME QUI VALORISE LA PERFORMANCE, PAS L'APPRENTISSAGE",
        texte: "Léa finit par l'avouer : elle ne se souvient de rien, incapable de citer trois concepts clés. Elle a le certificat, mais n'a rien appris — et personne ne s'en est aperçu. Personne ne lui a demandé ce qu'elle allait appliquer ; juste « Tu as le certificat ? Parfait, envoie-le au client. » Elle n'est pas une tricheuse, mais le produit d'un système qui lui a appris que l'efficacité prime sur l'apprentissage, valider sur comprendre, le certificat sur la compétence. L'inspecteur conclut : « Vous n'êtes pas une criminelle, mais une apprenante sacrifiée. La vraie question n'est pas pourquoi vous avez triché, mais pourquoi le système rend la triche plus rationnelle que l'apprentissage. »",
        indice: "Le coupable n'est pas l'apprenante, mais un système qui rend la triche plus rationnelle que l'apprentissage.",
        finale: true,
      },
    },
  ],
};

// ============================================================
//  AFFAIRE N°03 — SOPHIE NGUYEN
// ============================================================
const SOPHIE = {
  id: "sophie",
  numero: "Affaire n°03",
  nom: "Sophie Nguyen",
  role: "Cheffe de projet digital",
  fiche: "28 ans · PixelWave Agency (35 employés) · 3 ans d'ancienneté",
  accroche: "15 janvier 2025, 23h47. Elle efface 18 mois de travail d'un clic. Pourquoi son plan de formation n'a-t-il jamais pris ?",
  portrait: "portraits/Sophie_Nguyen.png",
  briefing: {
    securite: "Dossier ouvert — Niveau de priorité : élevé",
    identite: [
      ["Nom", "NGUYEN, Sophie"],
      ["Âge", "28 ans"],
      ["Profession", "Cheffe de projet digital"],
      ["Entreprise", "PixelWave Agency (35 employés)"],
      ["Ancienneté", "3 ans"],
    ],
    incident: [
      "15 janvier 2025, 8h30. Le directeur général de PixelWave ouvre le dossier partagé « Plan de formation 2025 ». Le dossier est vide. Complètement vide. Les 12 modules planifiés, les inscriptions, les budgets validés — tout a disparu.",
      "Les logs informatiques montrent une suppression massive à 23h47 la veille, depuis le compte de Sophie Nguyen, Cheffe de projet digital, responsable du plan de formation de son équipe depuis un an et demi.",
      "Confrontée aux faits, Sophie fond en larmes : « J'ai tout supprimé parce que rien ne marchait. RIEN. J'ai passé 6 mois à construire un plan parfait sur le papier, un an à le déployer… et personne ne venait aux formations. »",
    ],
    mission: "Comprendre pourquoi le plan de formation de Sophie a échoué malgré un an et demi de travail. Reconstituer les erreurs d'analyse qui l'ont menée à construire un dispositif déconnecté de la réalité de son équipe.",
  },
  questions: [
    // ---------- 1 ----------
    {
      rubrique: R_PERSO,
      scene: {
        lieu: "Interrogatoire — Salle 7",
        audio: "audio/sophie/sophie1.mp3",
        dialogue: [
          { qui: "", dit: "Sophie se tord les mains nerveusement." },
          { qui: "Sophie", dit: "Mon équipe ? Oui, je les connais… enfin, je croyais. Il y a des trentenaires, des quarantenaires, quelques seniors. Des profils très différents. Mais sur le papier, j'avais les infos de base : âge, poste, ancienneté. Je pensais que ça suffisait." },
        ],
      },
      question: "Au-delà des données démographiques, quelles caractéristiques personnelles de votre public pourraient influencer leur rapport à la formation ?",
      consigne: "Allez au-delà de l'âge et du poste. Pensez aux habitudes d'apprentissage, au rapport à la technologie, aux contraintes personnelles (section 🧑 Profil personnel).",
      revelation: {
        titre: "PROFIL : L'ILLUSION DES DONNÉES DÉMOGRAPHIQUES",
        texte: "Sophie avait un fichier Excel impeccable : âges, postes, dates d'embauche. Mais elle ignorait la phobie des formations en groupe de Françoise, l'impossibilité pour Julien de rester assis plus d'une heure, les contraintes familiales de Nadia. Les données froides ne racontent pas l'humain derrière le poste.",
        indice: "Les données démographiques ne suffisent pas. Le vécu personnel façonne le rapport à l'apprentissage.",
      },
    },
    // ---------- 2 ----------
    {
      rubrique: R_PRO,
      scene: {
        lieu: "Interrogatoire — Salle 7",
        audio: "audio/sophie/sophie2.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur affiche l'organigramme de PixelWave." },
          { qui: "Inspecteur", dit: "Sophie, décrivez-moi votre équipe. Pas les noms. Les MÉTIERS. Ce qu'ils font vraiment au quotidien." },
          { qui: "", dit: "Sophie hésite longuement." },
          { qui: "Sophie", dit: "Eh bien… il y a des graphistes, des développeurs, des UX designers, un community manager… Ils font… du digital ?" },
        ],
      },
      question: "Quelle est la fonction exacte de votre public et quelles sont ses missions quotidiennes concrètes ?",
      consigne: "Décrivez le métier RÉEL de VOS apprenants avec précision. « Ils font du digital » n'est pas une réponse. Détaillez les tâches concrètes (section 💼 Profil professionnel).",
      revelation: {
        titre: "PROFIL : ÉQUIPE HÉTÉROGÈNE AUX MÉTIERS RADICALEMENT DIFFÉRENTS",
        texte: "L'équipe mêlait graphistes print migrant vers le digital, développeurs juniors, UX designers, community manager, chefs de projet et freelances tournants. Sophie a mis ces 15 profils dans le même « plan de formation digital » : autant donner le même médicament à des patients ayant des maladies différentes.",
        indice: "Une équipe n'est pas un bloc homogène. Chaque métier a des besoins de formation spécifiques.",
      },
    },
    // ---------- 3 ----------
    {
      rubrique: R_PRO,
      scene: {
        lieu: "Interrogatoire — Salle 7",
        audio: "audio/sophie/sophie3.mp3",
        dialogue: [
          { qui: "Sophie", dit: "Je leur ai envoyé un questionnaire en ligne pour connaître leurs besoins. Sur 15 personnes, j'ai eu… 3 réponses. Les 12 autres n'ont même pas ouvert le mail." },
          { qui: "", dit: "Elle soupire." },
          { qui: "Sophie", dit: "Alors j'ai décidé toute seule. J'ai regardé les tendances du marché — IA, no-code, UX writing — et j'ai construit le plan là-dessus. Logique, non ?" },
        ],
      },
      question: "Comment recueillez-vous les besoins réels de votre public ? Les consultez-vous directement ?",
      consigne: "Questionnez votre méthode de recueil des besoins. Un questionnaire non rempli n'est pas un silence, c'est un message (section 💼 Profil professionnel).",
      revelation: {
        titre: "ANALYSE : BESOINS DÉCIDÉS PAR LE HAUT, PAS PAR LE TERRAIN",
        texte: "Sophie a construit le plan sur les tendances du marché et les souhaits de la direction, pas sur le terrain. Les 12 non-réponses au questionnaire signifiaient « On n'y croit pas ». Résultat : de l'IA pour des graphistes qui avaient d'abord besoin de Figma, du no-code pour des développeurs qui trouvaient ça insultant.",
        indice: "Un plan de formation construit sans consultation terrain est un plan déconnecté.",
      },
    },
    // ---------- 4 ----------
    {
      rubrique: R_PRO,
      scene: {
        lieu: "Interrogatoire — Salle 7",
        audio: "audio/sophie/sophie4.mp3",
        dialogue: [
          { qui: "", dit: "L'inspecteur montre le calendrier de l'agence." },
          { qui: "Inspecteur", dit: "Regardez ces dates. Vos formations étaient planifiées les lundis de 9h à 17h. Mais votre équipe… elle faisait quoi le lundi ?" },
          { qui: "", dit: "Sophie blêmit." },
          { qui: "Sophie", dit: "Le lundi… c'est le jour des livraisons clients. C'est le jour le plus chargé de la semaine. Oh non…" },
        ],
      },
      question: "Quelles sont les contraintes opérationnelles et organisationnelles de votre public (charge de travail, saisonnalité, disponibilité) ?",
      consigne: "Identifiez les moments où VOS apprenants sont RÉELLEMENT disponibles, pas seulement sur le papier. Contraintes de production, pics d'activité, réunions récurrentes… (section 💼 Profil professionnel).",
      revelation: {
        titre: "ANALYSE : FORMATION PLANIFIÉE AU PIRE MOMENT",
        texte: "Le lundi, jour des livraisons clients, était le seul jour où PERSONNE ne pouvait se libérer. Sophie l'avait choisi « parce que c'est motivant ». Résultat : 80 % d'absentéisme. Sophie y a vu un boycott ; l'équipe y a vu la preuve qu'elle ignorait leur quotidien.",
        indice: "Planifier une formation sans connaître le rythme opérationnel, c'est programmer un échec.",
      },
    },
    // ---------- 5 ----------
    {
      rubrique: R_PRO,
      scene: {
        lieu: "Interrogatoire — Salle 7",
        audio: "audio/sophie/sophie5.mp3",
        dialogue: [
          { qui: "Sophie", dit: "Il y avait aussi le problème des freelances. J'avais 2 freelances qui changeaient tous les 2-3 mois. Je les incluais dans le plan, mais ils partaient avant la fin. Et les nouveaux arrivaient sans avoir suivi le début…" },
        ],
      },
      question: "Quel est le taux de rotation de votre public ? Avez-vous des profils temporaires, saisonniers ou en transition ?",
      consigne: "Évaluez la stabilité de VOS apprenants. Un public qui change impacte la continuité pédagogique et le format de la formation (section 💼 Profil professionnel).",
      revelation: {
        titre: "ANALYSE : PUBLIC MOUVANT, PLAN FIGÉ",
        texte: "Sophie avait conçu un plan linéaire sur 12 mois, mais entre les freelances qui tournaient chaque trimestre et les départs en cours d'année, le groupe n'était jamais le même d'une session à l'autre. Un public instable exige un plan modulaire, pas séquentiel.",
        indice: "Un plan linéaire pour un public mouvant est condamné à l'échec.",
      },
    },
    // ---------- 6 ----------
    {
      rubrique: R_PRO,
      scene: {
        lieu: "Interrogatoire — Salle 7",
        audio: "audio/sophie/sophie6.mp3",
        dialogue: [
          { qui: "Inspecteur", dit: "Sophie, qui décide des formations chez PixelWave ? Vous ? Le directeur ? Les collaborateurs ?" },
          { qui: "Sophie", dit: "Moi, en théorie. Mais le directeur voulait absolument de l'IA. Les managers voulaient des soft skills. Et les collaborateurs… personne ne leur a demandé." },
        ],
      },
      question: "Qui décide de la formation de votre public ? Quelle est la chaîne de décision et où se situe le pouvoir réel ?",
      consigne: "Identifiez tous les décideurs : commanditaires, managers, RH, apprenants eux-mêmes. Leurs intérêts convergent-ils ? (section 💼 Profil professionnel).",
      revelation: {
        titre: "ANALYSE : TROP DE DÉCIDEURS, AUCUNE COHÉRENCE",
        texte: "Le directeur voulait de l'« innovant », les managers de l'« utile », et les collaborateurs n'avaient jamais voix au chapitre. À vouloir satisfaire tout le monde, le plan ne satisfaisait personne.",
        indice: "Quand le commanditaire, le manager et l'apprenant n'ont pas les mêmes objectifs, le plan de formation est un compromis qui ne sert personne.",
      },
    },
    // ---------- 7 ----------
    {
      rubrique: R_CONN,
      scene: {
        lieu: "Interrogatoire — Salle 7",
        audio: "audio/sophie/sophie7.mp3",
        dialogue: [
          { qui: "Sophie", dit: "Je savais que certains étaient débutants et d'autres confirmés. Mais j'ai fait UN SEUL programme. Pour tout le monde. Même niveau, même rythme." },
          { qui: "Sophie", dit: "Les débutants étaient largués dès la deuxième heure. Les confirmés s'ennuyaient dès la première." },
        ],
      },
      question: "Le niveau de connaissance de votre public est-il homogène ou hétérogène ? Comment gérez-vous les écarts ?",
      consigne: "Évaluez la diversité des niveaux au sein de VOS apprenants. Un groupe hétérogène nécessite une différenciation pédagogique (section 📚 Niveau de connaissance).",
      revelation: {
        titre: "ANALYSE : HÉTÉROGÉNÉITÉ IGNORÉE",
        texte: "Des graphistes seniors sans aucune base digitale face à des développeurs juniors ultra à l'aise techniquement : un seul programme pour ces deux extrêmes garantissait que personne ne serait au bon niveau.",
        indice: "L'hétérogénéité des niveaux est la première variable à analyser avant de concevoir un programme.",
      },
    },
    // ---------- 8 ----------
    {
      rubrique: R_CONN,
      scene: {
        lieu: "Interrogatoire — Salle 7",
        audio: "audio/sophie/sophie8.mp3",
        dialogue: [
          { qui: "Inspecteur", dit: "Avez-vous testé le niveau de votre équipe AVANT de lancer les formations ?" },
          { qui: "", dit: "Sophie, gênée." },
          { qui: "Sophie", dit: "Non. Je me suis fiée à… mon intuition. Et aux fiches de poste." },
        ],
      },
      question: "Disposez-vous d'un diagnostic initial des compétences de votre public ? Comment évaluez-vous leur point de départ ?",
      consigne: "Un diagnostic préalable est indispensable. Sans lui, vous construisez dans le flou (section 📚 Niveau de connaissance).",
      revelation: {
        titre: "ANALYSE : ABSENCE DE DIAGNOSTIC = VOL À L'AVEUGLE",
        texte: "Sophie a présupposé les niveaux à partir des intitulés de poste. Or un « graphiste senior » peut être expert en Photoshop et ignorer Figma. Un simple test de 15 minutes en amont aurait révélé les écarts.",
        indice: "Présupposer un niveau sans le mesurer, c'est prescrire un traitement sans diagnostic.",
      },
    },
    // ---------- 9 ----------
    {
      rubrique: R_MOTIV,
      scene: {
        lieu: "Interrogatoire — Salle 7",
        audio: "audio/sophie/sophie9.mp3",
        dialogue: [
          { qui: "Sophie", dit: "Quand je leur ai annoncé le programme, ils m'ont regardée avec des yeux vides. Aucune réaction. Ni enthousiasme, ni rejet. Juste… rien." },
          { qui: "Sophie", dit: "J'aurais dû comprendre que « rien », c'est pire que « non »." },
        ],
      },
      question: "Qu'est-ce qui motiverait RÉELLEMENT votre public à s'investir dans la formation ? Quel bénéfice concret en retirent-ils ?",
      consigne: "Identifiez les leviers de motivation RÉELS de VOS apprenants — pas ce que vous aimeriez, ce qui les fait vraiment bouger (section 🎯 Attentes et motivations).",
      revelation: {
        titre: "ANALYSE : AUCUN BÉNÉFICE PERÇU = ZÉRO ENGAGEMENT",
        texte: "L'équipe ne voyait pas ce qu'elle avait à gagner : aucun lien entre les formations et les projets à livrer. Sophie n'avait jamais explicité le « pourquoi » de chaque module. Sans bénéfice perçu, l'engagement est nul.",
        indice: "La question n'est pas « Quelle formation proposer ? » mais « Pourquoi cette formation changerait-elle quelque chose pour EUX ? »",
      },
    },
    // ---------- 10 ----------
    {
      rubrique: R_MOTIV,
      scene: {
        lieu: "Interrogatoire — Salle 7",
        audio: "audio/sophie/sophie10.mp3",
        dialogue: [
          { qui: "Inspecteur", dit: "Ont-ils exprimé des préférences de format ?" },
          { qui: "Sophie", dit: "Oui ! Marc, le graphiste senior, m'a dit : « Moi je veux juste qu'on me montre Figma en 2 heures, pas qu'on me fasse une formation de 3 jours sur le design thinking. » Et Clara, la dev junior, voulait un mentor, pas un cours magistral." },
        ],
      },
      question: "Votre public préfère-t-il un format court ou long ? Théorique ou pratique ? Accompagné ou autonome ?",
      consigne: "Explorez les préférences de FORMAT de VOS apprenants. Le meilleur contenu dans le mauvais format sera rejeté (section 🎯 Attentes et motivations).",
      revelation: {
        titre: "ANALYSE : FORMAT IMPOSÉ VS FORMAT DÉSIRÉ",
        texte: "Sophie imposait des journées de 7h en présentiel ; l'équipe réclamait des micro-formats de 1-2h et du mentorat individuel. Un restaurant gastronomique pour des gens qui voulaient du street food rapide et ciblé.",
        indice: "Le format est aussi important que le contenu. Un mauvais format tue le meilleur programme.",
      },
    },
    // ---------- 11 ----------
    {
      rubrique: R_MOTIV,
      scene: {
        lieu: "Interrogatoire — Salle 7",
        audio: "audio/sophie/sophie11.mp3",
        dialogue: [
          { qui: "", dit: "Sophie, les yeux rouges." },
          { qui: "Sophie", dit: "Le pire ? Marc m'a dit : « Sophie, on n'avait rien demandé. Tu nous as imposé un truc dont on n'a pas besoin, au pire moment de l'année, dans un format qui ne nous convient pas. Et tu t'étonnes qu'on ne vienne pas ? » Il avait raison." },
        ],
      },
      question: "Comment impliquez-vous votre public dans la conception de leur formation ? Ont-ils un pouvoir de décision ?",
      consigne: "Évaluez le degré de co-construction possible avec VOS apprenants. Plus ils participent, plus ils s'investissent (section 🎯 Attentes et motivations).",
      revelation: {
        titre: "ANALYSE : FORMATION DESCENDANTE = FORMATION REJETÉE",
        texte: "Sophie a tout conçu seule, sans jamais impliquer l'équipe. Un atelier de 30 minutes, un vote sur les formats, un choix des créneaux auraient suffi à en faire « leur » formation, pas « celle de Sophie ».",
        indice: "Co-construire la formation avec les apprenants n'est pas une perte de temps, c'est un investissement dans l'engagement.",
      },
    },
    // ---------- 12 ----------
    {
      rubrique: R_FREINS,
      scene: {
        lieu: "Interrogatoire — Salle 7",
        audio: "audio/sophie/sophie12.mp3",
        dialogue: [
          { qui: "Inspecteur", dit: "Vos collaborateurs avaient-ils déjà vécu de mauvaises expériences de formation ?" },
          { qui: "Sophie", dit: "L'année d'avant, la direction avait imposé une formation « Management agile » de 2 jours. Le formateur lisait ses slides. Personne n'a rien retenu. Tout le monde en est ressorti en disant : « Encore 2 jours de perdus. » Et moi, j'ai débarqué 6 mois plus tard avec un nouveau plan de formation…" },
        ],
      },
      question: "Votre public a-t-il vécu de mauvaises expériences de formation ? Comment cela affecte-t-il leur perception ?",
      consigne: "Les mauvaises expériences passées créent des résistances profondes. Identifiez l'historique de formation de VOS apprenants (section ⚠️ Freins et pain points).",
      revelation: {
        titre: "ANALYSE : TRAUMATISME FORMATIONNEL COLLECTIF",
        texte: "Trois formations imposées en 2 ans, toutes perçues comme inutiles : l'équipe a classé le plan de Sophie dans la catégorie « encore une perte de temps ». Ce n'est pas elle qu'ils rejetaient, c'est la formation imposée d'en haut.",
        indice: "Les mauvaises expériences passées empoisonnent les futures. Il faut d'abord réparer la confiance.",
      },
    },
    // ---------- 13 ----------
    {
      rubrique: R_FREINS,
      scene: {
        lieu: "Interrogatoire — Salle 7",
        audio: "audio/sophie/sophie13.mp3",
        dialogue: [
          { qui: "Sophie", dit: "Et puis il y avait la charge de travail. L'agence était en sous-effectif chronique. Quand je bloquais une journée de formation, ça signifiait une journée de production en moins. Les managers me disaient : « Sophie, on ne peut pas se permettre de perdre une journée. »" },
        ],
      },
      question: "La charge de travail de votre public leur permet-elle réellement de se former ? Quel est le coût d'opportunité ?",
      consigne: "Évaluez si VOS apprenants ont RÉELLEMENT le temps de se former. Le temps « libéré » est-il vraiment libéré ? (section ⚠️ Freins et pain points).",
      revelation: {
        titre: "ANALYSE : SURCHARGE = FORMATION IMPOSSIBLE",
        texte: "L'équipe travaillait à 120 % : chaque journée de formation signifiait des heures supplémentaires à rattraper. Former sans alléger la charge, c'est faire courir un marathon avec un sac de 30 kg sur le dos.",
        indice: "Si le temps de formation n'est pas « protégé » dans l'agenda, la formation n'existe pas.",
      },
    },
    // ---------- 14 ----------
    {
      rubrique: R_FREINS,
      scene: {
        lieu: "Interrogatoire — Salle 7",
        audio: "audio/sophie/sophie14.mp3",
        dialogue: [
          { qui: "Sophie", dit: "Certains avaient peur. Françoise, ma graphiste senior, m'a confié : « Si je vais à la formation Figma et que je n'y arrive pas, tout le monde saura que je suis larguée. Je préfère ne pas y aller. »" },
        ],
      },
      question: "Votre public a-t-il des craintes liées à l'image de soi ? La formation peut-elle révéler des lacunes qu'ils préfèrent cacher ?",
      consigne: "Identifiez les peurs « sociales » de VOS apprenants : peur du jugement, de l'incompétence révélée, du regard des pairs (section ⚠️ Freins et pain points).",
      revelation: {
        titre: "ANALYSE : LA FORMATION COMME MENACE IDENTITAIRE",
        texte: "Pour Françoise, réputée « meilleure graphiste de l'agence », suivre une formation Figma en débutante revenait à exposer publiquement ses lacunes. Plus on est expert, plus la posture de débutant est insupportable.",
        indice: "Pour les profils expérimentés, la formation peut menacer l'identité professionnelle. Sécurisez l'espace d'apprentissage.",
      },
    },
    // ---------- 15 ----------
    {
      rubrique: R_FREINS,
      scene: {
        lieu: "Interrogatoire — Salle 7",
        audio: "audio/sophie/sophie15.mp3",
        dialogue: [
          { qui: "Inspecteur", dit: "Des obstacles pratiques ou logistiques ?" },
          { qui: "Sophie", dit: "Les freelances n'avaient pas accès à la plateforme. Deux collaborateurs en télétravail ne pouvaient pas venir les jours en présentiel. Et le WiFi de la salle de formation plantait une fois sur deux." },
        ],
      },
      question: "Quels obstacles pratiques ou logistiques pourraient empêcher votre public de participer (accès, matériel, localisation, contraintes techniques) ?",
      consigne: "Listez les freins CONCRETS : accès aux outils, déplacements, équipement, connexion, compatibilité des agendas… (section ⚠️ Freins et pain points).",
      revelation: {
        titre: "ANALYSE : OBSTACLES LOGISTIQUES INVISIBLES",
        texte: "Freelances sans accès VPN, télétravailleurs exclus du présentiel, WiFi défaillant, licences manquantes : ces « détails » non vérifiés ont transformé une formation déjà fragile en fiasco complet.",
        indice: "Les obstacles logistiques semblent anodins mais sont des tueurs silencieux de formation.",
      },
    },
    // ---------- 16 ----------
    {
      rubrique: R_FREINS,
      scene: {
        lieu: "Interrogatoire — Salle 7",
        audio: "audio/sophie/sophie16.mp3",
        dialogue: [
          { qui: "", dit: "Sophie inspire profondément." },
          { qui: "Sophie", dit: "Vous voulez savoir pourquoi j'ai TOUT supprimé à 23h47 ? Ce soir-là, j'ai reçu un email du directeur. Objet : « Bilan formation 2024 ». Taux de participation : 15 %. Taux de satisfaction : non mesuré. Impact sur la performance : inconnu. Dix-huit mois de travail. 15 % de participation. J'ai regardé l'écran. J'ai sélectionné tout le dossier du plan 2025. Et j'ai appuyé sur Supprimer." },
          { qui: "Sophie", dit: "Ce n'était pas de la destruction. C'était de la honte. Pas celle de l'apprenante qui galère — celle de la conceptrice qui a failli." },
        ],
      },
      question: "Si votre formation échouait, quelles en seraient les causes les plus probables du point de vue de votre public ?",
      consigne: "Inversez la perspective : imaginez l'ÉCHEC de votre formation. Listez les causes que VOS apprenants identifieraient. Ce sont vos risques prioritaires (section ⚠️ Freins et pain points).",
      revelation: {
        titre: "DÉNOUEMENT : LE SYNDROME DE LA CONCEPTRICE AVEUGLE",
        texte: "Sophie n'était pas incompétente : elle était consciencieuse, organisée, méthodique. Mais elle a conçu son plan depuis son bureau, avec des données froides, sans jamais aller sur le terrain ni demander : « De quoi as-tu VRAIMENT besoin ? ». Un dispositif parfait en théorie, catastrophique en pratique, parce qu'elle ne connaissait pas son public.",
        indice: "On ne conçoit pas une formation POUR un public sans la concevoir AVEC lui.",
        finale: true,
      },
    },
  ],
  resolution: {
    mobile: {
      resume: "Méconnaissance profonde du public cible + conception descendante déconnectée du terrain.",
      texte: "Sophie a supprimé le plan de formation non par malveillance mais par désespoir face à un échec qu'elle ne comprenait pas — parce qu'elle n'avait jamais pris le temps de comprendre son public.",
    },
    circonstances: [
      { titre: "Absence de méthode de recueil des besoins", texte: "Personne ne lui a appris à consulter son public avant de concevoir." },
      { titre: "Pression hiérarchique sur le contenu", texte: "La direction imposait des thèmes « tendance » sans lien avec les besoins réels." },
      { titre: "Équipe hétérogène non segmentée", texte: "15 profils radicalement différents traités comme un groupe homogène." },
      { titre: "Historique de formations ratées", texte: "L'équipe avait déjà perdu confiance dans le concept même de formation organisée." },
      { titre: "Contraintes opérationnelles ignorées", texte: "La surcharge de travail rendait toute formation impraticable." },
      { titre: "Aucun diagnostic préalable", texte: "Le plan a été construit sur des hypothèses, pas sur des données." },
    ],
    verdict: [
      "Sophie n'est pas une mauvaise conceptrice.",
      "Sophie est une conceptrice qui a oublié la première étape : connaître son public.",
      "La suppression du dossier n'est pas la cause, c'est le symptôme.",
      "La cause : un dispositif de formation conçu POUR un public, mais SANS ce public.",
    ],
    mission: {
      intro: "Vous avez reconstitué le profil complet de l'équipe de Sophie en 16 questions.",
      sousTitre: "Maintenant, faites le parallèle avec VOS apprenants :",
      etapes: [
        "Relisez votre fiche d'enquête complétée.",
        "Identifiez les erreurs de Sophie que vous pourriez commettre.",
        "Rédigez un portrait narratif de VOS apprenants (5-8 lignes).",
      ],
    },
    questionEquipe: "Quelles actions concrètes allez-vous mener AVANT de concevoir votre formation pour éviter le syndrome de Sophie ?",
    questionEquipeNote: "Notez 2-3 décisions concrètes au dos de votre fiche.",
  },
};

// ============================================================
//  AFFAIRE N°04 — THOMAS LEFÈVRE
// ============================================================
const THOMAS = {
  id: "thomas",
  numero: "Affaire n°04",
  nom: "Thomas Lefèvre",
  role: "Responsable Qualité",
  fiche: "38 ans · NutriSafe Industries (220 employés) · 12 ans d'ancienneté",
  accroche: "3 février 2025. 100 % de réussite sur le papier, 40 % d'échec sur le terrain. Pourquoi a-t-il signé des résultats qu'il savait faux ?",
  portrait: "portraits/Thomas_Lefevre.png",
  briefing: {
    securite: "Dossier ouvert — Niveau de priorité : critique",
    identite: [
      ["Nom", "LEFÈVRE, Thomas"],
      ["Âge", "38 ans"],
      ["Profession", "Responsable Qualité"],
      ["Entreprise", "NutriSafe Industries (220 employés)"],
      ["Ancienneté", "12 ans"],
    ],
    incident: [
      "3 février 2025, 14h00. L'auditeur externe AFNOR ouvre les registres de formation de NutriSafe pour le renouvellement de la certification IFS. Il compare les résultats d'évaluation avec les observations terrain. Incohérence flagrante : 100 % de réussite sur le papier, mais en situation réelle, 8 opérateurs sur 20 ne respectent pas les protocoles HACCP de base.",
      "Les fichiers d'évaluation portent tous la signature numérique de Thomas Lefèvre, Responsable Qualité, qui a validé les résultats sans vérification terrain.",
      "Confronté aux faits, Thomas blêmit : « Je savais qu'ils n'étaient pas tous au niveau. Mais si j'avais mis les vrais résultats, on aurait perdu la certification. 220 emplois étaient en jeu. Qu'est-ce que vous auriez fait à ma place ? »",
    ],
    mission: "Comprendre pourquoi la formation obligatoire de NutriSafe n'a pas atteint ses objectifs et pourquoi Thomas a préféré masquer la réalité plutôt que d'admettre l'échec du dispositif.",
  },
  questions: [
    // ---------- 1 ----------
    {
      rubrique: R_PERSO,
      scene: {
        lieu: "Interrogatoire — Salle 9",
        audio: "audio/thomas/thomas1.mp3",
        dialogue: [
          { qui: "", dit: "Thomas se frotte les yeux, épuisé." },
          { qui: "Thomas", dit: "Mon équipe ? 20 opérateurs de ligne. Je connais leurs noms, leurs postes. Mais qui ils sont vraiment ? D'où ils viennent ? Aucune idée. Je les vois en blouse blanche et charlotte. Pas comme des personnes." },
        ],
      },
      question: "Quelle est la tranche d'âge majoritaire de votre public cible et quelle est sa diversité générationnelle ?",
      consigne: "Notez la composition générationnelle de VOS apprenants. Les écarts d'âge créent des rapports très différents à l'apprentissage (section 🧑 Profil personnel).",
      revelation: {
        titre: "PROFIL : DIVERSITÉ GÉNÉRATIONNELLE EXTRÊME",
        texte: "L'équipe de Thomas mélangeait jeunes diplômés de 22 ans, intérimaires trentenaires en reconversion et ouvriers cinquantenaires avec 25 ans de maison. Tous ont reçu la même formation HACCP, au même rythme — alors que leurs besoins pédagogiques étaient radicalement opposés.",
        indice: "L'âge n'est pas un détail administratif, c'est un contexte d'apprentissage complet.",
      },
    },
    // ---------- 2 ----------
    {
      rubrique: R_PERSO,
      scene: {
        lieu: "Interrogatoire — Salle 9",
        audio: "audio/thomas/thomas2.mp3",
        dialogue: [
          { qui: "Thomas", dit: "Il y a un truc que je n'ai découvert qu'après l'incident. Sur mes 20 opérateurs, 6 ne parlent pas couramment le français. La formation était en français technique. Avec du jargon HACCP partout. Points critiques de maîtrise, dangers biologiques, procédures de traçabilité… Je n'avais jamais pensé à la barrière linguistique." },
        ],
      },
      question: "Votre public maîtrise-t-il la langue dans laquelle la formation sera dispensée ? Y a-t-il des barrières linguistiques ou culturelles ?",
      consigne: "Identifiez les barrières linguistiques et culturelles de VOS apprenants. Un vocabulaire technique mal compris ne produit pas de l'apprentissage, mais de la confusion (section 🧑 Profil personnel).",
      revelation: {
        titre: "PROFIL : BARRIÈRE LINGUISTIQUE INVISIBLE",
        texte: "6 opérateurs sur 20 avaient le français comme seconde langue : à l'aise à l'oral, perdus face au jargon technique. Au quiz final, ils ont répondu au hasard — non par ignorance, mais parce qu'ils ne comprenaient pas les questions.",
        indice: "La maîtrise de la langue de formation est un prérequis invisible souvent oublié.",
      },
    },
    // ---------- 3 ----------
    {
      rubrique: R_PERSO,
      scene: {
        lieu: "Interrogatoire — Salle 9",
        audio: "audio/thomas/thomas3.mp3",
        dialogue: [
          { qui: "Thomas", dit: "Et le niveau scolaire… Je n'y avais pas pensé non plus. Certains de mes opérateurs n'ont pas le bac. Ils n'ont pas l'habitude d'être en « formation ». Pour eux, s'asseoir dans une salle et écouter quelqu'un parler pendant 3 heures, c'est l'école. Et l'école, pour beaucoup, c'est un mauvais souvenir." },
        ],
      },
      question: "Quel est le rapport de votre public à l'apprentissage formel ? Ont-ils un bon ou un mauvais souvenir de l'école et de la formation ?",
      consigne: "Évaluez le rapport de VOS apprenants à l'apprentissage « scolaire ». Un public qui a de mauvais souvenirs de l'école résistera aux formats académiques (section 🧑 Profil personnel).",
      revelation: {
        titre: "PROFIL : RAPPORT TRAUMATIQUE À L'APPRENTISSAGE FORMEL",
        texte: "Plusieurs opérateurs avaient quitté l'école tôt, parfois en échec. « Formation obligatoire avec évaluation finale » a réveillé la boule au ventre de l'examen. L'un d'eux a confié : « J'ai cru que j'allais être viré si je ratais le test. »",
        indice: "Le rapport à l'apprentissage est chargé d'histoire personnelle. L'ignorer, c'est activer des résistances profondes.",
      },
    },
    // ---------- 4 ----------
    {
      rubrique: R_PERSO,
      scene: {
        lieu: "Interrogatoire — Salle 9",
        audio: "audio/thomas/thomas4.mp3",
        dialogue: [
          { qui: "Inspecteur", dit: "Thomas, vos opérateurs travaillent en horaires décalés, n'est-ce pas ?" },
          { qui: "Thomas", dit: "Oui. 3x8. Matin, après-midi, nuit. Et la formation était planifiée de 9h à 12h. L'équipe de nuit devait rester APRÈS sa nuit pour suivre la formation. Certains n'avaient pas dormi depuis 20 heures." },
        ],
      },
      question: "Quelles sont les contraintes de vie quotidienne de votre public (horaires, transport, obligations familiales, santé) ?",
      consigne: "Identifiez les contraintes de vie de VOS apprenants au-delà du cadre professionnel. Horaires, fatigue, transport, enfants… Tout ce qui impacte leur disponibilité cognitive (section 🧑 Profil personnel).",
      revelation: {
        titre: "PROFIL : CONDITIONS DE VIE INCOMPATIBLES AVEC LE FORMAT",
        texte: "Les opérateurs de nuit arrivaient en formation après 8 heures de travail physique, épuisés, l'attention nulle. Former quelqu'un qui n'a pas dormi, c'est remplir un verre percé. Thomas n'a jamais adapté les horaires.",
        indice: "La disponibilité cognitive de l'apprenant est aussi importante que le contenu de la formation.",
      },
    },
    // ---------- 5 ----------
    {
      rubrique: R_PERSO,
      scene: {
        lieu: "Interrogatoire — Salle 9",
        audio: "audio/thomas/thomas5.mp3",
        dialogue: [
          { qui: "Thomas", dit: "Il y a aussi la question du turnover. Sur mes 20 opérateurs, 5 sont des intérimaires qui changent tous les 2-3 mois. Ils suivent la même formation que les CDI, mais ils seront partis avant de pouvoir appliquer ce qu'ils ont appris. Et les nouveaux qui arrivent… ils n'ont eu aucune formation." },
        ],
      },
      question: "Votre public est-il stable ou y a-t-il un turnover important ? Comment gérez-vous les arrivées et les départs ?",
      consigne: "Évaluez la stabilité de VOS apprenants. Le turnover impose des formats de formation courts, répétables, et intégrables à tout moment (section 🧑 Profil personnel).",
      revelation: {
        titre: "PROFIL : TURNOVER CONSTANT, FORMATION PONCTUELLE",
        texte: "Avec 25 % de l'effectif en rotation permanente, la formation annuelle était un non-sens : un intérimaire arrivé entre deux sessions restait sans AUCUNE formation pendant des semaines. Un dispositif continu et modulaire s'imposait.",
        indice: "Un public instable nécessite un dispositif de formation permanent, pas ponctuel.",
      },
    },
    // ---------- 6 ----------
    {
      rubrique: R_PRO,
      scene: {
        lieu: "Interrogatoire — Salle 9",
        audio: "audio/thomas/thomas6.mp3",
        dialogue: [
          { qui: "Inspecteur", dit: "Décrivez-moi le quotidien d'un opérateur de ligne chez NutriSafe." },
          { qui: "Thomas", dit: "Il arrive, enfile sa blouse, sa charlotte, ses gants. Et pendant 8 heures, il est debout, dans le bruit, dans le froid de l'atelier réfrigéré. Il manipule des denrées, surveille des machines, contrôle des températures. C'est physique, répétitif, et exigeant." },
        ],
      },
      question: "Quel est l'environnement de travail quotidien de votre public et quelles contraintes physiques ou sensorielles s'y appliquent ?",
      consigne: "Décrivez précisément l'environnement de travail de VOS apprenants. Bruit, température, équipements obligatoires, postures… Tout cela influence le format de formation adapté (section 💼 Profil professionnel).",
      revelation: {
        titre: "PROFIL : ENVIRONNEMENT PHYSIQUE CONTRAIGNANT",
        texte: "Atelier réfrigéré à 4 °C, travail debout, équipements de protection — puis une salle surchauffée et 3 heures assis devant des slides. Former des travailleurs manuels comme des employés de bureau, c'est ignorer la réalité de leur corps.",
        indice: "L'environnement de travail dicte le format de formation. Pas l'inverse.",
      },
    },
    // ---------- 7 ----------
    {
      rubrique: R_PRO,
      scene: {
        lieu: "Interrogatoire — Salle 9",
        audio: "audio/thomas/thomas7.mp3",
        dialogue: [
          { qui: "Thomas", dit: "Le problème, c'est qu'on leur demande de connaître les normes HACCP sur le bout des doigts. Mais au quotidien, ils appliquent des GESTES, pas des normes. Ils savent que le poulet doit être à telle température, mais ils ne savent pas POURQUOI, ni ce que dit la norme. Et la formation ne faisait que réciter la norme…" },
        ],
      },
      question: "Comment votre public utilise-t-il concrètement les compétences visées dans son travail quotidien ? Théorie ou application pratique ?",
      consigne: "Distinguez les compétences théoriques des compétences pratiques de VOS apprenants. La formation doit se caler sur l'usage réel, pas sur le référentiel abstrait (section 💼 Profil professionnel).",
      revelation: {
        titre: "ANALYSE : FORMATION NORMATIVE VS RÉALITÉ GESTUELLE",
        texte: "La formation récitait des articles de norme quand les opérateurs avaient besoin de comprendre les GESTES corrects et leurs conséquences. Le consultant choisi était brillant sur la norme, déconnecté du terrain.",
        indice: "Former sur le « pourquoi réglementaire » sans former sur le « comment pratique » produit de la conformité sur papier, pas de la compétence réelle.",
      },
    },
    // ---------- 8 ----------
    {
      rubrique: R_CONN,
      scene: {
        lieu: "Interrogatoire — Salle 9",
        audio: "audio/thomas/thomas8.mp3",
        dialogue: [
          { qui: "Inspecteur", dit: "Thomas, quel était le niveau réel de vos opérateurs AVANT la formation ?" },
          { qui: "Thomas", dit: "Honnêtement ? Je ne sais pas. Je n'ai fait aucun test de positionnement. J'ai supposé qu'ils savaient les bases puisqu'ils travaillaient là depuis des années. Mais « travailler » ne veut pas dire « comprendre »." },
        ],
      },
      question: "Quel est le niveau de connaissance réel de votre public sur le sujet ? L'avez-vous mesuré ou supposé ?",
      consigne: "Distinguez le niveau RÉEL du niveau SUPPOSÉ de VOS apprenants. L'ancienneté n'est pas un indicateur fiable de compétence (section 📚 Niveau de connaissance).",
      revelation: {
        titre: "ANALYSE : ANCIENNETÉ ≠ COMPÉTENCE",
        texte: "Après l'audit, Thomas a découvert que des opérateurs présents depuis 10 ans ne savaient pas expliquer les 7 principes HACCP. Des automatismes corrects acquis par mimétisme, aucune compréhension — et la panique face à toute situation nouvelle.",
        indice: "L'expérience crée des automatismes, pas forcément de la compréhension. Testez le niveau, ne le présumez pas.",
      },
    },
    // ---------- 9 ----------
    {
      rubrique: R_CONN,
      scene: {
        lieu: "Interrogatoire — Salle 9",
        audio: "audio/thomas/thomas9.mp3",
        dialogue: [
          { qui: "Thomas", dit: "Et puis il y avait l'inverse : des jeunes qui sortaient de BTS et qui connaissaient la théorie HACCP par cœur… mais qui ne savaient pas appliquer un seul principe en situation réelle. Ils récitaient les normes mais paniquaient quand un frigo tombait en panne." },
        ],
      },
      question: "Votre public a-t-il des connaissances théoriques sans pratique, ou de la pratique sans théorie ? Où est le déséquilibre ?",
      consigne: "Identifiez le déséquilibre théorie/pratique de VOS apprenants. Les deux extrêmes (tout théorique, tout pratique) sont des impasses pédagogiques (section 📚 Niveau de connaissance).",
      revelation: {
        titre: "ANALYSE : DOUBLE PROFIL — THÉORICIENS SANS TERRAIN ET PRATICIENS SANS CADRE",
        texte: "Deux groupes opposés : des seniors qui savaient faire sans expliquer, des juniors qui savaient expliquer sans faire. La formation identique n'a comblé aucun des deux écarts — chacun s'est ennuyé sur la moitié qui ne le concernait pas.",
        indice: "Les besoins de formation sont inversés selon le profil. Un dispositif unique ne peut pas répondre à des lacunes opposées.",
      },
    },
    // ---------- 10 ----------
    {
      rubrique: R_CONN,
      scene: {
        lieu: "Interrogatoire — Salle 9",
        audio: "audio/thomas/thomas10.mp3",
        dialogue: [
          { qui: "Thomas", dit: "Le quiz final… je l'ai regardé après l'incident. 30 questions à choix multiples. Du vocabulaire technique. Des cas théoriques. Aucune mise en situation. Un opérateur pouvait avoir 20/30 en bachotant la veille. Et surtout… le quiz ne testait PAS ce qu'on avait besoin de savoir sur le terrain." },
        ],
      },
      question: "Comment évaluez-vous l'acquisition des compétences de votre public ? Vos évaluations mesurent-elles la compétence réelle ou la capacité à restituer ?",
      consigne: "Analysez vos méthodes d'évaluation : mesurent-elles ce que VOS apprenants SAVENT FAIRE ou ce qu'ils SAVENT RÉCITER ? (section 📚 Niveau de connaissance).",
      revelation: {
        titre: "ANALYSE : ÉVALUATION QUI NE MESURE PAS LA COMPÉTENCE",
        texte: "Le QCM mesurait la mémorisation, pas la compétence : on pouvait cocher la bonne case sans savoir réagir à une rupture de la chaîne du froid. L'évaluation aurait dû se faire en situation, en observant les gestes.",
        indice: "Une évaluation déconnectée du terrain produit des résultats mensongers — même sans falsification.",
      },
    },
    // ---------- 11 ----------
    {
      rubrique: R_CONN,
      scene: {
        lieu: "Interrogatoire — Salle 9",
        audio: "audio/thomas/thomas11.mp3",
        dialogue: [
          { qui: "Thomas", dit: "Et vous savez le pire ? Après la formation, personne n'a vérifié si les pratiques avaient changé. Aucun suivi. Aucune observation terrain. On a formé, évalué, classé le dossier. Et tout le monde est reparti travailler exactement comme avant." },
        ],
      },
      question: "Prévoyez-vous un suivi post-formation pour vérifier le transfert des acquis sur le terrain ?",
      consigne: "La formation sans suivi est un événement sans lendemain. Comment allez-vous vérifier que VOS apprenants appliquent réellement ce qu'ils ont appris ? (section 📚 Niveau de connaissance).",
      revelation: {
        titre: "ANALYSE : FORMATION SANS TRANSFERT = FORMATION INUTILE",
        texte: "Chez NutriSafe, on formait, on évaluait, on cochait la case — sans aucun suivi terrain. Trois mois après, 80 % du contenu était oublié et les habitudes d'avant avaient repris. Seul le registre papier avait changé.",
        indice: "Sans mécanisme de transfert et de suivi, la formation est un château de sable.",
      },
    },
    // ---------- 12 ----------
    {
      rubrique: R_MOTIV,
      scene: {
        lieu: "Interrogatoire — Salle 9",
        audio: "audio/thomas/thomas12.mp3",
        dialogue: [
          { qui: "Thomas", dit: "La formation HACCP est OBLIGATOIRE. Point. Personne ne choisit de la suivre. C'est la loi. Alors la motivation… vous imaginez bien que c'est pas la joie." },
        ],
      },
      question: "La formation est-elle choisie ou imposée ? Comment créer de la motivation dans un contexte de contrainte ?",
      consigne: "Même dans une formation obligatoire, des leviers de motivation existent. Identifiez-les pour VOS apprenants (section 🎯 Attentes et motivations).",
      revelation: {
        titre: "ANALYSE : OBLIGATION ≠ ABSENCE DE MOTIVATION POSSIBLE",
        texte: "« Obligatoire » ne signifie pas « impossible à rendre motivante ». Fierté du métier, protection juridique personnelle, sens des gestes quotidiens : Thomas disposait de trois leviers. Aucun n'a été activé.",
        indice: "Même une formation imposée peut devenir motivante si on en explicite le sens personnel.",
      },
    },
    // ---------- 13 ----------
    {
      rubrique: R_MOTIV,
      scene: {
        lieu: "Interrogatoire — Salle 9",
        audio: "audio/thomas/thomas13.mp3",
        dialogue: [
          { qui: "Thomas", dit: "Un opérateur m'a dit après la formation : « Thomas, si tu me montres EN QUOI ça change mon quotidien, je suis partant. Mais si c'est juste pour lire des normes pendant 3 heures, non merci. » Il avait tout résumé." },
        ],
      },
      question: "Votre public perçoit-il un bénéfice concret et immédiat de la formation dans son travail quotidien ?",
      consigne: "Le bénéfice perçu doit être CONCRET et IMMÉDIAT pour VOS apprenants. Pas « à long terme », pas « pour l'entreprise ». Pour EUX, MAINTENANT (section 🎯 Attentes et motivations).",
      revelation: {
        titre: "ANALYSE : BÉNÉFICE ABSTRAIT VS BÉNÉFICE TANGIBLE",
        texte: "Le formateur parlait « conformité réglementaire » à des opérateurs qui se demandaient : « Qu'est-ce que ça change pour MOI demain matin ? ». La réponse devait être formulée dans leur réalité : comprendre ses gestes, éviter le rappel de produit qui ferme l'usine.",
        indice: "Le bénéfice doit être formulé dans le langage et la réalité de l'apprenant.",
      },
    },
    // ---------- 14 ----------
    {
      rubrique: R_FREINS,
      scene: {
        lieu: "Interrogatoire — Salle 9",
        audio: "audio/thomas/thomas14.mp3",
        dialogue: [
          { qui: "", dit: "Thomas baisse la voix." },
          { qui: "Thomas", dit: "Le vrai problème, c'est la peur. Tout le monde avait peur. Les opérateurs avaient peur de rater l'évaluation. Les managers avaient peur de perdre la certification. Moi, j'avais peur de décevoir la direction. Et la direction avait peur de l'audit AFNOR. Tout le monde avait peur. Et quand tout le monde a peur, personne ne dit la vérité." },
        ],
      },
      question: "Quelles peurs ou pressions s'exercent sur votre public en lien avec la formation (évaluation, jugement, conséquences professionnelles) ?",
      consigne: "Identifiez les pressions qui pèsent sur VOS apprenants. La peur de l'évaluation, des conséquences, du jugement… Ces pressions déforment le comportement (section ⚠️ Freins et pain points).",
      revelation: {
        titre: "ANALYSE : LA PEUR EN CASCADE",
        texte: "La peur était systémique : sanction pour les opérateurs, certification pour les managers, direction pour Thomas. Alors tout le monde a triché — bachotage, notes arrondies, yeux fermés. La peur a produit de la conformité apparente, pas de la compétence.",
        indice: "Un système de formation fondé sur la peur produit du mensonge institutionnalisé, pas de l'apprentissage.",
      },
    },
    // ---------- 15 ----------
    {
      rubrique: R_FREINS,
      scene: {
        lieu: "Interrogatoire — Salle 9",
        audio: "audio/thomas/thomas15.mp3",
        dialogue: [
          { qui: "Thomas", dit: "Et le format… 3 demi-journées en salle, avec un consultant externe qui n'avait jamais mis les pieds dans un atelier agroalimentaire. Il parlait de « dangers biologiques » en termes scientifiques. Mes opérateurs, eux, parlent de « le poulet qui sent bizarre ». Ce n'est pas le même langage." },
        ],
      },
      question: "Le langage utilisé en formation est-il adapté au vocabulaire réel de votre public ?",
      consigne: "Vérifiez que le vocabulaire de votre formation correspond à celui de VOS apprenants. Le jargon technique peut être un mur invisible (section ⚠️ Freins et pain points).",
      revelation: {
        titre: "ANALYSE : LANGAGE EXPERT VS LANGAGE TERRAIN",
        texte: "Le formateur disait « points critiques de maîtrise CCP2 » ; les opérateurs entendaient « vérifier que le poulet est pas chaud ». Aucune traduction entre les deux mondes. Ils ont acquiescé poliment sans rien comprendre, et Thomas n'a pas osé intervenir.",
        indice: "Le jargon technique non traduit en langage terrain crée un mur invisible entre le formateur et l'apprenant.",
      },
    },
    // ---------- 16 ----------
    {
      rubrique: R_FREINS,
      scene: {
        lieu: "Interrogatoire — Salle 9",
        audio: "audio/thomas/thomas16.mp3",
        dialogue: [
          { qui: "", dit: "Thomas se prend la tête dans les mains." },
          { qui: "Thomas", dit: "Le 3 février, quand l'auditeur AFNOR m'a regardé droit dans les yeux et m'a dit : « Monsieur Lefèvre, comment expliquez-vous que 100 % de vos opérateurs soient certifiés alors que 40 % ne respectent pas les protocoles de base ? »… j'ai compris que tout s'écroulait. J'ai validé des résultats que je savais faux. Pourquoi ? Parce que si j'avais mis les vrais résultats, la certification aurait sauté. Et sans certification, pas de clients. Et sans clients… 220 emplois. J'ai choisi de mentir pour protéger l'usine." },
        ],
      },
      question: "Quelles conséquences (réelles ou perçues) aurait un échec de la formation pour votre public et pour l'organisation ?",
      consigne: "Identifiez les enjeux derrière la formation de VOS apprenants. Quand les conséquences d'un échec sont trop lourdes, le système préfère mentir plutôt qu'affronter la réalité (section ⚠️ Freins et pain points).",
      revelation: {
        titre: "DÉNOUEMENT : LE SYNDROME DU RESPONSABLE PIÉGÉ",
        texte: "Thomas n'est pas un fraudeur : c'est un responsable piégé, sommé d'obtenir 100 % de réussite avec un dispositif voué à l'échec. Il a maquillé les résultats parce que, dans son système, l'échec d'une formation est une faute à cacher — pas un problème pédagogique à résoudre.",
        indice: "Quand l'échec d'une formation est vécu comme une faute à cacher, le système produit du mensonge plutôt que des solutions.",
        finale: true,
      },
    },
  ],
  resolution: {
    mobile: {
      resume: "Pression systémique + formation inadaptée au public + culture de la conformité apparente.",
      texte: "Thomas a falsifié les résultats non par malhonnêteté mais parce que le système ne lui laissait aucune marge : dire la vérité menaçait 220 emplois.",
    },
    circonstances: [
      { titre: "Public invisible", texte: "Thomas ne connaissait pas les profils personnels de ses opérateurs (barrières linguistiques, rapport à l'école, contraintes de vie)." },
      { titre: "Format inadapté", texte: "3 demi-journées en salle (9h-12h) pour des travailleurs manuels en horaires décalés." },
      { titre: "Formateur déconnecté", texte: "Un consultant qualité expert en normes mais incapable de parler le langage terrain." },
      { titre: "Évaluation mensongère", texte: "Un QCM qui mesurait la mémorisation, pas la compétence réelle." },
      { titre: "Aucun suivi post-formation", texte: "Zéro vérification du transfert sur le terrain." },
      { titre: "Pression systémique", texte: "La certification conditionnait la survie économique de l'entreprise." },
    ],
    verdict: [
      "Thomas n'est pas un fraudeur.",
      "Thomas est un responsable qui a reçu une mission impossible : obtenir des résultats avec un dispositif voué à l'échec.",
      "La falsification n'est pas la cause, c'est le symptôme.",
      "La cause : un système qui valorise la conformité papier au détriment de la compétence réelle.",
    ],
    mission: {
      intro: "Vous avez reconstitué le profil complet de l'équipe de Thomas en 16 questions.",
      sousTitre: "Maintenant, faites le parallèle avec VOS apprenants :",
      etapes: [
        "Relisez votre fiche d'enquête complétée.",
        "Identifiez les risques que votre formation produise de la conformité apparente plutôt que de la compétence réelle.",
        "Rédigez un portrait narratif de VOS apprenants (5-8 lignes).",
      ],
    },
    questionEquipe: "Comment allez-vous vérifier que votre formation produit de la COMPÉTENCE RÉELLE et pas seulement de la CONFORMITÉ SUR PAPIER ?",
    questionEquipeNote: "Notez 2-3 décisions concrètes au dos de votre fiche.",
  },
};

// ============================================================
//  AFFAIRES 5 À 6 — à compléter (placeholders)
// ============================================================
const PLACEHOLDER = (id, numero, nom, role, accroche, portrait) => ({
  id, numero, nom, role, accroche, portrait,
  enPreparation: true,
  questions: [],
});

const HISTOIRES = [
  MARCEL,
  LEA,
  SOPHIE,
  THOMAS,
  PLACEHOLDER("amina", "Affaire n°05", "Amina Diallo", "Dossier à instruire",
    "Identité enregistrée. L'enquête reste à mener.", "portraits/Amina_Diallo.png"),
  PLACEHOLDER("karim", "Affaire n°06", "Karim Benali", "Dossier à instruire",
    "Identité enregistrée. L'enquête reste à mener.", "portraits/Karim_Benali.png"),
];
