import {Component} from 'react'
import './index.css'

class EmojiItem extends Component {
  render() {
    const {item} = this.props
    return (
      <div className="EmojiCardContainer">
        <img className="EmojiIcon" src={item.emojiUrl} alt={item.emojiName} />
      </div>
    )
  }
}

export default EmojiItem
