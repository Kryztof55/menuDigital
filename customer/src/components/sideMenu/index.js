import React, { useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';

const SideMenu = ({ children }) => {
    const [state, setState] = useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };

    return (
        <div>
            <React.Fragment>
                <Button onClick={toggleDrawer('right', true)}>'right'</Button>
                <SwipeableDrawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    onOpen={toggleDrawer('right', true)}>
                    {children}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
};

export default SideMenu;
