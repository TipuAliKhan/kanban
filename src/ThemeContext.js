import React, { useState, useContext } from 'react';
import { Data } from './Constant';

const ThemeContext = React.createContext();
const ThemePreservedContext = React.createContext();

export const useThemeContext = () => {
    return useContext(ThemeContext);
}
export const useThemePreservedContext = () => {
    return useContext(ThemePreservedContext);
}

export function ThemeProvider({ children }) {
    const [data, setData] = useState(Data);

    const [preservedData, setPreservedData] = useState(Data);
    
    return (
        <ThemeContext.Provider value={[data, setData]}>
            <ThemePreservedContext.Provider value={[preservedData, setPreservedData]}>
                {children}
            </ThemePreservedContext.Provider>
        </ThemeContext.Provider>
    )
}