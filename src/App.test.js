import React from 'react';
import {mount} from 'enzyme';
import App from './App';

describe("Testing App", () => {
    let app = mount(<App />)

    it("Checking UserForm mounted", () => {
        expect(app.find("UserForm").exists()).toBe(true)
    })
})