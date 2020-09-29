import * as actions from './index'

const sampleData = {name: "MI"}

function createExpectedResponse(type) {
    return {type:type,team: {name: "MI"}}
}

describe("Validating the actions cretaed", () => {


    it("Validating add team action", () => {
        expect(actions.addTeamAction(sampleData)).toEqual(createExpectedResponse(actions.addTeam))
    })

    it("validating remove team action", () => {
        expect(actions.removeTeamAction(sampleData)).toEqual(createExpectedResponse(actions.removeTeam))
    })
})