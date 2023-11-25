import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data', error));
    }, []);

    const postData = data.map((post) => (
        <div className="card" style={{ width: "100%" }} key={post.id}>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
            </div>
        </div>
    ));

    return (
        <div>
            {postData}
        </div>
    );
};

export default HomePage;