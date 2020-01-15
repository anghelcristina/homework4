import React, { Component } from 'react';
import RobotStore from '../stores/RobotStore';

class RobotForm extends Component{
    constructor(){
        super();
        this.name="Bill";
        this.type="talker";
        this.mass=980;
        this.onAdd=function(e){
            RobotStore.addRobot(this);
        };
    }
    render(){
        // let item=this.props;
        return(
            this   
        );
    }
}