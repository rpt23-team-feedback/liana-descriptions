import React from 'react';
import Test from './index';
import { shallow, mount } from 'enzyme';

it('renders correctly', () => {
  const wrapper = shallow(<Test />);
  const header = <h1>descriptions</h1>;
  expect(wrapper.contains(header)).toEqual(true);
});
