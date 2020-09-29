import {teamReducer} from './index'
import * as actions from "../Actions/index"

describe("Validating reducer", () => {

    it("Validating default reducer response", () => {
        expect(teamReducer({},{})).toEqual({})
    })

    it("Validating add team reducer", () => {
        expect(teamReducer({teams: []},actions.addTeamAction({name: "MI"}))).toEqual({teams: [{name: "MI"}]})
    })

    it("Validating remove team reducer", () => {
        expect(teamReducer({teams: [{name:"MI"}]},actions.removeTeamAction({name: "MI"}))).toEqual({teams: []})
    })
})