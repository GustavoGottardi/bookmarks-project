import React from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';

class FilterByTag extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterTag: ''
        }

        this.handleRemoveTagOfItem = this.props.handleRemoveTagOfItem;
    }

    // componentWillUpdate(newProps, newState) {
    //     if (newProps.tags !== this.props.tags) {
    //         this.setState({ tags: newProps.tags });
    //     }
    // }

    render() {
        return (
            <input type="text" name="name" placeholder="Filter by Tag" />
        );
    }

}


export default FilterByTag;
