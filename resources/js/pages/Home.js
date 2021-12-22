import React from "react";
import { Button,Card, createStyles, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import purple from '@material-ui/core/colors/purple';
import { map } from "lodash";

const useStyles = makeStyles((theme) => createStyles({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    table: {
        minWidth: 650,
    },
    tableHead: {
        backgroundColor: purple['A100'],
    },
}));

const headerList = ['日付','詳細','編集','完了'];

let rows = [
    {
        created_at: '1月1日',
        showBtn: <Button color="success" variant="contained">詳細</Button>,
        editBtn: <Button color="secondary" variant="contained">編集</Button>,
        deleteBtn: <Button color="primary" variant="contained">削除</Button>,
    },
    {
        created_at: '2月2日',
        showBtn: <Button color="success" variant="contained">詳細</Button>,
        editBtn: <Button color="secondary" variant="contained">編集</Button>,
        deleteBtn: <Button color="primary" variant="contained">削除</Button>,
    },
]

function Home() {
    const classes = useStyles();

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1>筋トレ管理</h1>
                        <Card className={classes.name}>

                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label='simple table'>

                                    <TableHead className={classes.tableHead}>
                                        <TableRow>
                                            {headerList.map((item,index) => (
                                                <TableCell align="center" key={index}>{item}</TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {rows.map((row,index) => (
                                            <TableRow key={index}>
                                                {Object.keys(row).map(function(key,i){
                                                    return (
                                                        <TableCell align="center" key={i}>{row[key]}</TableCell>
                                                    )
                                                })};

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
