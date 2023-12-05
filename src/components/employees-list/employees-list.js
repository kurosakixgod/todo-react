import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data,onDelete, onIncrease, onRise, onToggleProp}) => {
    const elements = data.map(element => {
        const {id, ...elementProps} = element;
        return (
            <EmployeesListItem key={id} {...elementProps}
                               onDelete={() => onDelete(id)}
                               onIncrease={() => onIncrease(id)}
                               onRise={() => onRise(id)}
                               onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-prop'))} />
        );
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>   
    )
}

export default EmployeesList;