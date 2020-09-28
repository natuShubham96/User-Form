import {addTeam, removeTeam} from '../Actions'

const initialState = {
    teams: []
}

export function teamReducer(state=initialState,action) {
    switch(action.type) {
        case addTeam :
            state.teams.push(action.team)
            return state;
        case removeTeam :
            state.teams = state.teams.filter((t) => t.name!==action.team.name)
            return state;
        default:
            return state;
    }
}