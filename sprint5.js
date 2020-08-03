// On instancie le graph dans le conteneur.
var sprint5 = creerGitGraph("graph-container-5");

// Branche MASTER
var master = creerBrancheMaster(sprint5);

var integration0 = master.branch("integration_app_20_2");
integration0.commit("start");
var integration = integration0.branch("integration_systemteam_r20_4");
integration.commit("start");

// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_integration_wkwebview");
var tache1 = creerBrancheDeTache(fonctionnalite1, "298-3969-integration_wkwebview");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_integration_sdk_5-6");
var tache2 = creerBrancheDeTache(fonctionnalite2, "3936-integration-sdk-5-6");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_IARD");
var tache3 = creerBrancheDeTache(fonctionnalite3, "3359-iard-dashboard-vignette-promotionnelle");
var tache4 = creerBrancheDeTache(fonctionnalite3, "3362-iard-evolution-du-menu-gerer");


// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r20-4_s01");

// Branche MERGE
var brancheMerge = creerBrancheDeMerge(brancheSprint,"merge_r20-4_s01");


// MERGES --------------------
fonctionnalite1.merge(tache1);
fonctionnalite2.merge(tache2);


// FUSION aprés DEMO
