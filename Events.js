//Events   By Arash Keivan
import React from 'react';
import  ReactDOM from 'react-dom';

class App extends React.Component{
    render(){
        return(
            <div className='body'>
            <Counter />
            </div>
        )
    }
}


class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }

    increment(e){
        /*this.setState({
                count : this.state.count + 1
            })*/
        this.setState((prevState)=> ({
            count : prevState.count + 1
        }))    
    }
       
    decrement(e){
        this.setState((prevState)=>({
            count : prevState.count - 1
        }))
    }

    render(){
        return(
            <div>
                <p>Clicked: {this.state.count} times</p>
                <button onClick={ this.increment.bind(this)  /*(e) => this.increment(e)*/  } >Increment</button>
                <button onClick={ this.decrement.bind(this)  /*(e) => this.decrement(e)*/  }>Decrement</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,document.getElementById('app')
)
