import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {increaseCounter} from "../Redux/Actions/counterActions"

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{this.props.dispatch(increaseCounter())}}> 1 arttir</button>
            </div>
        );
    }
} 

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseCounter);