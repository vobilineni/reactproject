import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

export class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.goBack();
  }

  showBackArrow() {
    if (this.props.showBackArrow) {
      return (
        <span
          className="breadCrumbBackArrow"
          id="backArrow"
          role="button"
          tabIndex="-1"
          onClick={this.handleClick}
          onKeyDown={() => {
          }}
        >
          &lt;
        </span>
      );
    }
    return <span/>;
  }

  render() {
    return (
      <div className="breadcrumbContainer">
        {this.showBackArrow()}
        <span>{this.props.text}</span>
      </div>
    );
  }
}

Breadcrumb.propTypes = {
  showBackArrow: PropTypes.bool,
  text: PropTypes.string,
  history: PropTypes.shape({
    goBack: PropTypes.func
  })
};

export const BreadCrumbWithRouter = withRouter(Breadcrumb);

export default Breadcrumb;
