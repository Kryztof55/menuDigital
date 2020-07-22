import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        color: 'white',
        '&[background="green"]': {
            background: '#32a852',
        },
        '&[background="red"]': {
            background: '#c91b00',
        },
        '&[background="orange"]': {
            background: '#e8740e',
        },
    },
    media: {
        height: 140,
    },
});

const CardMesa = ({ number, status }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} background={status}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Mesa {number}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
export default CardMesa;
