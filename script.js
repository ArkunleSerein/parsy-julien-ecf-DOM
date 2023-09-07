//* Création de la fonction du tableau
document.addEventListener("DOMContentLoaded", function () {
    // On appel le boutton "modeButton" avec son ID html qui va définir le choix couleur ou note.
    const modeButton = document.getElementById("modeButton");
    // On appel le tableau de note avec son ID html.
    const noteTable = document.getElementById("noteTable");
    // On appel .note-input pour lui définir des fonctions par la suite.
    const noteInputs = document.querySelectorAll(".note-input");

    // On cache le tableau avant la sélection du mode
    let notationMode = "hidden"; 
    let isTableVisible = false;

    // Crée un tableau pour stocker les données des notes
    let noteData = []; 
    let colorData = Array.from({ length: noteInputs.length }, () => "green"); // On défini la couleur par défaut en vert pour les noteInputs

    // Cache le tableau au chargement initial
    noteTable.style.display = "none";

    //* On crée la fonction pour rendre visible le tableau après avoir choisi le mode et le prompt de choix.
    modeButton.addEventListener("click", function () {
        if (!isTableVisible) {
            // Afficher le tableau après le premier clic
            noteTable.style.display = "table"; 
            isTableVisible = true;
        }

        // On crée le prompt qui va afficher une PopUp avec le choix à effectuer.
        const choice = prompt("Choisissez le mode de notation : 'note' ou 'couleur'");
        if (choice === "note" || choice === "couleur") {
            activateTable(choice);
        } else {
            // Si aucun choix n'est rentré alors il y aura une Alerte "choix invalide"
            alert("Choix invalide");
        }
    });

    //* création de la fonction qui va ajouter le color-mode ou le supprimer.
    function activateTable(choice) {
        notationMode = choice;
        if (notationMode === "couleur") {
            noteTable.classList.add("color-mode"); // Ajoute le mode couleur
        } else {
            noteTable.classList.remove("color-mode"); // Enlève le mode couleur
        }      
        updateTableMode(); // mets à jour le tableau
    }

    //* Création de la fonction qui mets à jour le tableau selon le choix.
    function updateTableMode() {
        if (notationMode === "couleur") {
            applyColors();
        } else {
            applyNotes();
        }
    }

    //* Création de la fonction qui va définir les fonctions de base du mode couleur.
    function applyColors() {
        for (let i = 0; i < noteInputs.length; i++) {
            const input = noteInputs[i];
            input.style.backgroundColor = colorData[i] || "green";
            input.value = ""; // Efface la valeur de la note en mode couleur
        }
    }
    //* Création de la fonction qui va définir les fonctions de base du mode note.
    function applyNotes() {
        for (let i = 0; i < noteInputs.length; i++) {
            const input = noteInputs[i];
            input.value = noteData[i] || "";
            input.style.backgroundColor = ""; // Effacer la couleur en mode note
        }
    }

    //* Création de la boucle qui défini la couleur selon la valeur et le passage à la ligne automatique.
    noteInputs.forEach(function (input, index) {
        input.addEventListener("input", function () {
            const noteValue = parseFloat(input.value);
            // on associe la note à sa couleur.
            if (!isNaN(noteValue)) {
                if (noteValue === 1) {
                    colorData[index] = "red";
                } else if (noteValue === 2) {
                    colorData[index] = "orange";
                } else if (noteValue === 3) {
                    colorData[index] = "yellow";
                } else if (noteValue === 4) {
                    colorData[index] = "green";
                } else {
                    colorData[index] = "";
                }
                noteData[index] = noteValue;
                updateTableMode();
                // On fait passer au champ d'entrée suivant automatiquement
                const nextInput = noteInputs[index + 1];
                if (nextInput) {
                    nextInput.focus();
                } else {
                    // on reviens à l'index 0 quand on arrive à la fin du tableau.
                    noteInputs[0].focus();
                }
            } 
        });
    });
    updateTableMode();
});



