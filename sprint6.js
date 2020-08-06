// On instancie le graph dans le conteneur.
var sprint6 = creerGitGraph("graph-container-6");

// Branche MASTER
var master = creerBrancheMaster(sprint6);

var integration0 = master.branch("integration_app_20_2");
integration0.commit("start");
var integration = integration0.branch("integration_systemteam_r20_4");
integration.commit("start");

// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_IARD");
var tache1 = creerBrancheDeTache(fonctionnalite1, "3359-iard-dashboard-vignette-promotionnelle");
var tache2 = creerBrancheDeTache(fonctionnalite1, "3363-iard-evolution-contacts-et-mentions");
var tache3 = creerBrancheDeTache(fonctionnalite1, "3760-iard-debranchements-vers-iframe-iard");



// Branche SPRINT

// Branche MERGE


// MERGES --------------------


// FUSION aprés DEMO

