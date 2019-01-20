import React from 'react';
import UserPanel from "./UserPanel";

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>My App</h1>
                <hr/>
                <UserPanel />
            </div>
        )
    }
}