import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants';

class Header extends React.Component {
  _logout() {
    console.log('Logging out...');
    localStorage.removeItem(GC_USER_ID);
    localStorage.removeItem(GC_AUTH_TOKEN);
    this.props.history.push(`/new/1`);
  }

  render() {
    const userId = localStorage.getItem(GC_USER_ID);

    return (
      <div className='flex pa1 justify-between nowrap orange'>
        <div className='flex flex-fixed black'>
          <div className='fw7 mr1'>Hacker News</div>
          <Link to='/' className='ml1 no-underline black'>new</Link>
          {userId &&
            <div className="flex">
              <div className='ml1'>|</div>
              <Link to='/create' className='ml1 no-underline black'>submit</Link>
            </div>
          }
          <div className="flex flex-fixed">
            {userId
            ?
              <div className='ml1 pointer black' onClick={this._logout.bind(this)}>logout</div>
            :
              <Link to='/login' className='ml1 no-underline black'>login</Link>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
