import React from 'react'


class App extends React.Component {
  //Extends = Inherit

  constructor(props) {
    super(props);
    this.state = ({
      //State is a object.
      key: 'value',
      name: 'Hamza',
    });
    // this.changeName = this.changeName.bind(this);
  }

  //Javascript has a concept of this.
  //Every function has a different this.
  //setState is always in react 'this'.

  //Function me this ko bind krdo.
    // this.changeName.bind(this)
  //Function ko this se bind krdo constructor ke andar.
    // Constuctor => this.changeName = this.changeName.bind(this);
  //Use arrow functions on event change.
    //=> event trigger: () => this.changeName();
  //Me function ko annonymous bana do. ES6 ke method se.
    //ES6 Method.
  //Arrow Function feature => previous function/class ka "this" milta he.

  //ES5 Method.
  // changeName() {
  //   this.setState({
  //     name: 'Talha',
  //   })
  // }

  //ES6 Method.
  changeName = () => {
    this.setState({
      name: 'Talha',
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.name}
        <br />
        <button onClick={this.changeName}>CHANGE NAME</button>        
      </React.Fragment>
    )
  }
}

export default App;

/* state
  state things set.
  render function => render state.
  setState => state channge
  render function => render state
*/

/*
  Functions
  Call Functions
  State
  set Sate
*/
