import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class UserPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            name : '',
            type : 'user',
            description : ''
        }
    }

    changeFieldValue(event)
    {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
      }
    
    render() { 
        return (  
            <div className='container'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className='form-group'>
                        <label>Name: </label>
                        <input type='text'  className='form-control' name='name' value={this.state.name} onChange={this.changeFieldValue.bind(this)} />
                    </div>    
                    <div className='form-group'>    
                        <label>Type: </label>
                        <select value={this.state.type} className='form-control' name='type' onChange={this.changeFieldValue.bind(this)}>
                            <option value='user'>admin</option>
                            <option value='admin'>user</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Description: </label>
                        <textarea type='text' value={this.state.description} className='form-control' name='description' onChange={this.changeFieldValue.bind(this)} />
                    </div>
                    <div className='form-group'>
                        <button className='btn' >Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default UserPanel;
