// On instancie le graph dans le conteneur.
var sprint9 = creerGitGraph("graph-container-9");

// Branche MASTER
var master = creerBrancheMaster(sprint9);

var integration = master.branch("integration_systemteam_R20_5");
integration.commit("start");



// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_4953_IARD_PDF_iFrame");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_vulnerabilites-strandhogg");
var tache1 = creerBrancheDeTache(fonctionnalite2, "4555-vulnerabilites-strandhogg");
var tache2 = creerBrancheDeTache(integration, "a_4511-probleme-au-clic-sur-le-bouton-annuler");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_wkwebview");
var tache3 = creerBrancheDeTache(fonctionnalite3, "5007-integration-wkwebview");


// Branche SPRINT


// Branche MERGE


// MERGES --------------------
fonctionnalite2.merge(tache1);
creerMerge(integration, tache2);

// FUSION aprés DEMO
