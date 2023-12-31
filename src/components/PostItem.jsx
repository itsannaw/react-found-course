import React from 'react'
import MyButton from './ui/button/MyButton';
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
    const router = useNavigate()
    return (
        <div>
        <div className="post">
            <div className="post__content">
            <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body} 
                </div>
            </div>
            <div className="post__btns">
            <MyButton className="post__open-btn" onClick={() => router(`/posts/${props.post.id}`)}>Open</MyButton>
            <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
            </div>
        </div>
        </div>
    )
}

export default PostItem;
