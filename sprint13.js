// On instancie le graph dans le conteneur.
var sprint13 = creerGitGraph("graph-container-13");

// Branche MASTER
var master = creerBrancheMaster(sprint13);

var integration = master.branch("integration_systemteam_r21_1");
integration.commit("start");



// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_simplification_notifs");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f-LBPF");
var tache1 = creerBrancheDeTache(fonctionnalite2, "t_5824-stripes-lbpf");
var tache2 = creerBrancheDeTache(fonctionnalite2, "t_5739-lbpf-stripes-menu-gerer");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f-IARD");
var tache3 = creerBrancheDeTache(fonctionnalite3, "t_5911-iard-table-des-id-produits");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f-DSP2");
var tache4 = creerBrancheDeTache(fonctionnalite4, "t_auth_forte_moins_90_jours (5880)");
var anomalie1 = creerBrancheAnomalie(integration, "a_6464-photo-accueil");
var fonctionnalite5 = creerBrancheDeFonctionnalite("f_tu_chrome_headless");



// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r01_s02");


// Branche MERGE



// MERGES --------------------
fonctionnalite3.merge(tache3);
fonctionnalite2.merge(tache1);


// FUSION aprés DEMO
