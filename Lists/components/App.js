import React from 'react';
import Articles from "./Articles";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles : []
        }
    }

    componentDidMount() {
        // Api
        setTimeout(() => {
            this.setState({
                articles : [
                    {id: 1 , title : 'article one'},
                    {id: 2 , title : 'article two'},
                    {id: 3 , title : 'article three'},
                    {id: 4 , title : 'article four'},
                    {id: 5 , title : 'article five'}
                ]
            })
        },2000)
    }

    render() {
        return (
            <div className="body">
                <h1>My List App</h1>
                <hr/>
                <Articles articles={this.state.articles}/>
            </div>
        )
    }
}