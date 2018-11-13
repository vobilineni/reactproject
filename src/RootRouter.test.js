/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import Routes from './RootRouter';
import App from './App';

describe('Router', () => {
  it('renders correct routes', () => {
    const wrapper = shallow(<Routes />);
    const pathMap = wrapper.find(Route).reduce((_pathMap, route) => {
      const newPathMap = _pathMap;
      const routeProps = route.props();
      newPathMap[routeProps.path] = routeProps.component;
      return newPathMap;
    }, {});

      expect(pathMap['/app']).toBe(App);
      // expect(pathMap['/']).toBe(RootContainer);
      // expect(pathMap['/custodyHoldings']).toBe(CustodyHoldingsContainer);
  });
});
