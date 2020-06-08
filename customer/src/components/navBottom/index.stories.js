import React from "react";
import NavBottom from './index'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const NavBottomView = () => (
    <NavBottom></NavBottom>
  );
export default {
    title: "Nav Bottom",
    decorators: [withKnobs],
    parameters: {
        viewport: { 
          viewports: INITIAL_VIEWPORTS,
          defaultViewport: 'iphone6' 
        },
      }
};
