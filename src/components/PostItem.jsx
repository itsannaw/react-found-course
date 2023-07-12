import React from 'react'
import MyButton from './ui/button/MyButton';

const PostItem = (props) => {
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
            <MyButton onClick={() => props.remove(props.post)}>Открыть</MyButton>
            <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
        </div>
    )
}

export default PostItem;
