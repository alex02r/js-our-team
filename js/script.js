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
    return card;
}
//funzione per scrivere nle DOM
function printValori(valore, elemento, contatore) {
    const body = document.createElement('div');
    body.classList.add('card-body');

    switch (contatore) {
        case "1":
            //dobbiamo inserire il titolo
            let title = document.createElement('h5');
            title.classList.add('card-title');
            title.innerText;
            body.appendChild(title);
            break;
        case "2":
            //dobbiamo inserire il sottotitolo
            let subtitle = document.createElement('p');
            title.classList.add('card-text');
            title.innerText;
            body.appendChild(subtitle);
            break;
        case "3":
            //dobbimao inserire l'immagine
            let img = `<img src="./img/${valore}" class="card-img-top" src="dipendente">`;
            elemento.innerHTML= img;
            break;
    
        default:
            break;
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
        console.log(dipendenti[i][key]);
        let val = dipendenti[i][key];
        printValori(val,col,count);
        count++;
    }
}