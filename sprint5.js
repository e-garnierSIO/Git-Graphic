// On instancie le graph dans le conteneur.
var sprint5 = creerGitGraph("graph-container-5");

// Branche MASTER
var master = creerBrancheMaster(sprint5);

var integration0 = master.branch("integration_app_20_2");
integration0.commit("start");
var integration = integration0.branch("integration_systemteam_r20_4");
integration.commit("start");

// Branches FONCTIONNALITE et TACHES


// Branche SPRINT


// Branche MERGE


// MERGES --------------------


// FUSION aprés DEMO
