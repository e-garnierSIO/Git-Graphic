// On instancie le graph dans le conteneur.
var sprint11 = creerGitGraph("graph-container-11");

// Branche MASTER
var master = creerBrancheMaster(sprint11);

// Branche d'integration (version 1)
var integration = master.branch("integration_systemteam_R20_5 (v914, v915 et v916)");
integration.commit("start");


// Branches
var anomalie1 = creerBrancheAnomalie(integration, "a_4520-ios-click-to-call (+ 5423, 5425, 5543)");
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_multiprofil_avec_nouveau_localstorage");
var tache1 = creerBrancheDeTache(fonctionnalite1, "398-t_4497_integration_multiprofil_avec_nouveau_localstorage");
var tache2 = creerBrancheDeTache(integration, "t-5512-inbenta-evolution-du-bouton-aide (= 5517)");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_5336_localstorage_tablette");
var fonctionnalite3 = creerBrancheDeFonctionnalite("5429_poc_logs_c+");
var anomalie2 = creerBrancheAnomalie(integration, "a_5526-tag-fingerprint");
var anomalie3 = creerBrancheAnomalie(integration, "a_5601-loader-infini-a-la-connexion");


// MERGES (version 1)
creerMerge(integration, anomalie1);
creerMerge(integration, tache2);


// Branche d'integration (version 2)
var integration2 = creerBrancheDeMerge(integration, "integration_systemteam_R20_5 (v917 et v918)");

// MERGES (version 2)--------------------
creerMerge(integration2, anomalie3);


// Branche d'integration (version 3)
var integration3 = creerBrancheDeMerge(integration2, "integration_systemteam_R20_5 (v9xx et v9xx)");

// MERGES (version 3)--------------------


