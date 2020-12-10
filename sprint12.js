// On instancie le graph dans le conteneur.
var sprint12 = creerGitGraph("graph-container-12");

// Branche MASTER
var master = creerBrancheMaster(sprint12);

var integration = master.branch("integration_systemteam_r21_1");
integration.commit("start");



// Branches FONCTIONNALITE et TACHES




// Branche SPRINT
//var brancheSprint = creerBrancheDeSprint("twenty_r01_s01");


// Branche MERGE


// MERGES --------------------



// FUSION aprés DEMO
