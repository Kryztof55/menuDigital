import React from 'react';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import EcoIcon from '@material-ui/icons/Eco';
import CakeIcon from '@material-ui/icons/Cake';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import FastfoodIcon from '@material-ui/icons/Fastfood';

const menu = [
    {
        text: 'Bebidas',
        icon: <LocalBarIcon />,
    },
    {
        text: 'Entradas',
        icon: <EcoIcon />,
    },
    {
        text: 'Ensaladas',
        icon: <EcoIcon />,
    },
    {
        text: 'Aperitivos',
        icon: <FastfoodIcon />,
    },
    {
        text: 'Platos fuertes',
        icon: <RestaurantMenuIcon />,
    },
    {
        text: 'Postres',
        icon: <CakeIcon />,
    },
];

export default menu;
