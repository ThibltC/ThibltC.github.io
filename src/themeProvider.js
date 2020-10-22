import { createMuiTheme } from '@material-ui/core/styles';

const black = 'rgb(0, 0, 0)';
const primary = 'rgb(58, 0, 0)';
const secondary = 'rgb(110, 0, 0)';
const active = 'rgb(224, 146, 0)';
const white = 'rgb(255, 226, 173)';

const opacity = (color) => {
    const v = color.match(/\d+/g)
    const opacityList = [...new Array(11)];
    return opacityList.map((_, i) => {
        const value = i / 10
        return `rgba(${v[0]},${v[1]},${v[2]},${value})`
    });
};


export const mainTheme = createMuiTheme({
    palette: {
        colors: {
            primary,
            secondary,
            active,
            black,
            white
        },
        opacity: {
            primary: opacity(primary),
            secondary: opacity(secondary),
            validate: opacity(active),
            black: opacity(black),
            white: opacity(white)
        }
    }
});
