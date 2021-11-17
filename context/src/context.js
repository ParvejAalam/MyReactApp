import React from 'react';

export const themes = {
    dark: {
        backgroundColor: "#000",
        textColor: "#FFF",
    },
    light: {
        backgroundColor: "#FFF",
        textColor: "#000",
    }
}

export const UserContext = React.createContext({
    theme: themes.dark,
    toggleButton: () =>{}
});