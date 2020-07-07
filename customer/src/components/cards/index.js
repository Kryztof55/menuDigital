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
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import FavoriteIcon from '@material-ui/icons/Favorite';
import * as actions from '../../actions/actions';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        '& .MuiTextField-root': {
            width: 50,
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: 0,
        },
        '& .MuiButtonBase-root': {
            marginRight: 10,
            marginLeft: 10,
        },
        '& .MuiInput-input': {
            marginRight: 10,
        },
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
let dishesArr = [];
const FoodCard = ({
    nombrePlatillo,
    costoPlatillo,
    imgUrl,
    title,
    description,
    addToOrder,
    isAdded,
}) => {
    const classes = useStyles();
    const [added, setAdded] = useState(false);
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);
    const handlerAddToOrder = (nombrePlatillo, costoPlatillo, isAdded) => {
        const dish = {
            nombrePlatillo,
            costoPlatillo,
            isAdded: false,
        };
        dish.isAdded = true;
        dishesArr.push(dish);
        dispatch(actions.postDishes(dishesArr));
    };
    const handleRemovefromOrder = (nombrePlatillo, costoPlatillo, isAdded) => {
        const dish = {
            nombrePlatillo,
            costoPlatillo,
            isAdded: false,
        };
        dish.isAdded = false;
        const index = dishesArr
            .map((e) => {
                return e.nombrePlatillo;
            })
            .indexOf(dish.nombrePlatillo);
        dishesArr.splice(index, 1);
        dispatch(actions.postDishes(dishesArr));
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                title={nombrePlatillo}
                subheader={`${costoPlatillo} MNX`}
            />
            <CardMedia className={classes.media} image={imgUrl} title={title} />
            <CardContent>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {/* <AddButton
                    color={!added ? 'default' : 'red'}
                    onClick={() => {
                        handlerAddToOrder(
                            nombrePlatillo,
                            costoPlatillo,
                            isAdded
                        );
                    }}
                /> */}
                <Grid>
                    <Button
                        variant="contained"
                        disableElevation
                        onClick={(e) => {
                            e.stopPropagation();
                            setCount(Math.max(count - 1, 0));
                            handleRemovefromOrder(
                                nombrePlatillo,
                                costoPlatillo,
                                isAdded
                            );
                        }}>
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <TextField
                        id={`id-${nombrePlatillo}`}
                        value={count}
                        className={classes.inputClass}
                        type="text"
                        color="primary"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        disableElevation
                        onClick={(e) => {
                            e.stopPropagation();
                            setCount(count + 1);
                            handlerAddToOrder(nombrePlatillo, costoPlatillo);
                        }}>
                        <AddIcon fontSize="small" />
                    </Button>
                </Grid>
                <Typography variant="body2" color="textSecondary" component="p">
                    {addToOrder}
                </Typography>
            </CardActions>
        </Card>
    );
};
export default FoodCard;
