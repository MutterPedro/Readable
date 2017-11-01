import React, {Component} from "react";
import 'react-toastify/dist/ReactToastify.min.css';
import CreatePostModal from "../CreatePostModal/CreatePostModal";
import Posts from "../Posts/Posts";
import Categories from "../Categories/Categories";
import "./Root.css";

class App extends Component{
    render(){
        const {category} = this.props.match.params;
        return (
            <div className="container">
                <Categories category={category}/>
                <Posts category={category}/>
                <CreatePostModal/>
            </div>
        );
    }
}


export default App;
