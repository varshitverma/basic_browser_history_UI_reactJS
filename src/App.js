import './App.css'
import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

// COMPONENT

const HistoryList = props => {
  const {searchHistory, onDeleteFunction} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = searchHistory

  const onDelete = () => {
    onDeleteFunction(id)
  }
  return (
    <li className="list-item">
      <div className="upper">
        <p className="time">{timeAccessed}</p>
        <div className="history-details">
          <img src={logoUrl} alt="domain logo" className="history-logo" />
          <div className="title-domain">
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        testId="delete"
        className="delete-icon"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

//

class App extends Component {
  state = {searchHistory: initialHistoryList, searchValue: ''}

  inputValue = event => {
    this.setState({searchValue: event.target.value})
  }

  onDeleteFunction = id => {
    const {searchHistory} = this.state
    const filteredList = searchHistory.filter(eachItem => eachItem.id !== id)

    this.setState({searchHistory: filteredList})
  }

  render() {
    let emptyHistory = false
    const {searchHistory, searchValue} = this.state
    // console.log(searchValue)

    const filteredList = searchHistory.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchValue.toLowerCase()),
    )

    if (filteredList.length === 0) {
      emptyHistory = true
    }

    return (
      <div className="bg-container" id="main">
        <navbar className="navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="search-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-logo"
              />
            </div>
            <input
              type="search"
              className="search-input"
              placeholder="Search history"
              onChange={this.inputValue}
            />
          </div>
        </navbar>
        <div className="footer-section">
          <div className="history-card">
            {!emptyHistory ? (
              <ul className="list-container">
                {filteredList.map(eachItem => (
                  <HistoryList
                    searchHistory={eachItem}
                    onDeleteFunction={this.onDeleteFunction}
                    key={eachItem.id}
                  />
                ))}
              </ul>
            ) : (
              <div className="footer-section">
                <div className="delete-card">
                  <p className="delete-para">There is no history to show</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
