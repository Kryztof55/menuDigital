import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CommentIcon from '@material-ui/icons/Comment';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TextField from '@material-ui/core/TextField';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions/actions';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
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
    sub: {
        marginLeft: 50,
    },
}));

/* const AddButton = (props) => {
    const { color, onClick } = props;
    const classes = useStyles(props);

    return (
        <IconButton aria-label="add to order" onClick={onClick}>
            <FavoriteIcon className={classes.color} />
        </IconButton>
    );
}; */
let dishesArr = [];
const FoodCard = ({
    nombrePlatillo,
    costoPlatillo,
    imgUrl,
    title,
    description,

    isAdded,
    number,
    id,
    hasOptions,
    optionsContent,
}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [added, setAdded] = useState(false);
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('Revueltos');
    const handlerAddToOrder = (nombrePlatillo, costoPlatillo, isAdded) => {
        const dish = {
            nombrePlatillo,
            costoPlatillo,
            isAdded: false,
            number: count + 1,
            id,
        };
        dish.isAdded = true;
        dishesArr.push(dish);
        dispatch(actions.postDishes(dishesArr));
    };
    const handleRemovefromOrder = (
        nombrePlatillo,
        costoPlatillo,
        isAdded,
        id
    ) => {
        const dish = {
            nombrePlatillo,
            costoPlatillo,
            isAdded: false,
            id,
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
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    const handleChangeRatio = (event) => {
        setValue(event.target.value);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                title={nombrePlatillo}
                subheader={`$ ${costoPlatillo} MNX`}
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
                <Grid container justify="space-between">
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
                                handlerAddToOrder(
                                    nombrePlatillo,
                                    costoPlatillo
                                );
                            }}>
                            <AddIcon fontSize="small" />
                        </Button>
                    </Grid>
                    {hasOptions == true && (
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more">
                            <ExpandMoreIcon />
                        </IconButton>
                    )}
                </Grid>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Opciones</Typography>
                    {optionsContent && (
                        <List className={classes.root}>
                            {optionsContent.map((value, index) => {
                                const labelId = `checkbox-list-label-${value}`;
                                return (
                                    <div>
                                        <ListItem
                                            key={index}
                                            role={undefined}
                                            dense
                                            button
                                            onClick={handleToggle(value)}>
                                            <ListItemIcon>
                                                <Checkbox
                                                    edge="start"
                                                    checked={
                                                        checked.indexOf(
                                                            value
                                                        ) !== -1
                                                    }
                                                    tabIndex={-1}
                                                    disableRipple
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                id={labelId}
                                                primary={`${value.element} $${value.price} `}
                                            />
                                        </ListItem>
                                        <Grid container className={classes.sub}>
                                            <FormControl component="fieldset">
                                                <RadioGroup
                                                    aria-label={value}
                                                    name={value}
                                                    value={value}
                                                    onChange={
                                                        handleChangeRatio
                                                    }>
                                                    {value != undefined
                                                        ? value.type?.map(
                                                              (type, index) => {
                                                                  return (
                                                                      <FormControlLabel
                                                                          value={
                                                                              type.name
                                                                          }
                                                                          control={
                                                                              <Radio />
                                                                          }
                                                                          label={
                                                                              type.name
                                                                          }
                                                                      />
                                                                  );
                                                              }
                                                          )
                                                        : null}
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                    </div>
                                );
                            })}
                        </List>
                    )}
                </CardContent>
            </Collapse>
        </Card>
    );
};
export default FoodCard;
