// On instancie le graph dans le conteneur.
var sprint7 = creerGitGraph("graph-container-7");


// Branche MASTER
var master = creerBrancheMaster(sprint7);

var integration0 = master.branch("integration_app_20_2");
integration0.commit("start");
var integration = integration0.branch("integration_systemteam_r20_4");
integration.commit("start");



// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_ibenta");
var tache1 = creerBrancheDeTache(fonctionnalite1, "4300-inbenta-mise-a-jour-url-prod");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_IARD");
var tache2 = creerBrancheDeTache(fonctionnalite2, "4329-iard-changement-url-environnement-pre-prod");
var tache3 = creerBrancheDeTache(fonctionnalite2, "3360-4169-iard-changement-libelles");
var tache4 = creerBrancheDeTache(fonctionnalite2, "4577-SB-IARD");
var tache7 = creerBrancheDeTache(fonctionnalite2, "a_4608-redirection-vignette-promotionnel-iard");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_regul_plugins_cordova");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f_sensi_relance");
var tache8 = creerBrancheDeTache(fonctionnalite4, "339-passage-j2-relance (4615)");
var tache5 = creerBrancheDeTache(integration, "4167-localstorage-integration-maintien-du-profil-avec-wk-webview");
var tache6 = creerBrancheDeTache(integration, "4457-pas-ouverture-de-la-popin-notification");
var tache9 = creerBrancheDeTache(integration, "a_4371 (fingerprint)");

// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r20-4_s03");

// Branche MERGE


// MERGES --------------------
//fonctionnalite1.merge(tache1);
fonctionnalite2.merge(tache2);
fonctionnalite2.merge(tache3);
fonctionnalite2.merge(tache4);
fonctionnalite2.merge(tache7);
fonctionnalite4.merge(tache8);
brancheSprint.merge(tache6);
brancheSprint.merge(fonctionnalite2);


// FUSION aprés DEMO
creerMerge(integration, fonctionnalite3);
