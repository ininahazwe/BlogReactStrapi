import React, {useEffect, useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import CommentsAPI from "../../services/commentsApi";

const FormComment = (props) => {
    
    const [comment, setComment] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(comment);

        try {
            const data = CommentsAPI.create(comment);
            console.log(data);
            setComment("");
            props.fetchComments();
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {}, [comment]);

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setComment({
            ...comment,
            post: props.id,
            [name]: value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <TextField
                    id="pseudo"
                    label="Pseudo"
                    type="text"
                    onChange={handleChange}
                    name="pseudo"
                    value={comment.pseudo || ""} />
            </div>
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Comment"
                    multiline
                    rows={4}
                    onChange={handleChange}
                    name="content"
                    value={comment.content || ""}
                />
            </div>
            <div>
                <Button variant="contained" color="primary" type="submit">
                    Primary
                </Button>
            </div>
        </form>
    );
};

export default FormComment;
