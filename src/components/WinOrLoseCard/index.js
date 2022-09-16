import {Component} from 'react'
import './index.css'

class WinOrLoseCard extends Component {
  play = () => {
    const {playAgain} = this.props
    playAgain()
  }

  winContainer = () => {
    const {isGameOver, score} = this.props
    const ImageUrl = isGameOver
      ? 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

    const winOrLooseText = isGameOver ? 'You Loose' : 'You Win'
    const scoreText = isGameOver ? 'Score' : 'Best Score'

    return (
      <div className="winContainer">
        <div className="resultContainer">
          <h1 className="winOrLooseHeading">{winOrLooseText}</h1>
          <p className="scoreHeading">{scoreText}</p>
          <h1 className="scoreResult">{score}/12</h1>
          <button type="button" onClick={this.play} className="playAgainButton">
            Play Again
          </button>
        </div>
        <div className="imageContainer">
          <img src={ImageUrl} alt="Win Or Loose" />
        </div>
      </div>
    )
  }

  render() {
    return this.winContainer()
  }
}

export default WinOrLoseCard
