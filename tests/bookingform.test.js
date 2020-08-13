//Component does not yet exist yet

import React from 'react';
import { shallow } from ‘enzyme’;

// Test Component
import BookingForm from '../client/src/components/bookingform.jsx';

function setup() {
  const props = {
    header: 'Calendar',
  };
  const wrapper = shallow(<BookingForm />);
  return { wrapper, props };
}


describe("<UserInfo /> rendering", () => {
  it("should have an UserInfo component", () => {
    let component = shallow(<BookingForm />);
    expect(component.exists()).toBe(true);
  });
});