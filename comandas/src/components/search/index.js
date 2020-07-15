import React from 'react';
import TextField from '@material-ui/core/TextField';

const Search = () => {
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
        />
    );
};
export default Search;
