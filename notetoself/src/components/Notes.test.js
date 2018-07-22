import React from 'react';
import { mount } from 'enzyme';
import Notes from './Notes';

const props = { note: {text: "Test Note"}}

describe("<Notes/>", () => {
    let notes = mount(<Notes {...props}/>);

    it("Renders the note correctly", () => {
        expect(notes.find('p').text()).toEqual("Test Note");
    });
});