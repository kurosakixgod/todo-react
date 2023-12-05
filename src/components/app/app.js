import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [
                {name: 'Alex', salary: '100', increase: false, rise: false, id: 1},
                {name: 'Alex', salary: '100', increase: false, rise: false, id: 2},
                {name: 'Alex', salary: '100', increase: false, rise: false, id: 3}
            ]
      }
      this.maxId = this.state.data.length + 1
    }

    onToggleProp = (id,prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    addItem = (name,salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        if (newItem.name && newItem.salary) {
            this.setState(({data}) => {
                const newArr = [...data, newItem]
                return {
                    data: newArr
                }
            })
        }
    }

    render() {
        const {data} = this.state;
        const totalEmployees = data.length;
        const increasedEmployees = data.filter(({increase}) => increase).length;
        return (
            <div className="app">
                <AppInfo totalEmployees={totalEmployees} increasedEmployees={increasedEmployees}/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                
                <EmployeesList data={data}
                               onDelete={this.deleteItem}
                               onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;
