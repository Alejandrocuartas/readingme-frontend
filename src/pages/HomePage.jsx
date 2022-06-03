import React, { useEffect, useState, useContext } from "react";
import Cookie from "js-cookie";
import Post from "../components/Post";
import FormModal from "../components/FormModal";
import { logContext } from "../stateManager";
Cookie.remove("userToken");
const HomePage = () => {
    const [loading, setLoading] = useState(true);
    const [isOpen, setOpen] = useState(false);
    const [data, setData] = useState();
    const { socket } = useContext(logContext);
    const onClose = () => setOpen(false);
    useEffect(() => {
        socket.on("get-posts", (posts) => {
            setData(posts);
            setLoading(false);
        });
    }, []);
    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <React.Fragment>
            <div className="container container-fluid">
                <div className="row">
                    {data.posts.reverse().map((post) => {
                        return (
                            <Post
                                key={post._id}
                                image={post.image}
                                postcomment={post.postcomment}
                                username={post.username}
                            />
                        );
                    })}
                </div>
            </div>
            <button
                onClick={() => setOpen(true)}
                style={{ backgroundColor: "white", color: "black" }}
                className="fixed-bottom btn btn-secondary btn-lg"
            >
                New post
            </button>
            <FormModal onClose={onClose} isOpen={isOpen}></FormModal>
        </React.Fragment>
    );
};

export default HomePage;
