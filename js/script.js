//funzione che crea una lista iin html
/*
function crateCol() {
    const row = document.getElementById('row-card');
    
    return card;
}
*/
//funzione per scrivere nle DOM
/* function printValori(valore, elemento, contatore) {
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
            body.innerHTML = `<p class="card-text"> </p>`

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
 */
function createCard(object) {
    const row = document.getElementById('row-card');
    //colonna
    let col = document.createElement('div');
    col.classList.add('col-4');
    //card
    let card = document.createElement('div');
    card.classList.add('card');
    //card-body
    let card_body = document.createElement('div');
    card_body.classList.add('card-body');
    
    let count = 1;
    for (const key in object) {

        switch (count) {
            case 1:
                //dobbiamo inserire il titolo
                let title = document.createElement('h5');
                title.classList.add('card-title');
                title.innerText = object[key];
                card_body.appendChild(title);
                break;
            case 2:
                //dobbiamo inserire il sottotitolo
                let subtitle = document.createElement('p');
                subtitle.classList.add('card-text');
                subtitle.innerText = object[key];
                console.log(subtitle.innerText);
                card_body.appendChild(subtitle);
                break;
            case 3:
                //dobbimao inserire l'immagine
                let img = `<img src="./img/${object[key]}" class="card-img-top" alt="dipendente">`;
                card.innerHTML+= img;
                console.log(count);
                break;
        
            default:
                break;
        }
        count++;
    }
    
    card.appendChild(card_body);
    col.appendChild(card);
    row.appendChild(col);
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
    let oggetto= dipendenti[i];

    createCard(oggetto);
}