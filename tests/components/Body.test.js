import React from 'react';
import Body from '../../src/components/Body';
import { shallow } from 'enzyme';

describe('Body component', () => {
    describe('when it has children', () => {
        it('renders its children', () => {
            const children = <h1>Test</h1>;
            const wrapper = shallow(<Body>{children}</Body>);
            expect(wrapper.contains(children)).toBeTruthy();
        });
    });

    describe('when empty', () => {
        it('renders an empty body', () => {
            const wrapper = shallow(<Body></Body>);
            console.log(wrapper.children());
            
            expect(wrapper.children().isEmpty).toBeTruthy();
        });
    });
});
