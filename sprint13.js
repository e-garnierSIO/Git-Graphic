// On instancie le graph dans le conteneur.
var sprint13 = creerGitGraph("graph-container-13");

// Branche MASTER
var master = creerBrancheMaster(sprint13);

var integration = master.branch("integration_systemteam_r21_1");
integration.commit("start");

// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_simplification_notifs");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_LBPF");
var tache1 = creerBrancheDeTache(fonctionnalite2, "t_5824-stripes-lbpf (t_5824_BIS)");
var tache2 = creerBrancheDeTache(fonctionnalite2, "t_5739-lbpf-stripes-menu-gerer (t_5739_BIS)");
var tache6 = creerBrancheDeTache(fonctionnalite2, "t_5859-lbpf-mes-demandes-en-cours");
var tache8 = creerBrancheDeTache(fonctionnalite2, "t_5850-lbpf-en-attente-de-signature");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_IARD");
var tache3 = creerBrancheDeTache(fonctionnalite3, "t_5911-iard-table-des-id-produits");
var tache7 = creerBrancheDeTache(fonctionnalite3, "t_5922-iard-integration-alignement");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f_DSP2");
var tache4 = creerBrancheDeTache(fonctionnalite4, "t_auth_forte_moins_90_jours (5880)");
var tache5 = creerBrancheDeTache(fonctionnalite4, "t_5898_auth_forte_plus_90_jours");
var anomalie1 = creerBrancheAnomalie(integration, "a_6464-photo-accueil");
var fonctionnalite5 = creerBrancheDeFonctionnalite("f_tu_chrome_headless");

// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r01_s02");


// MERGES --------------------
fonctionnalite3.merge(tache3);
fonctionnalite2.merge(tache1);
fonctionnalite2.merge(tache2);
tache5.merge(tache4);
tache6.merge(tache2);
fonctionnalite2.merge(tache6);
tache8.merge(tache2);
fonctionnalite4.merge(tache5);
fonctionnalite3.merge(tache7);

// Merge branche sprint
brancheSprint.merge(fonctionnalite3);
brancheSprint.merge(anomalie1);
brancheSprint.merge(fonctionnalite2);
brancheSprint.merge(fonctionnalite4);
brancheSprint.commit("V21.01.00.216"); // tag

// FUSION aprés DEMO
creerMerge(integration, fonctionnalite2);
creerMerge(integration, fonctionnalite3);
creerMerge(integration, anomalie1);
integration.commit("V21.01.00.906 et 907"); // tag
