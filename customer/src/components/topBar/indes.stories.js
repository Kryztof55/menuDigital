import React from "react";
import TopBar from './index'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const TopBarView = () => (
    <TopBar></TopBar>
  );
export default {
    title: "Top Nav",
    decorators: [withKnobs],
    parameters: {
        viewport: { 
          viewports: INITIAL_VIEWPORTS,
          defaultViewport: 'iphone6' 
        },
      }
};
