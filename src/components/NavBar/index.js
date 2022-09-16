import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    return (
      <nav className="navBar">
        <div className="logoConntainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="TitleHeading">Emoji Game</h1>
        </div>
        <div className="ScoreContainer">
          <h1 className="scoreHeading">Score: 0</h1>
          <h1 className="topScoreHeading">Top Score: 0</h1>
        </div>
      </nav>
    )
  }
}

export default NavBar
