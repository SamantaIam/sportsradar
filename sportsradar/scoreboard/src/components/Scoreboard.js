/**
 * Renders a scoreboard
 * @param {Object} props - Parameters of the game to be shown
 * @param {String} props.scoreboard.homeTeam - On launch of application it's Home Team
 *                                             Once a new game is started then
 *                                             randomly 2 teams are picked from
 *                                             list of teams. Checked that teams
 *                                             picked aren't same.
 * @param {String} props.scoreboard.awayTeam - On launch of application it's Away Team
 *                                             Once a new game is started then
 *                                             randomly 2 teams are picked from
 *                                             list of teams. Checked that teams
 *                                             picked aren't same.
 * @param {Integer} props.scoreboard.homeScore - It's inactive unless a game is started.
 *                                               Once game is started it becomes
 *                                               active and you can update goals
 *                                               scored by Home team.
 * @param {Integer} props.scoreboard.awayScore - It's inactive unless a game is started.
 *                                               Once game is started it becomes
 *                                               active and you can update goals
 *                                               scored by Away team.
 * @returns - webpage with options to 
 *            1. Start new match. 
 *            2. Update scores of current match for Homer and Away team.
 *            3. End a match.
 * 
 *            Listing
 *            -------
 *            See played matches from lastest to the first played match.
 * 
 *            Final listing
 *            -------------
 *            Sorted by max combined goals scored by both teams. 
 *            If in more than 1 match teams scored same number of goals 
 *            then they are listed in the order those matches were played.
 */
function Scoreboard(props) {
    return (
        <center>
            <div id="scoreBoard">
                <b id="homeTeam">{props.scoreboard.homeTeam}</b>
                <b id="homeScore">{props.scoreboard.homeScore}</b>
                <h3>versus</h3>
                <b id="awayTeam">{props.scoreboard.awayTeam}</b>
                <b id="awayScore">{props.scoreboard.awayScore}</b>
            </div>
        </center>
    )
}

export { Scoreboard };