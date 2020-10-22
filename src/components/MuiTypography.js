import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const StyledTypography = withStyles(theme => ({
    root: {
        color: theme.palette.colors.white,
        fontFamily: 'Wremena',
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    // colorTextPrimary: {
    //     color: theme.palette.colors.black
    // },
    // colorTextSecondary: {
    //     color: theme.palette.colors.white,
    // },
    h1: {
        color: theme.palette.colors.active,
        fontFamily: 'Neil',
        fontSize: '8rem',
        margin: 0,
    },
    h2: {
        fontSize: '3rem',
    },
    body1: {
        fontSize: '20px',
    }
}))(Typography);

export default StyledTypography;
