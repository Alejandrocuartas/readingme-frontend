import React, { useState, useContext } from "react";

import { logContext } from "../stateManager";

import Modal from "./Modal";

const FormModal = ({ isOpen, onClose, renderParam, setRenderParam }) => {
    const [loading, setLoading] = useState(false);
    const { socket } = useContext(logContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const requestOptions = {
            method: "POST",
            body: formdata,
            credentials: "include",
        };
        try {
            if (loading) {
                return;
            }
            setLoading(true);
            const res = await fetch(
                "https://readingme.onrender.com/api/posts/create",
                requestOptions
            );

            if (!res.ok) {
                setLoading(false);
                alert("You have to login");
                location.reload();
            } else {
                setLoading(false);
                socket.emit("new-post", true);
                onClose();
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
            setTimeout(location.reload(), 4000);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            {loading ? <h1>Loading...</h1> : null}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="well well-sm">
                            <form
                                className="form-horizontal"
                                onSubmit={handleSubmit}
                            >
                                <legend className="text-center header">
                                    Post
                                </legend>
                                <div className="form-group">
                                    <div className="col-md-8">
                                        <label htmlFor="postcomment">
                                            Enter postcomment
                                        </label>
                                        <input
                                            id="postcomment"
                                            name="postcomment"
                                            type="text"
                                            placeholder="postcomment"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-8">
                                        <label htmlFor="file">Enter file</label>
                                        <input
                                            id="file"
                                            name="postFile"
                                            type="file"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="offset-5">
                                    <button
                                        type="submit"
                                        className="btn btn-primary mr-2"
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary mr-2"
                                        onClick={onClose}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default FormModal;
