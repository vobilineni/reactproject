import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error) {
    this.setState({hasError: true, error});
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <div>
            <Row>
              <Col>
                <br/>
                <div role="alert" className="alert alert-skin--error">
                  <span>System error occurred: {this.state.error.message}</span>
                </div>
              </Col>
            </Row>
          </div>
          {this.props.children}
        </div>
      );
    } else if (this.props.apiError && this.props.apiError.errorMessage) {
      return (
        <div>
          <div>
            <Row>
              <Col>
                <br/>
                <div role="alert" className="alert alert-skin--error">
                  <span>{this.props.apiError.errorMessage}</span>
                </div>
              </Col>
            </Row>
          </div>
          {this.props.children}
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
  apiError: PropTypes.object
};

const mapStateToProps = state => ({
  apiError: state.apiError
});

export default connect(mapStateToProps)(ErrorBoundary);
