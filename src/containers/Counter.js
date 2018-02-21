import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { Increment, Decrement } from '../actions/Counter_Action';
import * as action from '../reducers/Counter'; // { counterPlus, counterMinus, jumpTwo, jumpMinusTwo }


class Counter extends Component {

    state = { counter: 0 };

    increment() {
        this.setState({ counter: this.state.counter + 1 });
    }

    decrement() {
        let ctr = this.state.counter === 0 ? 0 : this.state.counter - 1;
        this.setState({ counter: ctr });
    }

    render(){
        return (
            <div>
                <input type='text' value={this.props.counter} />
                <button onClick={() => this.props.actions.counterPlus(1)}>Plus</button>
                <button onClick={() => this.props.actions.counterPlus(5)}>Plus Two</button>
                <button onClick={() => this.props.actions.counterMinus(1)}>Minus</button>
                <button onClick={() => this.props.actions.counterMinus(5)}>Minus Two</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        actions: bindActionCreators(action, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);