// On instancie le graph dans le conteneur.
var sprint7 = creerGitGraph("graph-container-7");


// Branche MASTER
var master = creerBrancheMaster(sprint7);

var integration0 = master.branch("integration_app_20_2");
integration0.commit("start");
var integration = integration0.branch("integration_systemteam_r20_4");
integration.commit("start");


// Branche de mise a jour
var brancheMAJ = creerBrancheDeMerge(integration0,"merge_20_3_vers_20_4");
brancheMAJ.merge(integration);
integration.merge(brancheMAJ);


// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_IARD");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_smartblette");

// Branche SPRINT


// Branche MERGE


// MERGES --------------------


// FUSION aprés DEMO
