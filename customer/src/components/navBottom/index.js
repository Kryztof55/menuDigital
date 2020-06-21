import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Menu from '../../utils/menu';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    navBottom: {
        position: 'fixed',
        width: '100%',
        bottom: 0,
    },
});

const NavBottom = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const [state, setState] = useState({
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };
    return (
        <Paper elevation={3} square className={classes.navBottom}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}>
                <BottomNavigationAction label="Inicio" icon={<HomeIcon />} />
                <BottomNavigationAction label="Orden" icon={<AlarmOnIcon />} />
                <BottomNavigationAction
                    onClick={toggleDrawer('right', true)}
                    label="Menú"
                    icon={<FastfoodIcon />}
                />
            </BottomNavigation>
            <SwipeableDrawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}>
                <List>
                    {Menu.map((item, index) => (
                        <ListItem
                            button
                            onClick={toggleDrawer('right', false)}
                            key={item.text}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
        </Paper>
    );
};

export default NavBottom;
