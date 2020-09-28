export const addTeam = "ADD_TEAM";
export const removeTeam = "REMOVE_TEAM";

export function addTeamAction(team) {
    return {
        type: addTeam,
        team: team
    }
}

export function removeTeamAction(team) {
    return {
        type: removeTeam,
        team: team
    }
}