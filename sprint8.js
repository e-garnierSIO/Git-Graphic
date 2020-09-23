// On instancie le graph dans le conteneur.
var sprint8 = creerGitGraph("graph-container-8");


// Branche MASTER
var master = creerBrancheMaster(sprint8);

var integration = master.branch("integration_systemteam_r20_4 (v11 et 12 et 13(IOS))");
integration.commit("start");

// Branches FONCTIONNALITE et TACHES
var tache1 = creerBrancheDeTache(integration, "correction_connection_tablette_20_3 (4522)");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_4719_outillage_sdkta");
var tache3 = creerBrancheDeTache(integration, "344-q4q-4702-certicode-crash-de-l-application-a-l-enrolement");
var tache4 = creerBrancheDeTache(integration, "a_4748-mode-invite-profil-sauvegarde-a-tord-en-mode-invite");
var tache2 = creerBrancheDeTache(integration, "a_4674-iard-affichage-la-vignette-promotionnelle-pour-un-client-avec-une-assurance-hors-perimetrie");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_sensi_relance (4615)");
var tache5 = creerBrancheDeTache(integration, "a_4647_page_blanche");
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_4173_homogeneisation_elements_stockage");
var tache6 = creerBrancheDeTache(integration, "4700-enabler-tester-la-solution-de-maintient-de-profil-pour-la-wkwebview");
var tache7 = creerBrancheDeTache(integration, "a_4755-personnaliser-accueil-apparition-de-la-vignette-assurance-iard");




// Branche MERGE
creerMerge(integration, tache1);
creerMerge(integration, fonctionnalite2);
creerMerge(integration, tache3);
creerMerge(integration, tache4);
creerMerge(integration, tache2);
creerMerge(integration, fonctionnalite3);

// Branche 
var integration2 = creerBrancheDeMerge(integration, "integration_systemteam_r20_4 (v?)");


// MERGES --------------------



// FUSION aprés DEMO
