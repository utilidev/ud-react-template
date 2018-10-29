import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("Header component", () => {
  it("displays props.text when a value is present", () => {
    let expectedText = "Test header text";
    const wrapper = shallow(<Header text={expectedText} />);
    const actualText = wrapper.find("h1").text();
    expect(actualText).toEqual(expectedText);
  });

  it("displays an empty h1 tag when no value is passed into props.text", () => {
    let expectedText = "";
    const wrapper = shallow(<Header text={expectedText} />);
    const actualText = wrapper.find("h1").text();
    expect(actualText).toEqual(expectedText);
  });
});
