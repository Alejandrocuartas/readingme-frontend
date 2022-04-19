import React from "react";

import "./styles/Post.css";

const Post = ({ postcomment, image, username }) => {
    return (
        <React.Fragment>
            <div className="col mb-2" style={{ height: "350px" }}>
                <div className="card" style={{ width: "15rem" }}>
                    <div className="card-body" style={{ height: "110px" }}>
                        <h5 className="card-title">{username}</h5>
                        <hr />
                        <p className="card-text">{postcomment}</p>
                    </div>
                    <img
                        src={image}
                        className="card-img-top"
                        alt="Post image"
                        style={{ height: "240px", objectFit: "cover" }}
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Post;
