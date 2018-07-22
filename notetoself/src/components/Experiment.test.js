import React from 'react';
import { mount } from 'enzyme';
import Experiment from './Experiment';
import { Button } from '../../node_modules/react-bootstrap';

describe("<Experiment/>", () => {
    let exp = mount(<Experiment onClick={jest.fn()}/>);
    window.alert = jest.fn();

    it("Check if button rendered", () => {
        expect((exp).find('.btn').text()).toEqual("Click this button");
    });
    
});

