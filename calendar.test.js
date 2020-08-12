import React from 'react';
import { shallow } from ‘enzyme’;

// Test Component
import Calendar from '../calendar.jsx';

function setup() {
  const props = {
    header: 'Calendar',
  };
  const wrapper = shallow(<Calendar />);
  return { wrapper, props };
}

describe('Calendar Test Suite', () => {
  it('Should pass props', () => {
    const { wrapper } = setup();
    expect(wrapper.find('Calendar').exists()).toBe(true);
  });
});
