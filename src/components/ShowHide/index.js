// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isShow: false, isHide: false}

  onClickButton1 = () => {
    this.setState(prevState => ({isShow: !prevState.isShow}))
  }

  onClickButton2 = () => {
    this.setState(prevState => ({isHide: !prevState.isHide}))
  }

  render() {
    const {isShow, isHide} = this.state
    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="row">
          <div className="space">
            <button type="button" onClick={this.onClickButton1}>
              Show/Hide Firstname
            </button>
            {isShow && <p className="para">Joe</p>}
          </div>
          <div className="space">
            <button type="button" onClick={this.onClickButton2}>
              Show/Hide Lastname
            </button>
            {isHide && <p className="para">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
