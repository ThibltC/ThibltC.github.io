import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';


import Header from './Header'


// const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

// const useStyles = makeStyles((theme) => {
//     console.log(vw)
//     const primary = theme.palette.colors.primary;
//     const secondary = theme.palette.colors.secondary;
//     const active = theme.palette.colors.active;
//     const black = theme.palette.colors.black;
//     return {
//         header: {
//             position: 'absolute',
//             top: 0,
//             height: '170px',
//             width: '100%',
//             transform: 'skewY(45deg)',
//             transformOrigin: 'top right',
//             backgroundImage: `linear-gradient(-90deg, ${black}, ${primary})`,
//             transitionProperty: 'height transform',
//             transitionDuration: '0.5s',
//             boxShadow: `2px 2px 15px black`,
//             '&:hover': {
//                 height: '250px',
//                 transform: 'skewY(10deg)',
//                 '& p': {
//                     transitionProperty: 'top',
//                     transitionDuration: '1s',
//                     display: 'block',
//                     top: 0,
//                     transform: 'skewY(-10deg)'

//                 }
//             },
//             '& p': {
//                 position: 'absolute',
//                 transform: 'skewY(-45deg)',
//                 top: 0,
//                 right: 0,
//             },
//             // '&:hover p': {
//             // }
//         },
//         menuItem: {
//             position: 'absolute',
//             transitionProperty: 'top',
//             transitionDuration: '0.5s',
//             top: -5,
//             right: 0,
//             transform: 'skewY(-10deg)',
//             '&:hover': {
//                 display: 'block',
//                 top: 0
//             },
//         },
//         headerOpen: {
//             position: 'absolute',
//             top: 0,
//             width: '100%',
//             transformOrigin: 'top right',
//             backgroundImage: `linear-gradient(90deg, ${primary}, ${black})`,
//             // transitionProperty: 'height transform',
//             // transitionDuration: '0.5s',
//             boxShadow: `2px 2px 15px black`,
//             height: '250px',
//             transform: 'skewY(10deg)',
//         },
//         div3: {
//             position: 'relative',
//             top: '600px',
//             height: '300px',
//             overflow: 'hidden',
//             width: '100%',
//             // position: 'relative',
//             transform: 'skewY(41deg)',
//             // height: '450px',
//             backgroundImage: `linear-gradient(45deg, ${primary}, ${active})`,
//         },
//         div1: {
//             position: 'absolute',
//             top: 0,
//             bottom: 0,
//             right: 0,
//             left: 0,
//             width: '100%',
//             height: '400px',
//             clipPath: 'polygon(0 0, 0 100%, 60% 100%, 80% 0)',
//             backgroundImage: `linear-gradient(to top, ${black}, ${active}, ${black})`,
//             // transform: 'skewY(6deg)',
//             // transformOrigin: 'top right',
//             // maxWidth: '50px',
//             // margin: '0 4.8595px',
//             // transform: 'skew(11deg) rotate(11deg)',
//             // backgroundColor: 'red',
//         },
//         div2: {
//             // marginTop: '500px',
//             backgroundImage: `linear-gradient(45deg, ${primary}, ${secondary})`,
//             color: 'white',
//             clipPath: 'polygon(0 66%, 60% 0, 80% 0, 0 100%)',
//             // clipPath: 'circle(50px at 100px 100px)',
//             height: '600px',
//             width: '100%'
//             // padding: '10rem 20%',
//         },
//         center: {
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center'
//         }
//     }
// })

const Testobliquediv = () => {

    // useEffect(() => {
    //     const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    //     console.log(vw)
    // }, [window.innerWidth])
    // const classes = useStyles();


    return (
        <div >

            {/* <div className={open ? classes.headerOpen : classes.header} onClick={() => setOpen(!open)}>
                <p className={classes.menuItem}>COUCOU</p>
            </div> */}
            <Header />
            {/* <div className={clsx(classes.div1, classes.center)} >
                <p>azesssssssssssssssssssssssssssssssssssssssssssssssss</p>
            </div>
            <div className={clsx(classes.div3, classes.center)} >
                <p>azesssssssssssssssssssssssssssssssssssssssssssssssss</p>
            </div> */}
        </div>
    );
};

export default Testobliquediv;
