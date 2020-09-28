import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Form,FormGroup,FormControl,Button, Row,Col} from 'react-bootstrap'
import {addTeamAction,removeTeamAction} from '../Actions'

class LogIn extends Component {

    constructor() {
        super();

        this.state = {
            teamName: '',
            removeTeamName: ''
        }
    }

    onAddTeamClick = () => {
        this.props.addTeamAction({name: this.state.teamName})
        alert("Team Added")
        this.setState({teamName: ''})
    }
    onDisplayTeamClick = () => {
this.props.history.push('/DisplayTeams')
    }
    onAddTeamChange = (event) => {
       this.setState({teamName: event.target.value})
    }
    onRemoveTeamChange = (event) => {
        this.setState({removeTeamName: event.target.value})
    }
    onRemoveTeamClick = () => {
        this.props.removeTeamAction({name: this.state.removeTeamName})
        alert("Team Removed")
        this.setState({removeTeamName: ''})
    }
    render() {
        return (
            <div>
            <h1>Let's Get In Action</h1>
            <Form>
                <FormGroup as={Row}>
               <Col sm="5"><FormControl type="text" placeholder="Enter Team Name Here" value={this.state.teamName} onChange={this.onAddTeamChange}></FormControl></Col>
               <Button onClick={this.onAddTeamClick}>Add Team</Button>
                </FormGroup>
                <FormGroup as={Row}>
               <Col sm="5"><FormControl type="text" placeholder="Enter Team Name Here" value={this.state.removeTeamName} onChange={this.onRemoveTeamChange}></FormControl></Col>
               <Button onClick={this.onRemoveTeamClick}>Remove Team</Button>
                </FormGroup>
                <Button onClick={this.onDisplayTeamClick}>Display team list</Button>
            </Form>
            </div>
        )
    }
}

export default connect(null,{addTeamAction,removeTeamAction})(LogIn);