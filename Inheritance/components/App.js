import React from 'react';
import Alert,{/*AlertGroup,*/AlertSuccess,AlertDanger,AlertWarning} from "./Alert";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>My App</h1>
                <hr/>
                {/*<AlertGroup class='alert alert-warning'>
                    <Alert class='alert alert-success'>
                        Hello Arash success
                    </Alert>
                    <Alert class='alert alert-danger'>
                        Hello Arash danger
                    </Alert>
                    <Alert class='alert alert-warning'>
                        Hello Arash warning
                    </Alert>
                </AlertGroup>*/}
                <AlertSuccess>
                        Hello Arash AlertSuccess
                </AlertSuccess>
                <AlertDanger>
                        Hello Arash AlertDanger
                </AlertDanger>
                <AlertWarning>
                        Hello Arash AlertWarning
                </AlertWarning>
                
            </div>
        )
    }
}