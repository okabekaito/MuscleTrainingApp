import React, {useState, useEffect} from "react";
import { Button,Card, createStyles, makeStyles } from "@material-ui/core";
import MainTable from "../components/MainTable";
import axios from "axios";

const useStyles = makeStyles((theme) => createStyles({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
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

    const [posts, setPosts] = useState([]);
    useEffect(() =>  {
        getPostsData();
    },[])

    const getPostsData = () => {
        axios
            .get('/api/posts')
            .then(response => {
                setPosts(response.data);
                console.log(response.data);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1>筋トレ管理</h1>
                        <Card className={classes.card}>
                            <MainTable headerList={headerList}rows={rows} />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
