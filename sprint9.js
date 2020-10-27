// On instancie le graph dans le conteneur.
var sprint9 = creerGitGraph("graph-container-9");

// Branche MASTER
var master = creerBrancheMaster(sprint9);

var integration = master.branch("integration_systemteam_R20_5");
integration.commit("start");



// Branches FONCTIONNALITE et TACHES
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_vulnerabilites-strandhogg");
var tache1 = creerBrancheDeTache(fonctionnalite2, "4555-vulnerabilites-strandhogg");
var tache2 = creerBrancheDeTache(integration, "a_4511-probleme-au-clic-sur-le-bouton-annuler");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_wkwebview");
var tache3 = creerBrancheDeTache(fonctionnalite3, "5007-integration-wkwebview");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f_4173_homogeneisation_elements_stockage");
var fonctionnalite5 = creerBrancheDeFonctionnalite("f_4866_migration_cordova9");
var fonctionnalite6 = creerBrancheDeFonctionnalite("f_IARD");
var tache6 = creerBrancheDeTache(fonctionnalite6, "poc_4953-iard-pdf-iFrame");
var tache4 = creerBrancheDeTache(fonctionnalite6,"5089-IARD-changement-du-service-bancaire");
var fonctionnalite7 = creerBrancheDeFonctionnalite("f_evolution_notifications");
var tache5 = creerBrancheDeTache(fonctionnalite7, "5081-notification-app-en-time-out");
var tache7 = creerBrancheDeTache(integration, "a_4520-ios-click-to-call");
var tache8 = creerBrancheDeTache(integration, "5179-ios-acces-comptes-autre-personne");
var tache9 = creerBrancheDeTache(integration, "a_5035_refacto");


// Branche SPRINT


// Branche MERGE


// MERGES --------------------
fonctionnalite2.merge(tache1);
creerMerge(integration, tache2);
fonctionnalite3.merge(tache3);
creerMerge(integration, fonctionnalite3);
integration.commit("V20.05.00.900 à 903"); // tag
fonctionnalite6.merge(tache6);
creerMerge(integration, fonctionnalite5);
fonctionnalite6.merge(tache4);
fonctionnalite7.merge(tache5);
fonctionnalite7.merge(tache9);

// FUSION aprés DEMO
