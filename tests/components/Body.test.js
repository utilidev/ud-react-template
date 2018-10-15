import React from "react";
import Body from "../../src/components/Body";
import { shallow } from "enzyme";

describe("Body component", () => {
  it("displays props.text when a value is present", () => {
    let expectedText = "Test Body text";
    const wrapper = shallow(<Body text={expectedText} />);
    const actualText = wrapper.find("p").text();
    expect(actualText).toEqual(expectedText);
  });

  it("displays an empty p tag when no value is passed into props.text", () => {
    let expectedText = "";
    const wrapper = shallow(<Body text={expectedText} />);
    const actualText = wrapper.find("p").text();
    expect(actualText).toEqual(expectedText);
  });
});
