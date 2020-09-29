import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class AboutUs extends Component {
    render() {
        return (
            <div>
            <h1>Bunch of hippies!!!!</h1>
            <Link to="/"><h2>Go Back!!!!!</h2></Link>
            </div>
        )
    }
}