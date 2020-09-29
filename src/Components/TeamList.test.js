import React from 'react'
import {shallow} from 'enzyme'
import {TeamList} from './TeamList'

const props = {teams: [{name: "MI"},{name: "CSK"}]}
const historyMock = {goBack: jest.fn()}

describe("Rendering of teams list", () => {
const teamList = shallow(<TeamList {...props} history={historyMock}/>)

    it("Checking the length of number of teams rendered", () => {
        expect(teamList.find(".team-list").length).toEqual(props.teams.length)
    })

    it("Checking rendering of button", () => {
        expect(teamList.find("button").exists()).toBe(true)
    })

    beforeEach(() => {
        teamList.find("button").simulate("click")
    })

    it("Validating button click", () => {
        expect(historyMock.goBack).toHaveBeenCalled();   //For testing mock of goBack
    })

    describe("Checking no teams headre", () => {
        beforeEach(() => {
            teamList.setState({teams: []})
        })
    
        it("Validating no teams header", () => {
            expect(teamList.find("h1").at(0).text()).toEqual("No Team to display, Add some!!!")
        })
    })
 
})