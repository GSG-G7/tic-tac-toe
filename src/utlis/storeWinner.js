export const storeWinner = (winner) => {
    let winners = [];
    winners = winners.concat(JSON.parse(localStorage.getItem('winners')));
    winners = winners.concat([{ winner: winner }]);
    localStorage.setItem('winners', JSON.stringify(winners));
}

