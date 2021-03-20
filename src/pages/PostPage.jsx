import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import {API_URL} from "../config";
import PostsAPI from "../services/postsAPI";

import FormComment from "../components/forms/FormComment";

import Skeleton from '@material-ui/lab/Skeleton';
import {Grid, Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import {AiFillCaretLeft} from "react-icons/all";

export default function PostPage(){

    const {id} = useParams()
    const [postState, setPost] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [comments, setComments] = useState([]);

    useEffect(() => {
       fetchPost();
       fetchComments();
    }, []);

    const fetchPost = async () => {
        const data = await PostsAPI.findOne(id)
        setPost(data);
        setIsLoading(true);
    }

    const fetchComments = async () => {
        try{
            const data = await PostsAPI.getComments(id);
            setComments(data);
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <div>
            <nav>
                 <Link to="/">
                     <Button variant="contained" color="primary">
                         <AiFillCaretLeft/>
                         <span>Retour</span>
                     </Button>
                 </Link>
            </nav>
            <Grid container spacing={2}>
                <Grid item sm="6">
                    <div className="postImg">
                        {isLoading ? (
                                <img src={API_URL + postState.image.formats.small.url} alt=""/>
                            ) : (
                            <Skeleton variant="rect" width="100%" height={400} />
                        )}
                    </div>
                </Grid>
                <Grid item sm="6">
                    <h1>
                        {isLoading ? (
                            postState.title
                        ) : (
                            <Skeleton variant="text" width={300} height={80}/>
                        )}
                    </h1>
                    <p>
                        {isLoading ? (
                            postState.content
                        ) : (
                            <>
                                <Skeleton variant="text" />
                                <Skeleton variant="text" />
                                <Skeleton variant="text" />
                                <Skeleton variant="text" />
                            </>
                        )}
                    </p>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <FormComment fetchComments={fetchComments} id={id} />
                </Grid>
                <Grid item md={6}>
                    <List>
                        {comments.map((comment) => (
                            <ListItem alignItems="flex-start" key={comment.id}>
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={comment.pseudo}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                color="textPrimary"
                                            >
                                                {comment.content}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            )
                        )}
                    </List>
                </Grid>
            </Grid>
        </div>
    )
}
