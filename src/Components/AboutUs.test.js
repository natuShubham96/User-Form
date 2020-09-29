import React from 'react'
import {shallow} from 'enzyme'
import AboutUs from './AboutUs'
import App from '../App'


describe("Validating rendering of components", () => {
   const aboutUs = shallow(<AboutUs />)

   it("Validating header", () => {
       expect(aboutUs.find("h1").text()).toEqual("Bunch of hippies!!!!")
   })

   it("Validating rendering of link", () => {
       expect(aboutUs.find("Link").exists()).toBe(true)
   })

   it("Validating link title", () => {
       expect(aboutUs.find("Link h2").text()).toEqual("Go Back!!!!!")
   })

   describe("handling link behaviour", () => {
       const app = shallow(<App />)
       beforeEach(() => {
           aboutUs.find("Link").simulate("click")
       })

       it("Checking link click", () => {
           expect(app.find("UserForm").exists()).toBe(true)
       })
   })
})