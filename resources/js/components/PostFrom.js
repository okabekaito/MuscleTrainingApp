import { Button, createStyles, makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => createStyles({
    textArea: {
        marginRight: theme.spacing(2),
    },
}));

function PostFrom(props) {
    const classes = useStyles();

    const { data, inputChange, btnFunc} = props;

    return(
        <form>
            <TextField id="menu" label='部位' variant='outlined'className={classes.textArea} name="menu"value={data.menu} onChange={inputChange} />
            <TextField id="num" label='回数' variant='outlined'className={classes.textArea} name="num" type="number"value={data.num} onChange={inputChange} />
            <TextField id="description" label='メモ' variant='outlined'className={classes.textArea} name="description" value={data.description} onChange={inputChange} />
            <Button color="primary" variant="contained" href="/" onClick={btnFunc} >登録</Button>
        </form>
    )
}

export default PostFrom;
