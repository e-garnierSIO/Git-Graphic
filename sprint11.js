// On instancie le graph dans le conteneur.
var sprint11 = creerGitGraph("graph-container-11");

// Branche MASTER
var master = creerBrancheMaster(sprint11);

// Branche d'integration (version 1)
var integration = master.branch("integration_systemteam_R20_5");
integration.commit("start");


// Branches (version 1)
var anomalie1 = creerBrancheAnomalie(integration, "a_4520-ios-click-to-call");
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_multiprofil_avec_nouveau_localstorage");
var tache1 = creerBrancheDeTache(fonctionnalite1, "398-t_4497_integration_multiprofil_avec_nouveau_localstorage");
var tache2 = creerBrancheDeTache(integration, "t-5512-inbenta-evolution-du-bouton-aide");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_5336_localstorage_tablette");
var fonctionnalite3 = creerBrancheDeFonctionnalite("5429_poc_logs_c+");



// Branche d'integration (version 2)
//var integration2 = creerBrancheDeMerge(integration, "integration_systemteam_R20_5 (v9xx et v9xx)");

// MERGES (version 2)--------------------

