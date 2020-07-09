import React from 'react';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import EcoIcon from '@material-ui/icons/Eco';
import CakeIcon from '@material-ui/icons/Cake';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
const menu = [
    {
        text: 'Bebidas',
        icon: <LocalBarIcon />,
    },
    {
        text: 'Entradas',
        icon: <RestaurantMenuIcon />,
    },
    {
        text: 'Ensaladas',
        icon: <EcoIcon />,
    },
    {
        text: 'Aperitivos',
        icon: <LocalPizzaIcon />,
    },
    {
        text: 'Platos fuertes',
        icon: <FastfoodIcon />,
    },
    {
        text: 'Postres',
        icon: <CakeIcon />,
    },
];

export default menu;
