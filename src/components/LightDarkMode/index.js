import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isModeChanged: true}

  onChangeMode = () => {
    this.setState(prevState => ({isModeChanged: !prevState.isModeChanged}))
  }

  render() {
    const {isModeChanged} = this.state
    const buttonText = isModeChanged ? 'Light Mode' : 'Dark Mode'
    const containerMode = isModeChanged ? 'dark-mode' : 'light-mode'

    return (
      <div className="container">
        <div className={`${containerMode} mode-container`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button onClick={this.onChangeMode} type="button" className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

// class LightDarkMode extends Component {
//   state = {isModeChanged: true}

//   onChangeMode = () => {
//     this.setState(prevState => ({isModeChanged: !prevState.isModeChanged}))
//   }

//   onChangeModeText = () => {
//     const {isModeChanged} = this.state
//     return isModeChanged ? 'Light Mode' : 'Dark Mode'
//   }

//   onChangeModeContainerBg = () => {
//     const {isModeChanged} = this.state
//     return isModeChanged ? 'dark-mode-container' : 'light-mode-container'
//   }

//   onChangeModeHeading = () => {
//     const {isModeChanged} = this.state
//     return isModeChanged ? 'dark-mode-heading' : 'light-mode-heading'
//   }

//   render() {
//     const buttonText = this.onChangeModeText()
//     const modeHeading = this.onChangeModeHeading()
//     const modeContainerBg = this.onChangeModeContainerBg()
//     return (
//       <div className="container">
//         <div className={`${modeContainerBg} mode-container`}>
//           <h1 className={`${modeHeading} heading`}>Click To Change Mode</h1>
//           <button onClick={this.onChangeMode} type="button" className="button">
//             {buttonText}
//           </button>
//         </div>
//       </div>
//     )
//   }
// }

export default LightDarkMode
