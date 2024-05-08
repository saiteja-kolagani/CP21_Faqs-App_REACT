// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isShowing: false}

  onImgaeBtn = () => {
    this.setState(prevState => ({
      isShowing: !prevState.isShowing,
    }))
  }

  render() {
    const {isShowing} = this.state
    const {objData} = this.props
    const {questionText, answerText} = objData
    const imgUrl = isShowing
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isShowing ? 'minus' : 'plus'
    return (
      <li className="list-container">
        <div className="list-sub-container">
          <h1 className="list-heading">{questionText}</h1>
          <button
            type="button"
            className="list-image-button"
            onClick={this.onImgaeBtn}
          >
            <img src={imgUrl} alt={altText} className="list-image" />
          </button>
        </div>
        {isShowing && <hr />}
        {isShowing && <p className="list-description">{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
