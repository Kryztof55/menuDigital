import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        '& .MuiTextField-root': {
            width: 50,
            border: 0,
        },
    },
    media: {
        height: 140,
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
}));

export default function CardDrinks({ imgUrl, title, hightlight, description }) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [checked, setChecked] = useState([0]);
    const [count, setCount] = useState(1);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
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
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imgUrl}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Refrescos
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p">
                        {description}
                    </Typography>
                </CardContent>

                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-end">
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more">
                        <ExpandMoreIcon />
                    </IconButton>
                </Grid>
            </CardActionArea>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <List className={classes.root}>
                        {[0, 1, 2, 3].map((value) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                                <ListItem
                                    key={value}
                                    role={undefined}
                                    dense
                                    button
                                    onClick={handleToggle(value)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={
                                                checked.indexOf(value) !== -1
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
                                        primary={`Line item ${value + 1}`}
                                    />
                                    <ButtonGroup>
                                        <Button
                                            aria-label="reduce"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setCount(
                                                    Math.max(count - 1, 0)
                                                );
                                            }}>
                                            <RemoveIcon fontSize="small" />
                                        </Button>
                                        <TextField
                                            id=""
                                            value={count}
                                            className={classes.inputClass}
                                        />
                                        <Button
                                            aria-label="increase"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setCount(count + 1);
                                            }}>
                                            <AddIcon fontSize="small" />
                                        </Button>
                                    </ButtonGroup>
                                </ListItem>
                            );
                        })}
                    </List>
                </CardContent>
            </Collapse>
        </Card>
    );
}
