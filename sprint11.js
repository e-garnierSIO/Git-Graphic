// On instancie le graph dans le conteneur.
var sprint11 = creerGitGraph("graph-container-11");

// Branche MASTER
var master = creerBrancheMaster(sprint11);

// Branche d'integration (version 1)
var integration = master.branch("integration_systemteam_R20_5");
integration.commit("start");


// Branches (version 1)
var anomalie1 = creerBrancheAnomalie(integration, "a_4520-ios-click-to-call");



// Branche d'integration (version 2)
//var integration2 = creerBrancheDeMerge(integration, "integration_systemteam_R20_5 (v9xx et v9xx)");

// MERGES (version 2)--------------------

