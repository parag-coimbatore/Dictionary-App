import { createTheme, MenuItem, TextField, ThemeProvider } from '@mui/material'
import React from 'react'
import "./Header.css"
import categories from '../../data/category'

const Header = ({ category, setCategory ,word, setWord}) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            mode: "dark",
        },
    });

    return (
        <div className='header'>
            <span className='title'>SHABDKOSH</span>
            <span className='below-text'>Your word:- {word? word: "....."}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                        className="search" 
                        label="Search a word"  
                        label="Standard" 
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                        variant="standard" 
                    />
                    <TextField
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {
                            categories.map((option) => (
                                <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                            ))
                        }


                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header