// On instancie le graph dans le conteneur.
var sprint10 = creerGitGraph("graph-container-10");

// Branche MASTER
var master = creerBrancheMaster(sprint10);

var integration = master.branch("integration_systemteam_R20_5");
integration.commit("start");



// Branches FONCTIONNALITE et TACHES
var anomalie1 = creerBrancheAnomalie(integration, "a_4520-ios-click-to-call");



// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r05_s02");


// Branche MERGE


// MERGES --------------------



// FUSION aprés DEMO
