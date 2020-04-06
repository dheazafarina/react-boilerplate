import React from 'react';
import axios from 'axios';

class Data extends React.Component {
  state = {
    // persons: [],
  };

  componentDidMount() {
    axios.get(`https://swapi.co/api/people/1`).then(res => {
      console.log(res);
      //   const persons = res.data;
      //   this.setState({ persons });
    });
  }

  render() {
    return <div />;
  }
}

export default Data;
