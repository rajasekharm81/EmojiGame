import {Component} from 'react'
import './index.css'

class EmojiItem extends Component {
  send = () => {
    const {id, updatePoints} = this.props
    updatePoints(id)
  }

  render() {
    const {item} = this.props
    return (
      <button type="button" onClick={this.send} className="EmojiCardContainer">
        <img className="EmojiIcon" src={item.emojiUrl} alt={item.emojiName} />
      </button>
    )
  }
}

export default EmojiItem
