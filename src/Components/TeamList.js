import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bake_cookie,read_cookie} from 'sfcookies'

const Teams_Cookie = "Teams_Cookie";

export class TeamList extends Component {

    constructor(props) {
        super();

        this.state = {
            teams: props.teams
        }
    }

    componentDidMount() {
        let teams = read_cookie(Teams_Cookie);

        this.setState({teams})
        console.log("Teams"+this.state.teams)
    }

    onGoBackClick = () => {
        this.props.history.goBack();
    }
    
    render() {
        const {teams} = this.state;
        bake_cookie(Teams_Cookie,this.state.teams);
        return (
            <div>
            {teams.length===0 && <h1>No Team to display, Add some!!!</h1>}
            <div>{teams.map(team => <h1 key={teams.length} className="team-list">{team.name}</h1>)}</div>
            <button style={{marginLeft:20}} onClick={this.onGoBackClick}>Go Back</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        teams: state.teams
    }
}

export default connect(mapStateToProps,null)(TeamList)