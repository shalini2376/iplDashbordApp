import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class TeamCard extends Component {
  render() {
    const {teamCardDetail} = this.props
    const {id, name, teamImgUrl} = teamCardDetail
    return (
      <Link to={`/team-matches/${id}`} className="team-card-link">
        <li key={id} className="teamcard-item">
          <img className="team-image" alt={name} src={teamImgUrl} />
          <p className="team-name-text">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
