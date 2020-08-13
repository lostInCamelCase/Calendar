import React from 'react';
import { shallow } from ‘enzyme’;

// Test Component
import Calendar from '../client/src/components/calendar.jsx';

function setup() {
  const props = {
    header: 'Calendar',
  };
  const wrapper = shallow(<Calendar />);
  return { wrapper, props };
}


describe("<UserInfo /> rendering", () => {
  it("should have an UserInfo component", () => {
    let component = shallow(<Calendar />);
    expect(component.exists()).toBe(true);
  });
});

describe('Has a header "Calendar"', () => {
  it('Should pass props', () => {
    const { wrapper } = setup();
    expect(wrapper.find('Calendar').exists()).toBe(true);
  });
});
