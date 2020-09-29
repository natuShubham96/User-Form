import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe("Testing App", () => {
    let app = shallow(<App />)     //By using shallow instead of mount, we are only testing parent component, not checking child component

    it("Checking UserForm mounted", () => {
        expect(app.find("UserForm").exists()).toBe(true)
    })

    describe("Checking link", () => {
        it("Rendering About Us Link",() => {
            expect(app.find(".aboutUsLink").exists()).toBe(true)
        })

        it("Checking link title", () => {
            expect(app.find(".aboutUsLink").text()).toEqual("About Us")
        })
    })
})