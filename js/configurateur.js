
debugger;

const optionsTissu = [
    { couleur: 'Jaune', code: '#e2d047', image: './images/option-1-jaune.png', price: 12.30 },
    { couleur: 'Orange', code: '#f1722f', image: './images/option-1-orange.png', price: 12.00 },
    { couleur: 'Violet', code: '#bd3ad8', image: './images/option-1-violet.png', price: 12.10 }
];

const optionsPoche = [
    { couleur: 'Bleu', code: '#11119e', image: './images/option-2-bleu.png', price: 8.30 },
    { couleur: 'Fuchsia', code: '#991157', image: './images/option-2-fuchsia.png', price: 8.50 },
    { couleur: 'Rouge', code: '#d31431', image: './images/option-2-rouge.png', price: 8.10 },
    { couleur: 'vert', code: '#a1cc16', image: './images/option-2-vert.png', price: 8.75 }
];


const couleurText = [
    { couleur: 'Blanc', code: '#FFFFFF' },
    { couleur: 'Noir', code: '#000000' },
    { couleur: 'Bleu', code: '#11119e' },
    { couleur: 'Fuchsia', code: '#991157' },
    { couleur: 'Rouge', code: '#d31431' },
    { couleur: 'vert', code: '#a1cc16' },
    { couleur: 'Jaune', code: '#e2d047' },
    { couleur: 'Orange', code: '#f1722f' }
];
// Sélectionnez l'élément d'entrée de texte et la div de texte personnalisé
let inputText = document.querySelector("#customText");
let textePersonnalise = document.querySelector(".textePerso");

// Ajoutez un gestionnaire d'événements pour surveiller les changements dans l'entrée de texte
inputText.addEventListener("input", (event) => {
    // Récupérez la valeur actuelle de l'entrée de texte
    let texteSaisi = event.target.value;
    prixcolor= prixLettre*texteSaisi.length
    // Mettez à jour le contenu de la div de texte personnalisé avec la valeur saisie
    textePersonnalise.textContent = texteSaisi;
    updateTotal()
});

let selectedTissu = 'Violet';
let selectedPoche = 'Rouge';
let selectedTextColor = 'Noir';
let textOption = true;
let prixcolor=0

const prixLettre = 1.80;

const colorRounds1 = document.querySelectorAll('.ColorRound1');
const colorRounds2 = document.querySelectorAll('.ColorRound2');
const colorRounds3 = document.querySelectorAll('.ColorRound3');
let displayPoche = document.querySelector('#displayPoche');
let displayTissu = document.querySelector('#displayTissu');
let imageT = document.querySelector("#optionTissuImage");
let imageP = document.querySelector("#optionPocheImage");
let prix1 = 2
let prix2 = 2
let prix3 = 0
function updateTotal() {
    // Vérifiez que prix1 et prix2 sont dans la plage d'indices valide
    if (prix1 >= 0 && prix1 < optionsTissu.length && prix2 >= 0 && prix2 < optionsPoche.length) {
        let couleurTissuSelectionnee = optionsTissu[prix1].couleur;
        let couleurPocheSelectionnee = optionsPoche[prix2].couleur;
        let tissuSelectionne = optionsTissu.find((option) => option.couleur === couleurTissuSelectionnee);
        let pocheSelectionnee = optionsPoche.find((option) => option.couleur === couleurPocheSelectionnee);

        if (tissuSelectionne && pocheSelectionnee) {
            let tissuPrix = tissuSelectionne.price;
            let pochePrix = pocheSelectionnee.price;
            
            // Calculer le total
            let total = tissuPrix + pochePrix + prixcolor;

            const totalElement = document.querySelector(".price");
            totalElement.textContent = total.toFixed(2) + " €";
        } else {
            console.log("Élément non trouvé dans l'un des tableaux.");
            
            
        }
    } else {
        console.log("Indices hors de la plage valide.");
    }
}


colorRounds1.forEach(colorRound => {
    colorRound.addEventListener('click', (event) => {
        colorRounds1.forEach(round => round.classList.remove('selectedColor'));
        event.target.classList.add('selectedColor');
        prix1=parseFloat(event.target.dataset.prix)
        displayTissu.textContent = optionsTissu[prix1].couleur
        imageT.src = optionsTissu[prix1].image;
        updateTotal();
    });
});

colorRounds2.forEach(colorRound => {
    colorRound.addEventListener('click', (event) => {
        colorRounds2.forEach(round => round.classList.remove('selectedColor'));
        event.target.classList.add('selectedColor');
        prix2=parseFloat(event.target.dataset.prix)
        prix2=prix2-3
        imageP.src = optionsPoche[prix2].image;
        displayPoche.textContent = optionsPoche[prix2].couleur
        updateTotal();

    });
});

colorRounds3.forEach(colorRound => {
    colorRound.addEventListener('click', (event) => {
        colorRounds3.forEach(round => round.classList.remove('selectedColor'));
        event.target.classList.add('selectedColor');
        prix3=parseFloat(event.target.dataset.color)
        textePersonnalise.style.color = couleurText[prix3].code
        
        updateTotal()
    });
});

window.addEventListener("load", () => {
console.log("everything's ready !");

});
let inputtext = document.querySelector("#UseText2");// BOUTON NON
let inputtextoui = document.querySelector("#UseText1");//BOUTON OUI
let textperso = document.querySelector(".textePerso");
let placeholder = document.querySelector("#customText");
let coloroption = document.querySelector("#textColorOptions")

    inputtext.addEventListener("click", () =>{
        if (placeholder.style.display === "") {
            placeholder.style.display = "none";
            coloroption.style.display = "none"
            textperso.style.display="none";
            prixcolor=0
            updateTotal()

          }
    });
    inputtextoui.addEventListener("click", () =>{
        if (placeholder.style.display === "none") {
            placeholder.style.display = "";
            coloroption.style.display = ""
            textperso.style.display="";
            updateTotal()
          }
    });
    
