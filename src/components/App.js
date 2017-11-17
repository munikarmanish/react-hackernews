import React from 'react';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className='center w85'>
        <Header />
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path='/' component={LinkList}/>
            <Route exact path='/create' component={CreateLink}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
