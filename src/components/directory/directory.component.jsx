import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import SECTIONS_DATA from '../../constants/default_section_data'
class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size,url }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} url={url} />
        ))}
      </div>
    );
  }
}

export default Directory;
