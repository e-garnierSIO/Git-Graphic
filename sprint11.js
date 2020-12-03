// On instancie le graph dans le conteneur.
var sprint11 = creerGitGraph("graph-container-11");

// Branche MASTER
var master = creerBrancheMaster(sprint11);

// Branche d'integration (version 1)
var integration = master.branch("integration_systemteam_R20_5");
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
var anomalie4 = creerBrancheAnomalie(integration, "a_5683-ios-carte-opposition-fraude");
var tache3 = creerBrancheDeTache(integration, "t-5256-enabler-tester-le-jeton-lbpf");
var tache4 = creerBrancheDeTache(integration, "4497_5336");


// MERGES
creerMerge(integration, anomalie1);
creerMerge(integration, tache2);
integration.commit("V20.05.00.914, 915 et 916"); // tag
creerMerge(integration, anomalie3);
integration.commit("V20.05.00.917 et 918"); // tag
creerMerge(integration, anomalie4);
tache4.merge(tache1);
tache4.merge(fonctionnalite2);




