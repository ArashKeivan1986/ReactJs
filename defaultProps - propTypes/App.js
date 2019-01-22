import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomTextInput from "./CustomTextInput";

export default class App extends React.Component {

    componentDidMount() {
        this.textInput.focusTextInput();
    }

    render() {
        return (
            <div className="container">
                <h1>My App</h1>
                <hr/>
                <CustomTextInput ref={(node) => this.textInput = node} name="Arash K1">
                    <div>Arashi</div>
                </CustomTextInput>
            </div>
        )
    }
}