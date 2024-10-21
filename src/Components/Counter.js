import React, { Component } from 'react';
import { connect } from 'react-redux';
class Counter extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.counter}</h3>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {counter:state.counterReducer}
}

export default connect(mapStateToProps)(Counter);