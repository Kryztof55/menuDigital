import React from 'react';
import CardHightlight from './index';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const CardHightlightView = () => (
    <CardHightlight
        imgUrl="/img/paella.jpg"
        title="Desaynos"
        hightlight="Desayunos"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></CardHightlight>
);
export default {
    title: 'CardHightlight',
    decorators: [withKnobs],
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'iphone6',
        },
    },
};
