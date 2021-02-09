// On instancie le graph dans le conteneur.
var sprint14 = creerGitGraph("graph-container-14");

// Branche MASTER
var master = creerBrancheMaster(sprint14);

var integration = master.branch("integration_systemteam_r21_1");
integration.commit("start");

// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_simplification_notifs");
var ano6782 = creerBrancheAnomalie(fonctionnalite1, "a_6782 (Simplification Notifs)");
var ano6786 = creerBrancheAnomalie(fonctionnalite1, "a_6786 (Simplification Notifs)");
var ano5705 = creerBrancheAnomalie(integration, "a_5705 (TouchID)");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_tu_chrome_headless");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_LBPF");
var tache1 = creerBrancheDeTache(fonctionnalite3, "t_5850-lbpf-en-attente-de-signature");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f_DSP2");
var anomalie1 = creerBrancheAnomalie(fonctionnalite4, "a_6886_parcours_af_autre_device");
var tache2 = creerBrancheDeTache(fonctionnalite4, "t_6890-dsp2-integration-bloc-aem");

fonctionnalite4.merge(tache2);
fonctionnalite4.merge(anomalie1);
var anomalie2 = creerBrancheAnomalie(fonctionnalite4, "a_7108-reg-service-indisponible");

var fonctionnalite5 = creerBrancheDeFonctionnalite("f_c+Stripe");
var tache3 = creerBrancheDeTache(fonctionnalite5, "t_6613-certicode-plus-stripe");
var fonctionnalite6 = creerBrancheDeFonctionnalite("f_gestion_cookies");
var tache4 = creerBrancheDeTache(fonctionnalite6, "6385_gestion-cookies-mode-connecte");
var anomalie3 = creerBrancheAnomalie(integration, "a_6983-iard-vignette-principale");

var fonctionnalite7 = creerBrancheDeFonctionnalite("f_C+Amelioration-Enrolement");
var tache5 = creerBrancheDeTache(fonctionnalite6, "t_6917-certicode-plus-code-otp-sms");

// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r01_s03");


// MERGES --------------------
fonctionnalite3.merge(tache1);



// Merge branche sprint
brancheSprint.merge(fonctionnalite3);
brancheSprint.merge(fonctionnalite4);

// FUSION aprés DEMO
