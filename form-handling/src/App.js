import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      color :"",
    }
  }
  handleBioChange = (e) => {
    const bio = e.target.value;
    this.setState({color: bio });
  };
  render() {
    return (
      <form>
      <label>Desired color:</label>
      <select multiple={true} value={['blue', 'red']}>
        <option></option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
    </form>
    )
  }
}

export default App;