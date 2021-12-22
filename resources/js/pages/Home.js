import React from "react";
import { Button,Card, createStyles, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import purple from '@material-ui/core/colors/purple';

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
                                        <TableRow>
                                            <TableCell align="center">1月1日</TableCell>
                                            <TableCell align="center"><Button color='success' variant="contained">詳細</Button></TableCell>
                                            <TableCell align="center"><Button color='secondary' variant="contained">編集</Button></TableCell>
                                            <TableCell align="center"><Button color='primary' variant="contained">完了</Button></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center">2月2日</TableCell>
                                            <TableCell align="center"><Button color='success' variant="contained">詳細</Button></TableCell>
                                            <TableCell align="center"><Button color='secondary' variant="contained">編集</Button></TableCell>
                                            <TableCell align="center"><Button color='primary' variant="contained">完了</Button></TableCell>
                                        </TableRow>
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
