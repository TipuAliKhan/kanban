import React, { useState, useEffect } from "react";
import './kanban.style.css';
import PersonIcon from '@mui/icons-material/Person';

import { States } from '../../Constant';

const Kanban = ({ data, setData }) => {
    const [ticket, setTicket] = useState(data)
    const handleChangeState = (event, id, currentState) => {
        try {
            let copyData = { ...ticket };
            const updatedCard = ticket[currentState].filter(item => item.id === id);
            const updatedState = ticket[currentState].filter(item => item.id !== id);
            copyData[currentState] = updatedState;
            copyData[event.target.value].push(updatedCard[0]);

            setTicket(copyData);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setData(ticket);        
    }, [ticket])
    return (
        <ul className="container">
            {Object.keys(States)
            .map(item => parseInt(item))
            .map(state => (
                <li key={Math.ceil(Math.random() * 100000)}>
                    <h1>
                        {States[state]}
                    </h1>
                    {
                        (ticket[state] !== undefined) ? (<ul className="card-list">
                            {ticket[state].map(item => (
                                <li className="card" key={item.id}>
                                    <h5>{item.type}</h5>
                                    <h2>{item.title}</h2>
                                    <h4><PersonIcon /> {item.user}</h4>
                                    <select onChange={(e) => handleChangeState(e, item.id, state)}>
                                        <option key={Math.ceil(Math.random() * 100000)}>Action</option>
                                        {
                                            Object.keys(States).filter(key => key != state)
                                                .map(item => <option value={item} key={Math.ceil(Math.random() * 100000)}>{States[item]}</option>)
                                        }
                                    </select>
                                </li>
                            ))}
                        </ul>
                        ) : null}
                </li>
            ))}
        </ul>
    )
}

export default Kanban;