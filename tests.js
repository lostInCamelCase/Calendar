import React from 'react';
import { shallow } from ‘enzyme’;

// Components
import WelcomeMessage from './WelcomeMessage';
import Calendar from '../calendar.jsx';

function setup() {
  const props = {
    imgPath: 'some/image/path/to/a/mock/image',
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
