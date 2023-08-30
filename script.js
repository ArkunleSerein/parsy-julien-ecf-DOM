document.addEventListener("DOMContentLoaded", function () {
    const modeButton = document.getElementById("modeButton");
    const noteTable = document.getElementById("noteTable");
    const noteInputs = document.querySelectorAll(".note-input");

    let notationMode = "hidden"; // Le tableau est caché au début
    let isTableVisible = false;

    let noteData = []; // Tableau pour stocker les données des notes
    let colorData = []; // Tableau pour stocker les données des couleurs

    // Cacher le tableau au chargement initial
    noteTable.style.display = "none";

    modeButton.addEventListener("click", function () {
        if (!isTableVisible) {
            noteTable.style.display = "table"; // Afficher le tableau après le premier clic
            isTableVisible = true;
        }

        const choice = prompt("Choisissez le mode de notation : 'note' ou 'couleur'");
        if (choice === "note" || choice === "couleur") {
            activateTable(choice);
        } else {
            alert("Choix invalide");
        }
    });

    function activateTable(choice) {
        notationMode = choice;

        if (notationMode === "couleur") {
            noteTable.classList.add("color-mode");
        } else {
            noteTable.classList.remove("color-mode");
        }

        updateTableMode();
    }

    function updateTableMode() {
        if (notationMode === "couleur") {
            applyColors();
        } else {
            applyNotes();
        }
    }

    function applyColors() {
        for (let i = 0; i < noteInputs.length; i++) {
            const input = noteInputs[i];
            input.style.backgroundColor = colorData[i] || "";
            input.value = ""; // Effacer la valeur en mode couleur
        }
    }

    function applyNotes() {
        for (let i = 0; i < noteInputs.length; i++) {
            const input = noteInputs[i];
            input.value = noteData[i] || "";
            input.style.backgroundColor = ""; // Effacer la couleur en mode note
        }
    }

    noteInputs.forEach(function (input, index) {
        input.addEventListener("input", function () {
            const noteValue = parseFloat(input.value);

            if (!isNaN(noteValue)) {
                if (noteValue === 1) {
                    colorData[index] = "red";
                } else if (noteValue === 2) {
                    colorData[index] = "orange";
                } else if (noteValue === 3) {
                    colorData[index] = "yellow";
                } else if (noteValue === 4 || noteValue === 5) {
                    colorData[index] = "green";
                } else {
                    colorData[index] = "";
                }
            } else {
                colorData[index] = "";
            }

            noteData[index] = noteValue;
            updateTableMode();

            input.addEventListener("keydown", function (event) {
                if (event.keyCode === 13) { // Vérifier si la touche "Enter" a été enfoncée
                    event.preventDefault(); // Empêcher le comportement par défaut (passage à la ligne)
                    
                    // Passer au champ d'entrée suivant (ou ajouter une nouvelle ligne)
                    const nextInput = noteInputs[index + 1];
                    if (nextInput) {
                        nextInput.focus();
                    } else {
                        // Si le prochain champ n'existe pas, vous pouvez ajouter une nouvelle ligne ici
                    }
                }
            });
        });
    });

    updateTableMode();
});
