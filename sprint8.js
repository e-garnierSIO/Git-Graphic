// On instancie le graph dans le conteneur.
var sprint8 = creerGitGraph("graph-container-8");


// Branche MASTER
var master = creerBrancheMaster(sprint8);

var integration = master.branch("integration_systemteam_r20_4");
integration.commit("start");

// Branches FONCTIONNALITE et TACHES
var tache1 = creerBrancheDeTache(integration, "a_4674-iard-affichage-la-vignette-promotionnelle-pour-un-client-avec-une-assurance-hors-perimetrie");




// Branche SPRINT


// Branche MERGE


// MERGES --------------------



// FUSION aprés DEMO
