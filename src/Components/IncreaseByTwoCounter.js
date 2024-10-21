import React, { Component } from 'react';
import { increaseByTwoCounter } from '../Redux/Actions/counterActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                 <button onClick={e=>{this.props.dispatch(increaseByTwoCounter())}}> 2 arttir</button>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseByTwoCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);