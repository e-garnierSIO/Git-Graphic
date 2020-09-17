// On instancie le graph dans le conteneur.
var sprint8 = creerGitGraph("graph-container-8");


// Branche MASTER
var master = creerBrancheMaster(sprint8);

var integration = master.branch("integration_systemteam_r20_4");
integration.commit("start");

// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_4173_homogeneisation_elements_stockage");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_sensi_relance");





// Branche SPRINT


// Branche MERGE


// MERGES --------------------



// FUSION aprés DEMO
