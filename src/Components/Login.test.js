import React from 'react'
import {shallow} from 'enzyme'
import {LogIn} from "./LogIn"

const props = {addTeamAction: jest.fn(), removeTeamAction: jest.fn()};
const historyMock = {push: jest.fn()};

describe("Testing Aftre Login Form", () => {

    const login = shallow(<LogIn {...props} history={historyMock}/>)

    it("Checking form group render for add team", () => {
        expect(login.find("FormGroup").at(0).exists()).toBe(true)
    })

    it("Checking form group render for remove team", () => {
        expect(login.find("FormGroup").at(1).exists()).toBe(true)
    })

    it("Checking form control render for add team", () => {
        expect(login.find("FormControl").at(0).exists()).toBe(true)
    })

    it("Checking form control render for remove team", () => {
        expect(login.find("FormControl").at(1).exists()).toBe(true)
    })

    describe("Checking text change for add team", () => {
        beforeEach(() => {
            login.find("FormControl").at(0).simulate("change", {
                target: {value: "MI"}
            })
        })

        it("Validate added team change name", () => {
            expect(login.state().teamName).toEqual("MI")
        })
    })

    describe("Checking text change for remove team", () => {
        beforeEach(() => {
            login.find("FormControl").at(1).simulate("change", {
                target: {value: "MI"}
            })

            it("Validate removed team change name", () => {
                expect(login.state().removeTeamName).toEqual("MI")
            })
        })
    })

    describe("Testing for add team button", () => {

        it("Checking button render for add team", () => {
            expect(login.find("Button").at(0).exists()).toBe(true)
        })

        const jsdomAlert = window.alert;  // remember the jsdom alert
        window.alert = jest.fn(() => ({}));  // provide an empty implementation for window.alert

        beforeEach(() => {
            login.find("Button").at(0).simulate("click")
        })

        window.alert = jsdomAlert; 

    })

    describe("Testing for remove team button", () => {

        it("Checking button render for remove team", () => {
            expect(login.find("Button").at(1).exists()).toBe(true)
        })

        beforeEach(() => {
            login.find("Button").at(1).simulate("click")
        })

        it("Checking state", () => {
            expect(login.state().removeTeamName).toEqual("")
        })
    })

    describe("Testing for display button", () => {
        
        it("Checking render of the button", () => {
            expect(login.find("Button").at(2).exists()).toBe(true)
        })

        beforeEach(() => {
            login.find("Button").at(2).simulate("click")
        })

        it("Checking on button click", () => {
            expect(historyMock.push.mock.calls[0]).toEqual([ ('/DisplayTeams') ]);  //Checking url pushed via history function received in props via react-router
        })

    })
})