// On instancie le graph dans le conteneur.
var sprint8 = creerGitGraph("graph-container-8");


// Branche MASTER
var master = creerBrancheMaster(sprint8);

var integration = master.branch("integration_systemteam_r20_4");
integration.commit("start");

// Branches FONCTIONNALITE et TACHES
var tache1 = creerBrancheDeTache(integration, "correction_connection_tablette_20_3");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_4719_outillage_sdkta");
var tache3 = creerBrancheDeTache(integration, "344-q4q-4702-certicode-crash-de-l-application-a-l-enrolement");
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_4173_homogeneisation_elements_stockage");
var tache2 = creerBrancheDeTache(integration, "a_4674-iard-affichage-la-vignette-promotionnelle-pour-un-client-avec-une-assurance-hors-perimetrie");






// Branche SPRINT


// Branche MERGE
creerMerge(integration, tache1);
creerMerge(integration, fonctionnalite2);
creerMerge(integration, tache3);


// MERGES --------------------



// FUSION aprés DEMO
