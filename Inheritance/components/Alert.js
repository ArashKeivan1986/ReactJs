import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Alert extends Component
{
    constructor (props)
    {
        super(props);
        this.className = 'alert';
    }
    render() {
        return (
            <div className={this.className} >
                {this.props.children}
            </div>
            
        );
    }
}

{/*export class AlertGroup extends Component {
    state = {  }
    render() {
        return (
            <div style={{display:'flex' , backgroundColor:'#266' , justifyContent:'center' }}>
                {this.props.children}
            </div>
        );
    }
}*/}

export class AlertSuccess extends Alert {
    constructor (props)
    {
        super(props);
        this.className = this.className + ' alert-success';
    }   
}

export class AlertDanger extends Alert {
    constructor (props)
    {
        super(props);
        this.className = this.className + ' alert-danger';
    }   
}

export class AlertWarning extends Alert {
    constructor (props)
    {
        super(props);
        this.className = this.className + ' alert-warning';
    }   
    render()
    {
        return (
            super.render()
        )
    }
}

export default Alert;