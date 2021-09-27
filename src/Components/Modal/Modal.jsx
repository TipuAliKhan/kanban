import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useThemeContext, useThemePreservedContext } from "../../ThemeContext";

import { Constants } from '../../Constant';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BasicModal = ({ open, setOpen }) => {
    
    const [ticket, setTicket] = useThemeContext();
    const [preservedData, setPreservedData] = useThemePreservedContext();

    const [entry, setentry] = useState({
        title: '',
        user: '',
        epic: '',
        type: ''
    });
    const [message, setmessage] = useState('');
    const handleClose = () => setOpen(false);

    const createEntry = () => {
        let flag = true;
        for (let key in entry) {
            if (entry[key].length < 1) {
                flag = false;
                break;
            }
        }
        if (flag) {
            const copyticket = {...ticket};
            const copyData = {...preservedData};
            const newEntry = entry;

            newEntry.id = Math.ceil(Math.random() * 100000);
            copyticket[0].push(newEntry);
            copyData[0].push(newEntry);

            setTicket(copyticket);
            setPreservedData(copyData);
            setentry({
                title: '',
                user: '',
                epic: '',
                type: ''
            });
            handleClose();
        } else {
            setmessage('Please pass all values');
        }
    }

    const handleTitleChange = (event) => {
        setentry({ ...entry, title: event.target.value });
    }

    const handleUserChange = (event) => {
        setentry({ ...entry, user: event.target.value });
    }
    
    const handleEpicChange = (event) => {
        
        setentry({ ...entry, epic: event.target.value });
    }
    
    const handleTypeChange = (event) => {
        setentry({ ...entry, type: event.target.value });
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add Ticket
                    </Typography>
                    <div id="modal-modal-description" sx={{ mt: 2 }}>
                        <div>
                            <label for="title">Title </label>
                            <input id="title" type="text" value={entry.title} onChange={handleTitleChange} />
                        </div>
                        <div>
                            <label for="user">User </label>
                            <input id="user" type="text" value={entry.user} onChange={handleUserChange} />
                        </div>
                        <div>
                            <label for="epic">Epic </label>
                            <select id="epic" value={entry.epic} onChange={handleEpicChange}>
                                {Constants.epic.map(item => <option>{item}</option>)}
                            </select>
                        </div>

                        <div>
                            <label for="type">Type </label>
                            <select id="type" value={entry.type} onChange={handleTypeChange}>
                                {Constants.type.map(item => <option>{item}</option>)}
                            </select>
                        </div>
                        <p style={{ color: 'red' }}>{message}</p>
                        <button onClick={createEntry}>Create</button>
                    </div>
                </Box>
            </Modal>
        </>
    );
}

export default BasicModal;