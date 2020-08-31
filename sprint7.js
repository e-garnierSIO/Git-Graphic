// On instancie le graph dans le conteneur.
var sprint7 = creerGitGraph("graph-container-7");


// Branche MASTER
var master = creerBrancheMaster(sprint7);

var integration0 = master.branch("integration_app_20_2");
integration0.commit("start");
var integration = integration0.branch("integration_systemteam_r20_4");
integration.commit("start");



// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_ibenta");
var tache1 = creerBrancheDeTache(fonctionnalite1, "4300-inbenta-mise-a-jour-url-prod");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_IARD");
var tache2 = creerBrancheDeTache(fonctionnalite2, "4329-iard-changement-url-environnement-pre-prod");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_smartblette");

// Branche SPRINT


// Branche MERGE


// MERGES --------------------


// FUSION aprés DEMO
