import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
    },
    color: {
        color: (props) => (props.color == 'red' ? '#FE6B8B' : '#D3D3D3'),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const AddButton = (props) => {
    const { color, onClick } = props;
    const classes = useStyles(props);

    return (
        <IconButton aria-label="add to order" onClick={onClick}>
            <FavoriteIcon className={classes.color} />
        </IconButton>
    );
};

export default function FoodCard({
    nombrePlatillo,
    costoPlatillo,
    imgUrl,
    title,
    description,
    addToOrder,
}) {
    const classes = useStyles();
    const [added, setAdded] = useState(false);
    const handleAddToOrder = () => {
        !added ? setAdded(true) : setAdded(false);
        /* Function to send to state */
    };
    return (
        <Card className={classes.root}>
            <CardHeader
                title={nombrePlatillo}
                subheader={`${costoPlatillo} MNX`}
            />
            <CardMedia className={classes.media} image={imgUrl} title={title} />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <AddButton
                    color={!added ? 'default' : 'red'}
                    onClick={handleAddToOrder}
                />
                <Typography variant="body2" color="textSecondary" component="p">
                    {addToOrder}
                </Typography>
            </CardActions>
        </Card>
    );
}
