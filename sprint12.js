// On instancie le graph dans le conteneur.
var sprint12 = creerGitGraph("graph-container-12");

// Branche MASTER
var master = creerBrancheMaster(sprint12);

var integration = master.branch("integration_systemteam_r21_1");
integration.commit("start");



// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("5429_poc_logs_c+");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_multiprofil_avec_nouveau_localstorage");
var tache1 = creerBrancheDeTache(fonctionnalite2, "398-t_4497_integration_multiprofil_avec_nouveau_localstorage (= 4173)");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_5336_localstorage_tablette");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f_vulnerabilites-strandhogg");
var fonctionnalite5 = creerBrancheDeFonctionnalite("t-5256-enabler-tester-le-jeton-lbpf");


// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r01_s01 (20.1.0.205)");


// Branche MERGE



// MERGES --------------------
creerMerge(integration, fonctionnalite1);
fonctionnalite2.merge(tache1);
brancheSprint.merge(fonctionnalite2);
brancheSprint.merge(fonctionnalite3);
var brancheSprintSmartblette = creerBrancheDeMerge(brancheSprint,"twenty_r01_s01_smartblette (20.1.0.206)");


// FUSION aprés DEMO
creerMerge(integration, fonctionnalite2);
creerMerge(integration, fonctionnalite3);
integration.commit("V21.01.00.900 et 901"); // tag

