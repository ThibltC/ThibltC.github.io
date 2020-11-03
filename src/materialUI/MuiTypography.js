import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const StyledTypography = withStyles(theme => ({
    root: {
        color: theme.palette.colors.white,
        fontFamily: 'Wremena',
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    colorTextPrimary: {
        color: theme.palette.colors.active
    },
    colorTextSecondary: {
        color: theme.palette.colors.white,
    },
    h1: {
        fontFamily: 'Neil',
        fontSize: 'max(10vw, 70px)',
        margin: 0,
        textAlign: 'center'
    },
    h2: {
        fontSize: 'max(4vw, 25px)',
        textAlign: 'center'
    },
    h3: {
        fontFamily: 'Neil',
        fontSize: '4rem',
    },
    body1: {
        fontSize: '15px',
    },
    subtitle1: {
        fontSize: '2rem',
    }
}))(Typography);

export default StyledTypography;
