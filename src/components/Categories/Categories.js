import React, {Component} from 'react';
import './Categories.css';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {categories, changeCategory} from "../../actions/Categories";
import {changeOrderBy} from "../../actions/Posts";

const ORDER_FIELD = ["timestamp", "voteScore", "title", "body", "author"];

class Categories extends Component {
    componentDidMount() {
        this.props.getCategories();
    }

    render(){
        const {orderBy, changeCategory, changeOrderBy, categories, category} = this.props;
        if(categories.length <= 0){
            categories.push({name: "react"});
        }

        return (
            <div className="jumbotron my-4" id="main">
                <h1 className="display-3">Welcome to Readable!</h1>
                <p className="lead">
                    Navigate through the posts using the lower filters. Also you can comment, vote and create new posts.
                </p>
                <button onClick={() => changeCategory('all')} id={"all"}
                        className={"btn btn-primary btn-lg marginRight10 " + (category === "all" ? "disabled" : "")}>
                    All
                </button>
                {categories.map(c => (
                    <button
                        onClick={() => changeCategory(c.name)}
                        key={c.name}
                        className={"btn btn-primary btn-lg marginRight10 " + (category === c.name ? "disabled" : "")}
                        id={c.name}
                    >
                        {c.name.capitalize()}
                    </button>
                ))}
                <br/><br/>
                <div className="dropdown">
                    <b>{"Order By: "}</b>
                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        {orderBy.capitalize()}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        {ORDER_FIELD.map(field => (
                            <li key={field}>
                                <a id={field} onClick={() => changeOrderBy(field)}>{field}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

Categories.propTypes = {
    orderBy: PropTypes.string.isRequired,
    changeCategory: PropTypes.func.isRequired,
    changeOrderBy: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories,
        category: state.categories.category,
        orderBy: state.posts.orderBy
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => dispatch(categories()),
        changeOrderBy: (orderBy) => dispatch(changeOrderBy(orderBy)),
        changeCategory: (category) => dispatch(changeCategory(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);