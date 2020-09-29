import React from 'react'
import {shallow} from 'enzyme'
import  NotFound from './NotFound'
import App from '../App'

describe("Validating Not Found page rendering", () => {
    const notFound = shallow(<NotFound />)
    const app = shallow(<App />)

    it("Checking header", () => {
        expect(notFound.find("h1").text()).toEqual("Simon Go Back!!!!!!!!!!")
    })

    it("Checking link rendering", () => {
        expect(notFound.find("Link").exists()).toBe(true)
    })

    it("validating link title", () => {
        expect(notFound.find("Link").text()).toEqual("Back You Toddler!!!")
    })

    beforeEach(() => {
        notFound.find("Link").simulate("click")
    })

    it("Validating link click", () => {
        expect(app.find("UserForm").exists()).toBe(true)
    })
})