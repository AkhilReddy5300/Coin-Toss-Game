// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    img1: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onChangeItem = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        img1: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        img1: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {heads, tails, img1} = this.state

    return (
      <div className="bg-cont">
        <div className="card">
          <h1 className="header">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={img1} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.onChangeItem}>
            Toss Coin
          </button>
          <div className="res-cont">
            <p className="res">Total:{heads + tails}</p>
            <p className="res">Heads:{heads}</p>
            <p className="res">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
