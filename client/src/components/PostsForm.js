import React from 'react';

const PostsForm =(props) => {
    return (
        <div>
            <button onClick={props.getPostsBtn}>Click for Posts {props.name}</button>
        </div>
    )
};

export default PostsForm;