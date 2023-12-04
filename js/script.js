//funzione che crea una lista iin html
function crateCol() {
    const row = document.getElementById('row-card');
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
        case 1:
            //dobbiamo inserire il titolo
            let title = document.createElement('h5');
            title.classList.add('card-title');
            title.innerText = valore;
            body.appendChild(title);

            break;
        case 2:
            //dobbiamo inserire il sottotitolo
            let subtitle = document.createElement('p');
            subtitle.classList.add('card-text');
            subtitle.innerText = valore;
            console.log(subtitle.innerText);
            body.appendChild(subtitle);

            break;
        case 3:
            //dobbimao inserire l'immagine
            let img = `<img src="./img/${valore}" class="card-img-top" alt="dipendente">`;
            elemento.innerHTML= img;
            break;
    
        default:
            break;
    }
    elemento.appendChild(body);
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
        let val = dipendenti[i][key];
        console.log(count);
        console.log(val);
        printValori(val,col,count);
        count++;
        
    }
}