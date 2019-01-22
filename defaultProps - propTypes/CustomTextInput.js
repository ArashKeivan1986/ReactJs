import React, { Component } from 'react';
import PropTypes from 'prop-types';
class CustomTextInput extends Component {
    
    /*static defaultProps = {
        name : "Elham"
    }*/
    
    static propTypes = {
        name : PropTypes.string.isRequired,
        children : PropTypes.element.isRequired
    }

    constructor(props) {
        super(props);
        console.log(this.props.name);
    }
    render() {
        return (
            <div>
                <input type="text" ref={(node) => this.textInput = node}/>
                <button onClick={this.focusTextInput.bind(this)}>Focus the text input</button>
            </div>
        );
    }

    focusTextInput() {
        this.textInput.focus();
    }
}

export default CustomTextInput;
