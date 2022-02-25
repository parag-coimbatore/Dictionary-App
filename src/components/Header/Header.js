import { createTheme, MenuItem, TextField, ThemeProvider } from '@mui/material'
import React from 'react'
import "./Header.css"

const Header = () => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#000000"
            },
            mode: 'dark',
        },
    });

    return (
        <div className='header'>
            <span className='title'>SHABDKOSH</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                    <TextField
                        id="filled-select-currency"
                        select
                        label="Select"
                        helperText="Please select your currency"
                        variant="filled"
                    >
                        
                            <MenuItem >
                                English
                            </MenuItem>
                     
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header