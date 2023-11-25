import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdatePostPage = () => {
    const [data, setData] = useState(null);
    const [newPost, setNewPost] = useState({ title: '', body: '' });
    const [updatePost, setUpdatePost] = useState({ id: '', title: '', body: '' });
    const [selectedPostId, setSelectedPostId] = useState('');
    const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
    const [isCreateFormVisible, setIsCreateFormVisible] = useState(false);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data', error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                setData(data.filter(post => post.id !== id));
            })
            .catch(error => console.error('Error deleting post', error));
    };

    const handleCreate = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
            .then(response => {
                setData([...data, response.data]);
                setNewPost({ title: '', body: '' });
                setIsCreateFormVisible(false);
            })
            .catch(error => console.error('Error creating post', error));
    };

    const handleUpdate = () => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${selectedPostId}`, updatePost)
            .then(response => {
                setData(data.map(post => post.id === selectedPostId ? response.data : post));
                setUpdatePost({ id: '', title: '', body: '' });
                setSelectedPostId('');
                setIsUpdateFormVisible(false);
            })
            .catch(error => console.error('Error updating post', error));
    };

    const handleUpdateClick = (post) => {
        setUpdatePost({ id: post.id, title: post.title, body: post.body });
        setSelectedPostId(post.id);
        setIsUpdateFormVisible(true);
    };

    const handleCreateClick = () => {
        setIsCreateFormVisible(true);
    };

    return (
        <div>
            <h1>Ready to Explore? Let's Begin</h1>
            {isUpdateFormVisible && (
                <div className="mt-3">
                    <h3>Update Post</h3>
                    <div className="mb-3">
                        <label htmlFor="updateTitle" className="form-label">Title</label>
                        <input type="text" className="form-control" id="updateTitle" value={updatePost.title} onChange={(e) => setUpdatePost({ ...updatePost, title: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="updateBody" className="form-label">Body</label>
                        <textarea className="form-control" id="updateBody" rows="3" value={updatePost.body} onChange={(e) => setUpdatePost({ ...updatePost, body: e.target.value })}></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
                </div>
            )}
            {isCreateFormVisible && (
                <div className="mt-3">
                    <h3>Create Post</h3>
                    <div className="mb-3">
                        <label htmlFor="createTitle" className="form-label">Title</label>
                        <input type="text" className="form-control" id="createTitle" value={newPost.title} onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="createBody" className="form-label">Body</label>
                        <textarea className="form-control" id="createBody" rows="3" value={newPost.body} onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={handleCreate}>Create</button>
                </div>
            )}
            {!isUpdateFormVisible && !isCreateFormVisible && (
                <div className="mb-3">
                    <button className="btn btn-primary" onClick={handleCreateClick}>Create Post</button>
                </div>
            )}
            {data && data.map((post) => (
                <div className="card" style={{ width: "100%" }} key={post.id}>
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                        <button className='btn btn-danger m-1' onClick={() => handleDelete(post.id)}>Delete</button>
                        <button className='btn btn-primary m-1' onClick={() => handleUpdateClick(post)}>Update</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UpdatePostPage;