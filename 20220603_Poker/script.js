const colors = ["coeur", "carreau", "pique", "trefle"]
const figures = ["valet", "dame", "roi", "as"]
let values = []
let deck = []


for (let i = 2; i <= 10; i++) {
    values.push(i)
}
figures.forEach(figure => {
    values.push(figure)
});


colors.forEach(color => {
    values.forEach(value => {
        deck.push(
            {
                valeur: value,
                couleur: color,
            }
        )
    });
});

function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

// Used like so
shuffle(deck);
let deckinitial = deck.slice();
console.log(deckinitial);

function deal(number) {
    let main = [];
    for (let i = 0; i < number; i++) {
        main.push(deck.pop());
    }
    return main
}

const player1 = deal(2);
const player2 = deal(2);
console.log(player1);
console.log(player2);
console.log(deck);

function flop() {
    let cards = [];
    deal(1);
    cards.push(deal(3));
    deal(1);
    cards.push(deal(1));
    deal(1);
    cards.push(deal(1));
    return cards.flat()
}

let cards=flop();
console.log(cards);