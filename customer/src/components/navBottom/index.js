import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import FastfoodIcon from '@material-ui/icons/Fastfood';

const useStyles = makeStyles({
  root: {
    width: `100%`,
  },
});

const NavBottom = ()=> {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Inicio" icon={<HomeIcon />} />
      <BottomNavigationAction label="Orden" icon={<AlarmOnIcon />} />
      <BottomNavigationAction label="Menú" icon={<FastfoodIcon />} />
    </BottomNavigation>
  );
}

export default NavBottom