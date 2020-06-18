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
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_evolution_notifications");
var tache2 = creerBrancheDeTache(fonctionnalite2, "2235_mise_a_jour_centre_notifications");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_inbenta");
var tache1 = creerBrancheDeTache(fonctionnalite3, "2805-integration-du-nouveau-sdk-inbenta");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f_refacto_centre_notif_moteur_sensi");
var tache3 = creerBrancheDeTache(fonctionnalite4, "275-3577-suppression-de-la-pop-in");
var tache5 = creerBrancheDeTache(fonctionnalite4, "276-3165-evolution-sensibilisation-relance-notification");


// Branche SPRINT
//var brancheSprint = creerBrancheDeSprint("twenty_r01_s04");

// Branche MERGE
fonctionnalite1.merge(tache4);
fonctionnalite4.merge(tache2);
fonctionnalite4.merge(fonctionnalite1);
fonctionnalite4.merge(tache3);
tache5.merge(tache6);
// MERGES --------------------


// FUSION aprés DEMO
