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
var tache6 = creerBrancheDeTache(fonctionnalite2, "t_5859-lbpf-mes-demandes-en-cours");
var tache8 = creerBrancheDeTache(fonctionnalite2, "t_5850-lbpf-en-attente-de-signature");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f-IARD");
var tache3 = creerBrancheDeTache(fonctionnalite3, "t_5911-iard-table-des-id-produits");
var tache7 = creerBrancheDeTache(fonctionnalite3, "t_5922-iard-integration-alignement");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f-DSP2");
var tache4 = creerBrancheDeTache(fonctionnalite4, "t_auth_forte_moins_90_jours (5880)");
var tache5 = creerBrancheDeTache(fonctionnalite4, "t_5898_auth_forte_plus_90_jours");
var anomalie1 = creerBrancheAnomalie(integration, "a_6464-photo-accueil");
var fonctionnalite5 = creerBrancheDeFonctionnalite("f_tu_chrome_headless");






// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r01_s02");


// Branche MERGE



// MERGES --------------------
fonctionnalite3.merge(tache3);
fonctionnalite2.merge(tache1);
tache5.merge(tache4);
tache6.merge(tache2);
brancheSprint.merge(fonctionnalite3);
tache8.merge(tache2);


// FUSION aprés DEMO
