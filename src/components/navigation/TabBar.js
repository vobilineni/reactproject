import React from 'react';
import PropTypes from 'prop-types';

class TabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: this.props.currentTab
    };

    this.buildLink = this.buildLink.bind(this);
  }

  buildLink(link) {
    return (
      <li
        key={link.props.id}
        className={`tab__item tab__item--large tab__item-skin ${
          this.state.currentTab === link.props.id ? 'active' : ''
          }`}
      >
        {link}
      </li>
    );
  }

  render() {
    const rows = [];

    if (Array.isArray(this.props.children)) {
      this.props.children.forEach(link => {
        rows.push(this.buildLink(link));
      });
    }

    return (
      <div className="tabs">
        <ul className="tabs__list">{rows}</ul>
      </div>
    );
  }
}

TabBar.propTypes = {
  currentTab: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default TabBar;
