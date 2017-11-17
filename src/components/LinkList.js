import React from 'react';
import Link from './Link';

class LinkList extends React.Component {
  render() {
    const links = [
      {
        id: '1', description: 'One', url: 'http://one'
      },
      {
        id: '2', description: 'Two', url: 'http://two'
      },
      {
        id: '3', description: 'Three', url: 'http://three'
      },
    ];

    return (
      <div>
        {links.map(link => (
          <Link key={link.id} link={link} />
        ))}
      </div>
    );
  }
}

export default LinkList;
