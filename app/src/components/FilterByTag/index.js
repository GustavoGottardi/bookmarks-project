import React from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';

class FilterByTag extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterText = this.props.handleFilterText;
    }

    render() {
        return (
            <input type="text" name="name" placeholder="Filter by Tag" onChange={(event) => this.filterTag(event)} />
        );
    }

    filterTag(event) {
        this.handleFilterText(event.target.value);
    }

}


export default FilterByTag;
