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
var fonctionnalite4 = creerBrancheDeFonctionnalite("f_outillage_plugin_push");
var tache8 = creerBrancheDeTache(integration, "a_4511-certicode-plus-template-probleme-au-clic-sur-le-bouton-annuler-sur-android-et-ios (+ 4871 + 4524)");
var tache10 = creerBrancheDeTache(integration, "4856-affichage-ecran-blanc");
var tache11 = creerBrancheDeTache(integration, "4816-ios-pas-d-affichage-des-relances");
var tache12 = creerBrancheDeTache(integration, "a_4612 ([virement] bouton modifier");
var tache9 = creerBrancheDeTache(integration, "356-loader-infini-suite-a-la-reception-de-certaines-notification-lbp (4708)");
var tache13 = creerBrancheDeTache(integration, "a_4897 (non reception des notifs)");
var tache14 = creerBrancheDeTache(integration, "a_4751_4925 (ouverture des notifs apres le CVS)");
var tache15 = creerBrancheDeTache(integration, "4948-maintient-de-profil");
var tache16 = creerBrancheDeTache(integration, "362-diminution-des-appels-notifications-distantes");



// MERGES ---------------------
creerMerge(integration, tache1);
creerMerge(integration, fonctionnalite2);
creerMerge(integration, tache3);
creerMerge(integration, tache4);
creerMerge(integration, tache2);
creerMerge(integration, fonctionnalite3);

// Branche d'integration (version 2)
var integration2 = creerBrancheDeMerge(integration, "integration_systemteam_r20_4 (v14, 15 et 16)");

// MERGES (version 2)--------------------
creerMerge(integration2, fonctionnalite4);
creerMerge(integration2, tache7);
creerMerge(integration2, tache5);

// Branche d'integration (version 3)
var integration3 = creerBrancheDeMerge(integration2, "integration_systemteam_r20_4 (v17 et 18)");

// MERGES (version 3)--------------------
creerMerge(integration3, tache10);
creerMerge(integration3, tache8);
creerMerge(integration3, tache11);

// Branche d'integration (version 4)
var integration4 = creerBrancheDeMerge(integration3, "integration_systemteam_r20_4 (v19 et v20)");

// MERGES (version 4)--------------------
creerMerge(integration4, tache9);

// Branche d'integration (version 20.5)
var integration5 = creerBrancheDeMerge(integration4, "integration_systemteam_r20_4 (?)");

// MERGES (version 20.5)--------------------
creerMerge(integration5, tache15);
