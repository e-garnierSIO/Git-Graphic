// On instancie le graph dans le conteneur.
var sprint13 = creerGitGraph("graph-container-13");

// Branche MASTER
var master = creerBrancheMaster(sprint13);

var integration = master.branch("integration_systemteam_r21_1");
integration.commit("start");



// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_simplification_notifs");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f-LBPF");
var tache1 = creerBrancheDeTache(fonctionnalite3, "t_5824-stripes-lbpf");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f-IARD");
var tache2 = creerBrancheDeTache(fonctionnalite3, "t_5911-iard-table-des-id-produits");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f-DSP2");
var anomalie1 = creerBrancheAnomalie(integration, "a_6464-photo-accueil");



// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r01_s02");


// Branche MERGE



// MERGES --------------------



// FUSION aprés DEMO
