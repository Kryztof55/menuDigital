import React from 'react';
import Search from './index';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const SearchView = () => <Search></Search>;
export default {
    title: 'Search',
    decorators: [withKnobs],
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'iphone6',
        },
    },
};
