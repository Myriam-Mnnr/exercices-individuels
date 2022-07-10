const colors = ["coeur", "carreau", "pique", "trefle"]
const figures = ["valet", "dame", "roi", "as"]

function create_deck(){
    let values = [];
    for (let i = 2; i <= 10; i++) {
        values.push(i);
    }
    figures.forEach(figure => {
        values.push(figure);
    });

    let deck = [];
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

    return deck
}

class Deck {
    constructor(){
        this.cards = create_deck();
    }
    shuffle(){
        let currentIndex = this.cards.length;
        let randomIndex;;

        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            // And swap it with the current element.
            [this.cards[currentIndex], this.cards[randomIndex]] = [
                this.cards[randomIndex], this.cards[currentIndex]];
        }
    }
}

let deck1 = new Deck;
console.log(deck1.cards)
deck1.shuffle()
console.log(deck1.cards)

