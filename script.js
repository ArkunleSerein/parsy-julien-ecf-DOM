document.addEventListener("DOMContentLoaded", function () {
    const modeButton = document.getElementById("modeButton");
    const noteTable = document.getElementById("noteTable");
    const noteInputs = document.querySelectorAll(".note-input");

    let notationMode = "hidden"; // Le tableau est caché au début
    let isTableVisible = false;

    let noteData = []; // Tableau pour stocker les données des notes
    let colorData = Array.from({ length: noteInputs.length }, () => "green"); // 

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
            input.style.backgroundColor = colorData[i] || "green";
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

                noteData[index] = noteValue;
                updateTableMode();

                // Passer au champ d'entrée suivant 
                const nextInput = noteInputs[index + 1];
                if (nextInput) {
                    nextInput.focus();
                } else {
                    noteInputs[0].focus();
                }


            } else {
                colorData[index] = "";
            }
        });
    });

    updateTableMode();

    noteInputs.forEach((input, index) => {
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";
        deleteButton.addEventListener("click", function () {
            input.remove();
            noteData.splice(index, 1);
            colorData.splice(index, 1);
            updateTableMode();
        });

        input.parentNode.appendChild(deleteButton);
        deleteButton.style.borderRadius = "25px";
        deleteButton.style.padding = "5px";
    });
});



