import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import FormModal from "../components/FormModal";
import Cookie from "js-cookie";
Cookie.remove("userToken");
const HomePage = () => {
    const [loading, setLoading] = useState(true);
    const [isOpen, setOpen] = useState(false);
    const [data, setData] = useState();
    const [renderParam, setRenderParam] = useState(false);
    const onClose = () => setOpen(false);
    useEffect(() => {
        fetch("https://readingme-ale31jo.herokuapp.com/api/posts").then(
            async (res) => {
                if (!res.ok) {
                    return null;
                }
                const response = await res.json();
                setData(response);
                setLoading(false);
            }
        );
    }, [renderParam]);
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
            <FormModal
                renderParam={renderParam}
                setRenderParam={setRenderParam}
                onClose={onClose}
                isOpen={isOpen}
            ></FormModal>
        </React.Fragment>
    );
};

export default HomePage;
