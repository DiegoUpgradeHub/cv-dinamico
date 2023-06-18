import React from "react";
// import { Link } from "react-router-dom";
import './Core.css';

//Material UI imports
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

//Material UI icons imports
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className="Header">
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '900',
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    borderRadius: 1,
                    bgcolor: 'yellow',
                    color: 'black',
                    '& svg': {
                        m: 1.5,
                    },
                    '& hr': {
                        mx: 0.5,
                    },
                }}
            >
                <Link href="/" className="link" underline="none">
                {/* <Link to="/" className="link" underline="none"> Este es el método utilizando Link de React Router Dom*/}
                    <p to="/" className="button">Home</p>
                </Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/contact" className="link" underline="none">
                {/* <Link to="/contact" className="link" underline="none"> */}
                    <p>Contacto</p>
                </Link>
                <Divider orientation="vertical" flexItem/>
                <Link href="/portfolio" className="link" underline="none">
                {/* <Link to="/portfolio" className="link" underline="none"> */}
                    <p>Portfolio</p>
                </Link>
            </Box>
            <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MenuIcon />
                    {/* <svg data-testid="DeleteIcon"></svg> */}

                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>
                    <Link href="/" className="link" underline="none">
                        <p>Home</p>
                    </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                    <Link href="/contact" className="link" underline="none">
                        <p>Contacto</p>
                    </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                    <Link href="/portfolio" className="link" underline="none">
                        <p>Portfolio</p>
                    </Link>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    )

}

export default Header