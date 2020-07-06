import React from 'react';
import CardDrink from './index';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const CardDrinkView = () => (
    <CardDrink
        imgUrl="/img/paella.jpg"
        title="Desaynos"
        hightlight="Desayunos"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></CardDrink>
);
export default {
    title: 'CardDrink',
    decorators: [withKnobs],
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'iphone6',
        },
    },
};
