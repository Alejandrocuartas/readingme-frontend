import React from "react";

import "./styles/Home.css";

const Post = ({ postcomment, image, username }) => {
    return (
        <React.Fragment>
            <div
                className="col-md-3 col-sm-4 mb-2 mr-1"
                style={{ height: "300px" }}
            >
                <div className="card" style={{ width: "15rem" }}>
                    <div className="card-body" style={{ height: "110px" }}>
                        <h5 className="card-title">{username}</h5>
                        <p className="card-text">{postcomment}</p>
                    </div>
                    <img
                        src={image}
                        className="card-img-top"
                        alt="Post image"
                        style={{ height: "190px" }}
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Post;
