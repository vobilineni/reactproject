import React from 'react';
import {Col, Row} from 'reactstrap';
// import { Link } from 'react-router';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import TabBar from './TabBar';
import {BreadCrumbWithRouter} from './Breadcrumb';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

export class NavigationContainer extends React.Component {
  render() {
    function buildTabBar(tabBar, selectedTab) {
      const tabBars = {
        home: [
          <Link key="search" id="search" to="/searchTransaction">
            Search Transaction
          </Link>,
          <Link key="viewdlq" id="viewdlq" to="/viewTransaction">
            View Transaction
          </Link>,
          <Link key="modifySystem" id="modifySystem" to="/modifyTransaction">
            Modify Transaction
          </Link>
        ],
        detail: [
          <Link key="details" id="details" to="/details">
            Details
          </Link>,
          <Link key="history" id="history" to="/history">
            History
          </Link>,
          <Link key="messages" id="messages" to="/messages">
            Messages
          </Link>
        ]
      };
      return <TabBar currentTab={selectedTab}>{tabBars[tabBar] ? tabBars[tabBar] : []}</TabBar>;
    }

    function breadcrumbText(tabBar) {
      const text = {
        home: 'Home',
        detail: 'Transaction Details'
      };
      return text[tabBar];
    }

    return (
      <div>
        <BreadCrumbWithRouter showBackArRow={this.props.showBackArRow} text={breadcrumbText(this.props.tabBar)}/>
        <ErrorBoundary>
          <div className="bodyContents">
            <div fluid>
              <Row>
                <Col sm={12}>
                  {buildTabBar(this.props.tabBar, this.props.selectedTab)}
                  {this.props.children}
                </Col>
              </Row>
            </div>
          </div>
        </ErrorBoundary>
      </div>
    );
  }
}

NavigationContainer.propTypes = {
  tabBar: PropTypes.string,
  selectedTab: PropTypes.string,
  children: PropTypes.object,
  showBackArRow: PropTypes.bool
};

export default NavigationContainer;
