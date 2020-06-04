// On instancie le graph dans le conteneur.
var sprint4 = creerGitGraph("graph-container-4");

// Branche MASTER
var master = creerBrancheMaster(sprint4);

//provisoir (integration_app_20_2 issue d'integration_app_20)
var integration0 = master.branch("integration_app_20");
integration0.commit("start");
var integration = integration0.branch("integration_app_20_2");
integration.commit("start");

// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_refonte_moteur_sensibilisation_relance");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_evolution_notifications");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_inbenta");

// Branche SPRINT
//var brancheSprint = creerBrancheDeSprint("twenty_r01_s04");

// Branche MERGE

// MERGES --------------------


// FUSION aprés DEMO