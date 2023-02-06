/**
 * Creates lists of completed games and renders them
 * 
 * @param {Object} props - Lists played matches in order they were played,
 *                          and in combined max goal scoring order.
 * @param {Object[]} props.resultsByDate - List played matches in the order
 *                                         they were played from latest to first.
 * @param {Object[]} props.resultsByScore - List in combined max goal scoring order.
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
function Results(props) {
    return (
        <div id="lists">
            <div>
                <p><h3>List of match played</h3> [from latest ended to the first played match]</p>
                <br></br>
                <ul id="matchPlayed">
                    {props.resultsByDate.map((item) => (
                        <li key={item.id}>{item.homeTeam}: {item.homeScore} - {item.awayTeam}: {item.awayScore}</li>
                    ))}
                </ul>
            </div>
            <div>
                <p><h3>Finale output</h3> [sorted by max combined goals scored by both teams, if in more than 1 match teams scored same number of goals then they are listed in the order then matches are listed in the order they are were played]</p>
                <ul id="matchSorted">
                    {props.resultsByScore.map((item) => (
                        <li key={item.id}>{item.homeTeam}: {item.homeScore} - {item.awayTeam}: {item.awayScore}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export { Results };