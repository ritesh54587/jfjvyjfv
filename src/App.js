import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      employees:null
    }
  }
  render() {
    return (
      <div>
        <h2>Employees Data...</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>         
          </tbody>
        </table>
      </div>
      );
    }

    {this.state.employees.map(emp => (
      <tr key={emp.id}>
        <td>{emp.first_name}</td>
        <td>{emp.last_name}</td>
        <td>{emp.email}</td>
        
        </tr>
))}
  componentDidMount()
  {
    Fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            employees: result
          });
        }
      );
}

export default App;
