import React from 'react';
import Entry from '../components/Entry.jsx';
import { shallow, mount } from 'enzyme';

describe('Entry component', () => {
  it('renders static files', () => {
    const wrapper = shallow(<Entry match={ {'params' : { 'id': 12 } } } />);
    const header = <h1>descriptions</h1>;
    expect(wrapper.contains(header)).toEqual(true);
    const checker = <div>welcome to bundle 12</div>;
    expect(wrapper.contains(checker)).toEqual(true);
  });

  it('renders the 12th page when sent to /12', () => {
    const wrapper = shallow(<Entry match={ {'params' : { 'id': 12 } } } />);
    const checker = <div>welcome to bundle 12</div>;
    expect(wrapper.contains(checker)).toEqual(true);
  });
})

