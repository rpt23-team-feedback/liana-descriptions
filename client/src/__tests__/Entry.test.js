import React from 'react';
import Entry from '../components/Entry.jsx';
import { shallow, mount, render } from 'enzyme';

describe('Entry component', () => {
  it('renders', () => {
    const wrapper = mount(<Entry match={ {'params' : { 'id': 12 } } } />);
    const header = <h1>descriptions</h1>;
    expect(wrapper.contains(header)).toEqual(true);
  });

  it('renders the 12th page when sent to /12', () => {
    const container = mount(<Entry match={ {'params' : { 'id': 12 } } } />);
    const header = <div>welcome to bundle 12</div>;
    expect(container.contains(header)).toEqual(true);
    expect(container.exists('.blurb')).toEqual(true);
    expect(container.exists('.worth')).toEqual(true);
    expect(container.exists('.min')).toEqual(true);
    expect(container.exists('.sold')).toEqual(true);
  });

  it('renders the redirect instructions page when sent to an invalid bundle ID', () => {
    const wrapper = mount(<Entry match={ {'params' : { 'id': 112 } } } />);
    const checker = <main>please enter a valid bundle ID (1 - 100) in the URL path</main>;
    expect(wrapper.contains(checker)).toEqual(true);
  });
})

