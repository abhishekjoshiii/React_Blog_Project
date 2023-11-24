import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
        // <header>
        //     <nav >
        //         <ul >
        //             <li>
        //                 <Link to="/">Home</Link>
        //             </li>
        //             <li>
        //                 <Link to="/create">Create Post</Link>
        //             </li>
        //             <li>
        //                 <Link to="/update">Update Post</Link>
        //             </li>
        //         </ul>
        //     </nav>
        // </header>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/create">Create Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/update">Update Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;