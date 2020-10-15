import React from 'react';
import Home from '../components/Home.jsx';
import { shallow, mount } from 'enzyme';

it('renders the home page correctly', () => {
  const wrapper = shallow(<Home />);
  const header = <h1>enter an id from 1 - 100</h1>;
  expect(wrapper.contains(header)).toEqual(true);
});