// On instancie le graph dans le conteneur.
var sprint12 = creerGitGraph("graph-container-12");

// Branche MASTER
var master = creerBrancheMaster(sprint12);

var integration = master.branch("integration_systemteam_r21_1");
integration.commit("start");



// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("5429_poc_logs_c+");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_multiprofil_avec_nouveau_localstorage");
var tache1 = creerBrancheDeTache(fonctionnalite2, "398-t_4497_integration_multiprofil_avec_nouveau_localstorage");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_5336_localstorage_tablette");


// Branche SPRINT
//var brancheSprint = creerBrancheDeSprint("twenty_r01_s01");


// Branche MERGE


// MERGES --------------------
creerMerge(integration, fonctionnalite1);


// FUSION aprés DEMO
