import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';

// const theme = useTheme();

export default makeStyles(() => ({
    // avtar: {
    //     margin: useTheme().spacing(1),
    // },
    form : {
        paddingTop : useTheme().spacing(5)
    },
    paper: {
        marginTop : useTheme().spacing(5),
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        padding : useTheme().spacing(2),
    },
    button: {
        marginTop: useTheme().spacing(3),
        padding : useTheme().spacing(1),
        // outlineOffset : useTheme().spacing(3)
    }
}))