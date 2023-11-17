/*Be sure to use meaningful variable names.
Try to use map and reduce in your functions as appropriate. */
//The following objects record the season statistics for players on a basketball team.
export const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
export const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
export const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };
export const teamStats = [player1, player2, player3];
export function findTotalPlayerPoints(player) {
    return player.stats.reduce((total, stat) => total + stat.points, 0);
}
export function findTotalPointsByJersey(jersey) {
    const player = teamStats.find(player => player.jersey === jersey);
    return player ? findTotalPlayerPoints(player) : 0;
}
export function findTotalScores(teamStats) {
    return teamStats.map(player => ({ jersey: player.jersey, total: findTotalPlayerPoints(player)
    }));
}
