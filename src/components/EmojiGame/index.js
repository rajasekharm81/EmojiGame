import {Component} from 'react'
import EmojiItem from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedIds: [], score: 0, topScore: 0, isGameOver: false}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  playAgain = () => {
    const {score} = this.state
    if (score === 12) {
      this.setState({isGameOver: false, score: 0, topScore: 12})
    } else {
      this.setState({isGameOver: false, score: 0})
    }
  }

  updatePoints = id => {
    const {score, topScore, clickedIds} = this.state

    if (clickedIds.includes(id)) {
      if (score > topScore) {
        this.setState({topScore: score})
      }
      this.setState({isGameOver: true})
    } else {
      this.setState(prevstate => ({
        clickedIds: [...prevstate.clickedIds, id],
        score: prevstate.score + 1,
      }))
    }
  }

  renderOnCondition = () => {
    // const {emojisList} = this.props
    const list = this.shuffledEmojisList()
    const {topScore, score, isGameOver} = this.state
    if (isGameOver === false && score !== 12) {
      return (
        <div className="gameContainer">
          {list.map(each => (
            <EmojiItem
              updatePoints={this.updatePoints}
              key={each.id}
              id={each.id}
              item={each}
            />
          ))}
        </div>
      )
    }
    return (
      <WinOrLoseCard
        topScoreUpdate={this.winTopScoreUpdate}
        isGameOver={isGameOver}
        score={score}
        topScore={topScore}
        playAgain={this.playAgain}
      />
    )
  }

  render() {
    // const emojies = this.shuffledEmojisList()
    const {score, topScore} = this.state
    return (
      <div className="mainContainer">
        <NavBar score={score} topScore={topScore} />
        {this.renderOnCondition()}
      </div>
    )
  }
}

export default EmojiGame
