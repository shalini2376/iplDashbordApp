import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const formattedData = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }
  const {
    // eslint-disable-next-line
    id,
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    // eslint-disable-next-line
    matchStatus,
  } = formattedData
  return (
    <div className="latest-match-div">
      <div className="initial-match-info-div">
        <p className="competing-team-name-text">{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="logo-img-div">
        <img
          className="competing-team-logo-img"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="after-match-info-div">
        <p>first Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
