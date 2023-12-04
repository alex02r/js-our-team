//funzione che crea una lista iin html
function crateCol() {
    const row = document.getElementById('row');
    //creazione colonna
    let col = document.createElement('div');
    col.classList.add('col-4');
    //creazione di card
    let card = document.createElement('div');
    card.classList.add('card');

    col.appendChild(card);
    row.appendChild(col);
    return col;
}
//funzione per scrivere nle DOM
function printValori(valore, elemento, contatore) {
    
    //creazione dell' immagine
    if(contatore == 3){

    }
}

//MILESTONE 0
let dipendenti = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
];
//MILESTONE 1 :
for (let i = 0; i < dipendenti.length; i++) {
    let col = crateCol();
    let count = 1
    for (let key in dipendenti[i]) {
        count++;
        console.log(dipendenti[i][key]);
        let val = dipendenti[i][key];
        printValori(val,col,count);
    }
}