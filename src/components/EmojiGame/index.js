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
    const {emojisList} = this.props
    const {clickedIds, topScore, isGameOver} = this.state
    if (isGameOver === false) {
      return (
        <div className="gameContainer">
          {emojisList.map(each => (
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
    return <WinOrLoseCard />
  }

  render() {
    const emojies = this.shuffledEmojisList()
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
