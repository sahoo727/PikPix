import React from 'react';
import { Grid, MenuItem, TextField } from '@mui/material';


function Input({name, handleChange, label, autoFocus, placeholder, type, select, options, half}) {
  return (
    <Grid item xs={12} sm={half ? 6 : 12} >
        <TextField 
            name={name}
            onChange={handleChange}
            variant='outlined'
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            placeholder={placeholder}
            type={type}
            select={select}
            InputLabelProps={{ shrink: true }}
        >

          {name === 'gender' ? 
            options.map((option) => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            )) :
            null
          }

        </TextField>
    </Grid>
  )
}

export default Input