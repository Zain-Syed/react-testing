import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import connect from '../../node_modules/react-redux/lib/connect/connect';

describe("<App/>", () => {
    const app = shallow(<App/>);
    it("renders the flashcardpro title", () => {
        expect(app.find('h2').text()).toEqual("Flashcard Pro");
    });

    it("renders a Stacklist component", () => {
        expect(app.find('Connect(Stacklist)').exists()).toBe(true);
    })

    it("renders a link to create a new stack", () => {
        expect(app.find('Link h4').text()).toEqual("Create a New Stack");
    });
})