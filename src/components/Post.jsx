import React from "react";

import "./styles/Home.css";

const Post = ({ postcomment, image, username }) => {
    return (
        <React.Fragment>
            <div className="col-md-3">
                <div className="card" style={{ width: "15rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{username}</h5>
                        <p className="card-text">{postcomment}</p>
                    </div>
                    <img
                        src={image}
                        className="card-img-top"
                        alt="Post image"
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Post;
