import React from 'react';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            time: new Date()
        }
    }
    upDateTime = () =>{
        this.setState({
            time: new Date()
        })
    }
    intervalid = setInterval(this.upDateTime,1000)

    render() {
        return(
            <div className='time'>
                <h2>Время сейчас <br></br> {this.state.time.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
export default App;