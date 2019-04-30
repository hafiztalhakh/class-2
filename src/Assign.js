import React from 'react';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="App-header"><a href="#" className="test" onClick={this.changeText}>{this.state.text}</a></h1>
            </React.Fragment>
        )
    }
    constructor(props) {
        super(props);
        this.state = ({
          text: 'Hello World',
        });
        // this.changeName = this.changeName.bind(this);
      }
      changeText = () => {
        if(this.state.text==="Hello World"){
            this.setState({
                text: 'Hello Pakistan',
              })
        }
        else if(this.state.text==="Hello Pakistan"){
            this.setState({
                text: 'Hello World',
              })
        }
        else{
            document.write("kuch to garbar hai DAYA!!")
        }
      }
}
export default App;