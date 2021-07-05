import React from 'react';
import cuid from 'cuid';


const PostsDisplay= (props) => {
    return(
        <div>
            {
                props.postsDisplay.map((post)=> {
                    return(
                        <div key={cuid()}>
                            <h2>{post.title}</h2>
                            <p>{post.contents}</p>
                        </div>
                    )
                })
            }
        </div>
    )
    };

export default PostsDisplay;