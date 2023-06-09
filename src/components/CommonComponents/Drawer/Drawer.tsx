import { KeyboardEvent, MouseEvent } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AppsIcon from '@mui/icons-material/Apps';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import { Button } from '@mui/base';
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './Drawer.css';

interface NavDrawerProps {
    drawerState: boolean;
    setDrawerState: (x: boolean) => any;
}

const NavDrawer: React.FC<NavDrawerProps> = ({ drawerState, setDrawerState }) => {
    const navigate = useNavigate();

    const navigateToDesiredPath = (path: string) => {
        navigate(path);
    }

    const toggleDrawer =
        (open: boolean) =>
            (event: KeyboardEvent | MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as KeyboardEvent).key === 'Tab' ||
                        (event as KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setDrawerState(open);
            };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigateToDesiredPath('')}>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Dashboard'} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                {['Applications', 'Resources'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => index % 2 === 0 ? navigateToDesiredPath('applications') : navigateToDesiredPath('resources')}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <AppsIcon /> : <WebAssetIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div className={drawerState ? `mainContainer openDrawer` : `mainContainer closeDrawer`}>
            <Button className='toggleButton' onClick={toggleDrawer(!drawerState)}>{drawerState ? <ChevronLeftIcon /> : <ChevronRightIcon />}</Button>
            <Drawer
                anchor={"left"}
                open={drawerState}
                onClose={toggleDrawer(false)}
                hideBackdrop
                className='drawer'
            >
                {list()}
            </Drawer>
        </div>
    );
}

export default NavDrawer;