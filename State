import React from 'react' ;
import ReactDOM from 'react-dom';

class App extends React.Component{
    render(){
        return( <div className='body'>
                   <Clock  date={new Date()} />
                </div>
        )
    }
}

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date : new Date()
        }        
    }

    componentDidMount(){
        this.timerID = setInterval(()=> { 
            this.setState({
                date : new Date()
            });
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    render(){
        return (<div>
                    <h1>Hello Arash</h1> 
                    <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                </div>)
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
