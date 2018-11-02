import React from 'react';

class App extends React.Component {

    state = {
        peopleInSpace:[]
    }
   

    render(){
        return(
            <div>
                {this.state.peopleInSpace.map((person, idx) => <h1 key={idx}>{person.name}</h1>)}
            </div>
            )
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(({people}) => this.setState({ peopleInSpace: people }))
     }

}

export default App;