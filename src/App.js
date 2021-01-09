import React from 'react'
import {Switch,Route} from 'react-router-dom'
import CandidatePage from './pages/candidatepage/candidatepage.page'
import HomePage from './pages/homepage/homepage.page'
import ShortlistedPage from './pages/shortlisted/shortlistedpage.page'
import RejectedPage from './pages/rejected/rejectedpage.page'

class App extends React.Component{
  render(){
    return(
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shortlisted" component={ShortlistedPage} />
        <Route exact path="/rejected" component={RejectedPage} />
        <Route exact path="/:id" component={CandidatePage} />        
      </Switch>
    )
  }
}

export default App;