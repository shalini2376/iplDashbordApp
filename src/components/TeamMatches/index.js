import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({
      teamBannerUrl: formattedData.teamBannerUrl,
      latestMatchDetails: formattedData.latestMatchDetails,
      recentMatches: formattedData.recentMatches,
      isLoading: false,
    })
  }

  render() {
    // eslint-disable-next-line
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      isLoading,
    } = this.state
    return (
      <div className="team-matches-container">
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="team-banner-img-dontainer">
              <img
                className="team-banner-img"
                alt="team banner"
                src={teamBannerUrl}
              />
            </div>
            <h1 className="latest-matches-heading">Latest Matches</h1>
            <div className="latest-matches-container">
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            </div>
            <ul className="match-card-container">
              {recentMatches.map(item => (
                <MatchCard key={item.id} recentMatches={item} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default TeamMatches
