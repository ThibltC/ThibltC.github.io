import { useEffect, useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useSizeWindow = () => {

    const over1000 = useMediaQuery('(min-width:1000px)');
    const under1000 = useMediaQuery('(max-width:1000px)');
    const over600 = useMediaQuery('(min-width:600px)');
    const under600 = useMediaQuery('(max-width:600px)');

    const [sizes, setSizes] = useState({
        isL: true,
        isM: false,
        isS: false
    })

    useEffect(() => {
        const isL = over1000;
        const isM = Boolean(under1000 && over600);
        const isS = under600;
        setSizes({ isL, isM, isS })
    }, [over1000, under1000, over600, under600])

    return sizes
};

export default useSizeWindow;
