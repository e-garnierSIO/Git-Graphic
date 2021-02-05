// On instancie le graph dans le conteneur.
var sprint14 = creerGitGraph("graph-container-14");

// Branche MASTER
var master = creerBrancheMaster(sprint14);

var integration = master.branch("integration_systemteam_r21_1");
integration.commit("start");

// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_simplification_notifs");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_tu_chrome_headless");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_LBPF");
var tache1 = creerBrancheDeTache(fonctionnalite3, "t_5850-lbpf-en-attente-de-signature");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f_DSP2");
var anomalie1 = creerBrancheAnomalie(fonctionnalite4, "a_68866_parcours_af_autre_device");
var tache2 = creerBrancheDeTache(fonctionnalite4, "t_6890-dsp2-integration-bloc-aem");
var fonctionnalite5 = creerBrancheDeFonctionnalite("f_c+Stripe");
var tache3 = creerBrancheDeTache(fonctionnalite5, "t_6613-certicode-plus-stripe");

// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r01_s03");


// MERGES --------------------
fonctionnalite3.merge(tache1);


// Merge branche sprint
brancheSprint.merge(fonctionnalite3);

// FUSION aprés DEMO
