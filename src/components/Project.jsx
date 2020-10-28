import { makeStyles } from '@material-ui/core/styles';
import Typography from '../materialUI/MuiTypography';


const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: theme.spacing(2),
        '&:hover img': {
            cursor: 'pointer',
            transform: 'scale(1.1)',
            filter: 'brightness(20%)',
        },
        '& h6': {
            opacity: 0,
            transition: 'opacity 0.5s',
        },    
        '&:hover h6': {
            opacity: 1,
        }
    },
    image: {
        height: '300px',
        width: '500px',
        objectFit: 'cover',
        filter: 'brightness(50%)',
        transition: 'transform 0.5s, filter 0.5s',
    },
    title: {
        position: 'absolute',
        top: '40%',
        alignSelf: 'center',
        '&:hover': {
            cursor: 'pointer',
        }
    }
}));

const Project = (props) => {

    const { src, title, url } = props;

    const classes = useStyles();


    return (
        <div className={classes.root} onClick={() => window.open(url)}>
            <img src={src} alt='img-project' className={classes.image} />
            <Typography variant='subtitle1' className={classes.title}>{title}</Typography>
        </div>
    );
};

export default Project;
