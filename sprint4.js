// On instancie le graph dans le conteneur.
var sprint4 = creerGitGraph("graph-container-4");

// Branche MASTER
var master = creerBrancheMaster(sprint4);

var integration = master.branch("integration_app_20_2");
integration.commit("start");

// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_refonte_moteur_sensibilisation_relance");
var tache4 = creerBrancheDeTache(fonctionnalite1, "a_3560-Affichage-picto-sensi-verrouillage-telephone");
var tache6 = creerBrancheDeTache(fonctionnalite1, " 257-q4q-3165-evol-notification-app-evolution-de-la-pop-in-de-sensibilisation-et-relance-actuelle");
var tache8 = creerBrancheDeTache(fonctionnalite1, "a_2549_remplacer_pop-in_notification_apres_enrolement_certicode_plus");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_evolution_notifications");
var tache2 = creerBrancheDeTache(fonctionnalite2, "2235_mise_a_jour_centre_notifications");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_inbenta");
var tache1 = creerBrancheDeTache(fonctionnalite3, "2805-integration-du-nouveau-sdk-inbenta");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f_refacto_centre_notif_moteur_sensi");
var tache3 = creerBrancheDeTache(fonctionnalite4, "275-3577-suppression-de-la-pop-in");
var tache5 = creerBrancheDeTache(fonctionnalite4, "276-3165-evolution-sensibilisation-relance-notification");
var fonctionnalite5 = creerBrancheDeFonctionnalite("f_cgu");
var tache7 = creerBrancheDeTache(fonctionnalite5, "2214-uniformisation-cgu-pdf-unique");
var fonctionnalite6 = creerBrancheDeFonctionnalite("f_integration_code_media_transmis_a_q44");

// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r01_s04");

// Branche MERGE
var brancheMerge = creerBrancheDeMerge(brancheSprint,"merge_r01_S04");

// MERGES --------------------
fonctionnalite1.merge(tache4);
fonctionnalite3.merge(tache1);
fonctionnalite4.merge(tache2);
fonctionnalite4.merge(tache3);
fonctionnalite4.merge(tache5);
fonctionnalite4.merge(fonctionnalite1);
tache5.merge(tache6);
brancheMerge.merge(fonctionnalite3);
brancheMerge.merge(fonctionnalite4);
brancheMerge.merge(fonctionnalite5);
brancheSprint.merge(brancheMerge);

// FUSION aprés DEMO
creerMerge(integration, fonctionnalite3);
creerMerge(integration, fonctionnalite4);
