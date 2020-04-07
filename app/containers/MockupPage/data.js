import React from 'react';
import axios from 'axios';

class Data extends React.Component {
  state = {
    total: 0,
    peoples: [],
  };

  componentDidMount() {
    axios.get(`https://swapi.co/api/people`).then(res => {
      this.setState({
        peoples: res.data.results,
        total: res.data.count,
      });
    });
  }

  render() {
    const { total, peoples } = this.state;
    return (
      <div className="mb-4 card active-user" style={{ width: '18rem' }}>
        <div className="card-body">
          <h6>Active User Right Now</h6>
          <div className="card-subtitle mb-2" style={{ fontSize: '50px' }}>
            {total}
          </div>
          <div className="card-text">Page view per minutes</div>
          <hr />
          <table className="table table-sm table-user">
            <thead>
              <tr>
                <th scope="col">Top Active Page</th>
                <th scope="col">Active User</th>
              </tr>
            </thead>
            <tbody>
              {peoples.map(p => (
                <tr>
                  <td>{p.name}</td>
                  <td className="text-right">{p.mass}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Data;
