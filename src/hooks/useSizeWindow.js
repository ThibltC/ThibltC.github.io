import { useEffect, useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useSizeWindow = () => {

    const over1000 = useMediaQuery('(min-width:1000px)');
    const under1000 = useMediaQuery('(max-width:1000px)');
    const over600 = useMediaQuery('(min-width:600px)');
    const under600 = useMediaQuery('(max-width:600px)');

    const [sizes, setSizes] = useState({
        L: true,
        M: false,
        S: false
    })

    useEffect(() => {
        const L = over1000;
        const M = Boolean(under1000 && over600);
        const S = under600;
        setSizes({ L, M, S })
    }, [over1000, under1000, over600, under600])

    return sizes
};

export default useSizeWindow;
