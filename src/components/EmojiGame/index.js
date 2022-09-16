import {Component} from 'react'
import EmojiItem from '../EmojiCard'
import NavBar from '../NavBar'
import './index.css'

class EmojiGame extends Component {
  state = {clickedIds: [], topScore: 0, isGameOver: false}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderOnCondition = () => {
    const {emojisList} = this.props
    const {clickedIds, topScore, isGameOver} = this.state
    if (isGameOver === false) {
      return (
        <div className="gameContainer">
          {emojisList.map(each => (
            <EmojiItem key={each.id} id={each.id} item={each} />
          ))}
        </div>
      )
    }
    return <h1>Game Over</h1>
  }

  render() {
    const emojies = this.shuffledEmojisList()
    return (
      <div className="mainContainer">
        <NavBar />
        {this.renderOnCondition()}
      </div>
    )
  }
}

export default EmojiGame
