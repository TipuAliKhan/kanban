import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import { useThemeContext, useThemePreservedContext } from "../../ThemeContext";

const ITEM_HEIGHT = 45;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const MultiSelect = ({ title, data }) => {
    const [ticket, setTicket] = useThemeContext();
    const [preservedData, setPreservedData] = useThemePreservedContext();

    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        let { target: { value } } = event;
        if (value.length) {

            setPersonName(typeof value === 'string' ? value.split(',') : value);
            const copyData = {...preservedData};
            value = value.join(' ').toLowerCase().split(' ');

            for (const key in copyData) {
                copyData[key] = copyData[key].filter(item => value.includes(item[title].toLowerCase()));
            }
            setTicket({...ticket, ...copyData});
        }
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }} style={{ border: '1px solid white' }}>
                <InputLabel id="demo-multiple-checkbox-label" style={{ color: 'white' }}>{title}</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    style={{ color: 'white' }}
                >
                    {data.map((name) => (
                        <MenuItem key={name} value={name} >
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default MultiSelect;