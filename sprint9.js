// On instancie le graph dans le conteneur.
var sprint9 = creerGitGraph("graph-container-9");

// Branche MASTER
var master = creerBrancheMaster(sprint9);

var integration = master.branch("integration_systemteam_R20_5");
integration.commit("start");



// Branches FONCTIONNALITE et TACHES
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_vulnerabilites-strandhogg");
var tache1 = creerBrancheDeTache(fonctionnalite2, "4555-vulnerabilites-strandhogg");
var anomalie1 = creerBrancheAnomalie(integration, "a_4511-probleme-au-clic-sur-le-bouton-annuler");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_wkwebview");
var tache3 = creerBrancheDeTache(fonctionnalite3, "5007-integration-wkwebview");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f_4173_homogeneisation_elements_stockage");
var fonctionnalite5 = creerBrancheDeFonctionnalite("f_4866_migration_cordova9");
var fonctionnalite6 = creerBrancheDeFonctionnalite("f_IARD");
var tache6 = creerBrancheDeTache(fonctionnalite6, "poc_4953-iard-pdf-iFrame");
var tache4 = creerBrancheDeTache(fonctionnalite6,"5089-IARD-changement-du-service-bancaire");
var tache7 = creerBrancheDeTache(fonctionnalite6,"5088_iard");
var fonctionnalite7 = creerBrancheDeFonctionnalite("f_evolution_notifications");
var tache5 = creerBrancheDeTache(fonctionnalite7, "5081-notification-app-en-time-out");
var anomalie2 = creerBrancheAnomalie(integration, "a_4520-ios-click-to-call");
var anomalie3 = creerBrancheAnomalie(integration, "5179-ios-acces-comptes-autre-personne");
var anomalie4 = creerBrancheAnomalie(integration, "a_5035_refacto");
var anomalie5 = creerBrancheAnomalie(integration, "5157-erreur-500-au-tap-se-connecter");



// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r05_s01");


// Branche MERGE


// MERGES --------------------
fonctionnalite2.merge(tache1);
creerMerge(integration, anomalie1);
fonctionnalite3.merge(tache3);
creerMerge(integration, fonctionnalite3);
integration.commit("V20.05.00.900 à 903"); // tag
creerMerge(integration, fonctionnalite5);
fonctionnalite6.merge(tache4);
fonctionnalite7.merge(tache5);
fonctionnalite7.merge(anomalie4);
creerMerge(tache7, tache6);
fonctionnalite6.merge(tache7);
brancheSprint.merge(anomalie2);
brancheSprint.merge(fonctionnalite6);
brancheSprint.merge(fonctionnalite7);


// FUSION aprés DEMO
