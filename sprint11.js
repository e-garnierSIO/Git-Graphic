// On instancie le graph dans le conteneur.
var sprint11 = creerGitGraph("graph-container-11");

// Branche MASTER
var master = creerBrancheMaster(sprint11);

var integration = master.branch("integration_systemteam_R20_5");
integration.commit("start");



// Branches FONCTIONNALITE et TACHES
var anomalie1 = creerBrancheAnomalie(integration, "a_4520-ios-click-to-call");



// Branche SPRINT


// Branche MERGE


// MERGES --------------------



// FUSION aprés DEMO
