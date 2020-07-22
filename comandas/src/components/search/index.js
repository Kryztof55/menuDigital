import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginTop: ' 100px !important',
        marginLeft: ' 0!important',
        marginBottom: '40px !important',
        marginRight: ' 0!important',
    },
});
const Search = () => {
    const classes = useStyles();
    return (
        <TextField
            id="standard-full-width"
            label="Mesa"
            style={{ margin: 8 }}
            placeholder="Buscar..."
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
            className={classes.root}
        />
    );
};
export default Search;
