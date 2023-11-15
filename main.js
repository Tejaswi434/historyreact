import {Component} from 'react'
import SmallContainer from '../SmallContainer'

import './index.css'

class MainContainer extends Component {
  state = {search: '', delete: ''}

  searchingdata = event => {
    this.setState({search: event.target.value})
  }

  ondeleting = id => {
      const deletingdata=initialHistoryList.filter(each=>{
          each.id!==id
      })
    
    this.setState({delete: id})
  }

  render() {
    const {search} = this.state
    const {initialHistoryList} = this.props
    const searchingdetails = initialHistoryList.filter(each =>
      each.title.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <div>
        <div className="blue-box">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="applogo"
          />
          <div className="searchcontainer_input">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt=" search"
            />
            <hr className="hori" />
            <input
              type="password"
              className="input_a"
              placeholder="search history"
              onChange={this.searchingdata}
            />
          </div>
        </div>
        <div className="bottom_container">
          <ul>
            {searchingdetails.map(each => (
              <SmallContainer item={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MainContainer
