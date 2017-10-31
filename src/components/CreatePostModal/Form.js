import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";

class Form extends Component{

    render(){
        const {categories, handleSubmit, newPostCategory, changeCategory} = this.props;
        const editing = !!this.props.initialValues;

        return(
            <form className="input-group" onSubmit={handleSubmit}>
                {!editing && <Field className="form-control" placeholder="Author" name="author" component="input" />}
                <Field className="form-control" placeholder="Title" name="title" component="input"/>
                <Field className="form-control" placeholder="Say something about this..." name="body" component="textarea"/>
                {!editing && <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        {newPostCategory ? newPostCategory.capitalize() : "Category "}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        {categories.map(c => (
                            <li key={c.name}>
                                <a onClick={() => changeCategory(c)}>{c.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>}
                <button type="submit" className="btn btn-primary btn-lg">{editing ? "Update" : "Post"}</button>
            </form>
        );
    }
}

export default reduxForm({form: "create-post"})(Form);