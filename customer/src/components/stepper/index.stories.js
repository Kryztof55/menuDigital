import React from 'react';
import HorizontalStepper from './index';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const HorizontalStepperView = () => <HorizontalStepper></HorizontalStepper>;
export default {
    title: 'HorizontalStepper',
    decorators: [withKnobs],
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'iphone6',
        },
    },
};
