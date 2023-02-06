import { Scoreboard } from './components/Scoreboard.js';
import { Results } from './components/Results.js';
import { useState } from 'react';

/**
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
function App() {

    //Game state -- Controls the values used by the Scoreboard component
    const [scoreboard, setScoreboard] = useState({
        homeTeam: "Home Team",
        awayTeam: "Away Team",
        homeScore: "",
        awayScore: ""
    });
    //Game active state -- Controls the enabled property of the action buttons
    const [activeGame, setActiveGame] = useState(false);
    //Results by Date state -- Contains a list with all completed games
    const [resultsByDate, setResultsByDate] = useState([]);
    //Results by Score state -- Contains a list with all completed games, which will be sorted by total score
    const [resultsByScore, setResultsByScore] = useState([]);

    //Creates a new match, picking two teams randomly and setting their initial score.
    const newMatch = () => {

        const generateTeams = () => {

            const aTeams = ["Qatar", "Ecuador", "Senegal", "Netherlands", "England", "Iran", "USA", "Wales", "Argentina", "Saudi Arabia", "Mexico", "Poland", "France", "Australia", "Denmark", "Tunisia", "Spain", "Costa Rica", "Germany", "Japan", "Belgium", "Canada", "Morocco", "Croatia", "Brazil", "Serbia", "Switzerland", "Cameroon", "Portugal", "Ghana", "Uruguay", "South Korea"];

            let homeTeam = aTeams[Math.floor(Math.random() * aTeams.length)];
            let awayTeam = aTeams[Math.floor(Math.random() * aTeams.length)];

            while (homeTeam === awayTeam) {
                awayTeam = aTeams[Math.floor(Math.random() * aTeams.length)];
            }

            return { homeTeam, awayTeam }

        }

        const teams = generateTeams();
        setScoreboard({
            homeTeam: teams.homeTeam,
            awayTeam: teams.awayTeam,
            homeScore: 0,
            awayScore: 0
        });

        setActiveGame(true);

    }

    //Increments the score of the home team by 1.
    const homeGoal = () => {
        setScoreboard(previousState => {
            return { ...previousState, homeScore: previousState.homeScore + 1 }
        });
    }

    //Increments the score of the visitor team by 1.
    const awayGoal = () => {
        setScoreboard(previousState => {
            return { ...previousState, awayScore: previousState.awayScore + 1 }
        });
    }

    //Ends the active match, storing its result in the two lists. The 'resultsByScore' array is rearranged in the process to reflect the new changes.
    const endMatch = () => {

        setResultsByDate(previousState => {
            let previousStateLength = previousState.length;
            let newArray = [{
                id: previousStateLength,
                homeTeam: scoreboard.homeTeam,
                awayTeam: scoreboard.awayTeam,
                homeScore: scoreboard.homeScore,
                awayScore: scoreboard.awayScore
            }, ...previousState];
            return newArray;
        });

        setResultsByScore(previousState => {
            let previousStateLength = previousState.length;
            let newArray = [{
                id: previousStateLength,
                homeTeam: scoreboard.homeTeam,
                awayTeam: scoreboard.awayTeam,
                homeScore: scoreboard.homeScore,
                awayScore: scoreboard.awayScore
            }, ...previousState].sort((a, b) => {
                if ((a.homeScore + a.awayScore) > (b.homeScore + b.awayScore)) {
                    return -1;
                }
                if ((a.homeScore + a.awayScore) < (b.homeScore + b.awayScore)) {
                    return 1;
                }
                else {
                    return a.id > b.id ? -1 : 1;
                }
            });;

            return newArray;
        })

        setScoreboard({
            homeTeam: "Home Team",
            awayTeam: "Away Team",
            homeScore: "",
            awayScore: ""
        });

        setActiveGame(false);

    }

    return (
        <center>
            <br></br>
            <br></br>
            <Scoreboard scoreboard={scoreboard} />
            <br></br>
            <div id="actions">
                <button id="newMatch" onClick={newMatch} disabled={activeGame}>Start a new match</button>
                <button id="homeGoal" onClick={homeGoal} disabled={!activeGame}>Home team scored goal</button>
                <button id="awayGoal" onClick={awayGoal} disabled={!activeGame}>Away team scored goal</button>
                <button id="endMatch" onClick={endMatch} disabled={!activeGame}>End match</button>
            </div>
            <br></br>
            <Results resultsByDate={resultsByDate} resultsByScore={resultsByScore} />
        </center>
    );
};

export { App };