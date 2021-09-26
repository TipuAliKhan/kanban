import React, { useState, useEffect } from 'react';
import MultiSelect from '../MultiSelect/MultiSelect';
import Button from '@mui/material/Button';
import { Constants } from '../../Constant';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import BasicModal from '../Modal/Modal';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const Header = ({ data, setTicket }) => {
    const [user, setUser] = useState([]);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        let users = [];
        for (const key in data) {
            data[key].forEach(entry => users.push(entry.user));
        }
        setUser([...new Set(users)]);
    }, []);

    const handleChange = (event) => {
        if (event.target.value.length > 2) {
            let copyData = data;
            for (const key in copyData) {
                copyData[key] = copyData[key].filter(item => item.title.toLowerCase().includes(event.target.value.toLowerCase()));
            }
            setTicket(copyData);
        }
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="sticky">
                    <Toolbar >
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={handleChange}
                            />
                        </Search>
                        <MultiSelect title="epic" data={Constants.epic} ticket={data} setTicket={setTicket} />
                        <MultiSelect title="user" data={user} ticket={data} setTicket={setTicket} />
                        <MultiSelect title="type" data={Constants.type} ticket={data} setTicket={setTicket} />
                        <Button variant="contained">Clear Filter</Button>
                        <Button variant="contained" onClick={() => setOpen(true)}>Create Item</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <BasicModal open={open} setOpen={setOpen} data={data} setTicket={setTicket}/>
        </>
    )
}

export default Header;