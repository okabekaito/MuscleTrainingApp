import React, {useState, useEffect} from "react";
import { Button,Card, createStyles, makeStyles } from "@material-ui/core";
import MainTable from "../components/MainTable";
import axios from "axios";
import PostFrom from '../components/PostFrom';

const useStyles = makeStyles((theme) => createStyles({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
}));

const headerList = ['日付','部位','詳細','編集','完了'];

function Home() {
    const classes = useStyles();

    const [posts, setPosts] = useState([]);

    const [formData,setFormData] = useState({menu:'',num:0,description:''});

    useEffect(() =>  {
        getPostsData();
    },[])

    const getPostsData = () => {
        axios
            .get('/api/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }

    const inputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        formData[key] = value;
        let data = Object.assign({}, formData);
        setFormData(data);
    }


    const createPost = async() => {
        //空だと弾く
        if(formData == ''){
            return;
        }
        //入力値を投げる
        await axios
            .post('/api/post/create', {
                menu: formData.menu,
                num: formData.num,
                description: formData.description
            })
            .then((res) => {
                //戻り値をtodosにセット
                const tempPosts = posts
                tempPosts.push(res.data);
                setPosts(tempPosts)
                setFormData('');
            })
            .catch(error => {
                console.log(error);
            });
    }


    let rows =[];

    posts.map((post) => 
    rows.push({
        created_at: post.created_at,
        menu: post.menu,
        showBtn: <Button color="success" variant="contained">詳細</Button>,
        editBtn: <Button color="secondary" variant="contained" key={post.id} href={`/post/edit/${post.id}`}>編集</Button>, 
        deleteBtn: <Button color="primary" variant="contained">削除</Button>,
    }))

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1>筋トレ管理</h1>
                        <Card className={classes.card}>
                            <PostFrom data={formData} btnFunc={createPost} inputChange={inputChange} />
                        </Card>
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
