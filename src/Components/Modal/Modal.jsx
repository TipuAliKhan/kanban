import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


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

const BasicModal = ({ open, setOpen, data, setTicket }) => {
    const [entry, setentry] = useState({
        title: '',
        user: '',
        epic: '',
        type: ''
    });
    const [message, setmessage] = useState('');
    const handleOpen = () => setOpen(true);
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
            const copyData = data;
            const newEntry = entry;

            newEntry.id = Math.ceil(Math.random() * 100000);
            copyData[0].push(newEntry);

            setTicket(copyData);
            setentry({
                title: '',
                user: '',
                epic: '',
                type: ''
            })
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
            <Button onClick={handleOpen}>Open modal</Button>
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
                            <label>Title    </label>
                            <input type="text" value={entry.title} onChange={handleTitleChange} />
                        </div>
                        <div>
                            <label>User </label>
                            <input type="text" value={entry.user} onChange={handleUserChange} />
                        </div>
                        <div>
                            <label>Epic </label>
                            <select value={entry.epic} onChange={handleEpicChange}>
                                {Constants.epic.map(item => <option>{item}</option>)}
                            </select>
                        </div>

                        <div>
                            <label>Type </label>
                            <select value={entry.type} onChange={handleTypeChange}>
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