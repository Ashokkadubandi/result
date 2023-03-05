// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, state: 'Count is Even'}

  onIncrementEvenAndOdd = async () => {
    const random = Math.random() * 100

    const num = Math.ceil(random)

    await this.setState(pre => ({count: pre.count + num}))
    const {count} = this.state
    console.log(count)
    if (count % 2 === 0) {
      this.setState(pre => ({state: 'Count is Even'}))
    } else if (count % 2 !== 0) {
      this.setState(pre => ({state: 'Count is Odd'}))
    }
  }

  render() {
    const {count, state} = this.state
    return (
      <div className="bg-con">
        <div className="card">
          <h1 className="header">Count {count}</h1>
          <p className="count-state">{state}</p>
          <button
            className="button"
            type="button"
            onClick={this.onIncrementEvenAndOdd}
          >
            Increment
          </button>
          <p className="desc">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
