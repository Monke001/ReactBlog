import React from 'react';

// Custom Components
import CustomCardPerfil from './components/Perfil/CustomCardPerfil';
import CustomPostCard from './components/Perfil/CustomCardPost';

// Material Ui Components
import { Box, Typography, Switch } from "@material-ui/core/";
import { makeStyles } from '@material-ui/core';

// Library Components
import Media from 'react-media';


const useStyles = makeStyles((theme) => ({
    imageBackground: {
        background: "url('https://carbonmade-media.accelerator.net/30443284;640x266.jpeg') rgba(0, 0, 0, 0.8)",
        backgroundSize: 'contains',
        backgroundBlendMode: 'multiply',
        height: '25vh',
        padding: '0px',
        margin: '0px',
        width: '100%',
    },
}));


const PerfilAdmin = ({ list }) => {
    const classes = useStyles();
    const [listStatus, setListStatus] = React.useState(list.filter(item => item.status === 'published'))
    const [checked, setChecked] = React.useState(true);

    const handleChangeStatus = (event) => {
        setChecked(event.target.checked);
        {event.target.checked ? setListStatus(list.filter(item => item.status === 'published')) : setListStatus(list.filter(item => item.status !== 'published'))};
    };

    return (
        <React.Fragment>
            <div className={classes.imageBackground}>
            </div>
            <Box style={{ padding: '0 20px' }}>
                <Media queries={{
                    small: "(max-width: 599px)",
                    medium: "(min-width: 600px) and (max-width: 899px)",
                    large: "(min-width: 900px)"
                }}>
                    {matches => (
                        <React.Fragment>
                            {matches.small && <CustomCardPerfil name={'Monke'} admin={true} image={'https://source.unsplash.com/random/'} wid={'100%'} />}
                            {matches.medium && <CustomCardPerfil name={'Monke'} admin={true} image={'https://source.unsplash.com/random/'} wid={'100%'} />}
                            {matches.large && <CustomCardPerfil name={'Monke'} admin={true} image={'https://source.unsplash.com/random/'} wid={'30%'} />}
                        </React.Fragment>
                    )}
                </Media>
                <Switch
                    checked={checked}
                    inputProps={{ 'aria-label': 'controlled' }}
                    onChange={handleChangeStatus}
                />
                {checked ? <span>All published status</span> : <span>All draft status</span>}
                <Media queries={{
                    small: "(max-width: 599px)",
                    medium: "(min-width: 600px) and (max-width: 899px)",
                    large: "(min-width: 900px)"
                }}>
                    {matches => (
                        <React.Fragment>
                            {matches.small &&
                                <div style={{ float: 'left', width: '100%' }}>
                                    {listStatus.map(item => <CustomPostCard item={item} key={item.id} isAdmin={true} />)}
                                </div>}

                            {matches.medium &&
                                <div style={{ float: 'left', width: '100%' }}>
                                    {listStatus.map(item => <CustomPostCard item={item} key={item.id} isAdmin={true} />)}
                                </div>}

                            {matches.large &&
                                <div style={{ float: 'left', width: '70%' }}>
                                    <Typography variant='h5'>Admin Page - Lasts Posts</Typography>
                                    {listStatus.map(item => <CustomPostCard item={item} key={item.id} isAdmin={true} />)}
                                </div>}
                        </React.Fragment>
                    )}
                </Media>
            </Box>
        </React.Fragment>
    );
};


export default PerfilAdmin;