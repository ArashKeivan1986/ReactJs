//console.log('Hello World');
import React from 'react' ;
import ReactDOM from 'react-dom';
import './app.css';

class Welcome extends  React.Component{
    render(){
        console.log(this.props);
        return <h1>Hello, {this.props.name}</h1>;
    }
}
class App extends  React.Component{
    render(){
        return (<div className="body">
            <Header title='This is header'/>
            <Main message='This is main'/> 
            <Footer  message='This is footer' />
        </div>);
    }
}
class Header extends React.Component{
    render(){
        return  <header className="header">
                    {this.props.title}
                </header>
    }
}
class Main extends React.Component{
    render(){
        return  <main className="main">
                    {this.props.message}
                </main>
    }
}
class Footer extends React.Component{
    render(){
        return  <footer className="footer">
                    {this.props.message}
                </footer>
    }
}
ReactDOM.render(<App />,document.getElementById('app'));
