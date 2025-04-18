import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const formatedData = {
    umpires: recentMatches.umpires,
    result: recentMatches.result,
    manOfTheMatch: recentMatches.man_of_the_match,
    id: recentMatches.id,
    date: recentMatches.date,
    venue: recentMatches.venue,
    competingTeam: recentMatches.competing_team,
    competingteamLogo: recentMatches.competing_team_logo,
    firstInnings: recentMatches.first_innings,
    secondInnings: recentMatches.second_innings,
    matchStatus: recentMatches.match_status,
  }
  const {
    id,
    result,
    competingteamLogo,
    competingTeam,
    matchStatus,
  } = formatedData
  const matchStatusClassname =
    matchStatus === 'Won' ? 'winning-class' : 'lost-class'
  return (
    <li key={id} className="match-card-div">
      <img
        className="competing-team-logo-img"
        src={competingteamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p>{result}</p>
      <p className={matchStatusClassname}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
