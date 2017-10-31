import React from "react";
import "./Root.css";
import 'react-toastify/dist/ReactToastify.min.css';
import CreatePostModal from "../CreatePostModal/CreatePostModal";
import Posts from "../Posts/Posts";
import Categories from "../Categories/Categories";

const App = () => (
    <div className="container">
        <Categories/>
        <Posts/>
        <CreatePostModal/>
    </div>
);


export default App;
