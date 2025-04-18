import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCardList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCard()
  }

  getTeamCard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const formattedData = teams.map(item => ({
      id: item.id,
      teamImgUrl: item.team_image_url,
      name: item.name,
    }))
    this.setState({
      teamCardList: formattedData,
      isLoading: false,
    })
  }

  render() {
    const {teamCardList, isLoading} = this.state
    return (
      <div className="home-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="ipl-logo-and-heading-div">
              <img
                className="logo-img"
                alt="ipl logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              />
              <h1>IPL Dashboard</h1>
            </div>
            <ul className="team-card-container">
              {teamCardList.map(item => (
                <TeamCard key={item.id} teamCardDetail={item} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default Home
