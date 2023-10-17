export enum Suit {
    Diamonds,
    Clubs,
    Spades,
    Hearts
}

interface PlayingCard {
    value: number;
    suit: Suit
}

function showCard(card: PlayingCard) {
    if (card.suit === Suit.Clubs) {
        return `${card.value} of clubs`;
    }
    if (card.suit === Suit.Diamonds) {
        return `${card.value} of diamonds`;
    }
    if (card.suit === Suit.Spades) {
        return `${card.value} of spades`;
    }
    if (card.suit === Suit.Hearts) {
        return `${card.value} of hearts`;
    }
    throw new Error("Something terrible happened");
}

const threeClub = { value: 3, suit: Suit.Clubs};
console.log(showCard(threeClub));