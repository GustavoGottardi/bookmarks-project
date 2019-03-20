import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Col, Row } from 'react-bootstrap';

import { removeTagOfItem } from '../../actions'
import { deleteItem } from '../../actions'

class TagList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: [],
            filteredTags: []
            // filterTextTag: ''
        }
    }

    componentWillReceiveProps(newProps, newState) {
        console.log(newProps);
        if (newProps.tags.length !== this.props.tags.length) {
            this.setState({ tags: newProps.tags });
            this.setState({ filteredTags: newProps.tags });
        }

        if(newProps.filterByTag !== this.props.filterByTag) {
            // this.setState({filterTextTag: newProps.filterByTag});
            this.filterItemsByTag(newProps.filterByTag);
        }
    }
    render() {
        return (
            <div class="tag_list">
                <Container>
                    {this.state.filteredTags.map((tags, index) =>
                        <Row key={index}>
                            <Col sm={10}>
                                <div class="line name">{tags.name}</div>
                                <div class="line url">{tags.url}</div>
                                <div class="line tag_content">
                                    {tags.tags.map((tag, i) =>
                                        <span key={i} class="tags">{tag} <span onClick={() => this.handleDeleteTagOfItem(i, index)}> x</span></span>
                                    )}
                                </div>
                            </Col>
                            <Col className="text-right" sm={2}>
                                <a href="#" class="trash" onClick={() => this.handleDeleteItem(index)}><span class="far fa-trash-alt"></span> DELETE</a>
                            </Col>
                        </Row>
                    )}
                </Container>
            </div>
        );
    }

    handleDeleteTagOfItem(indexChild, indexDad) {
        let payload = {};
        payload.indexDad = indexDad;
        payload.indexChild = indexChild;
        this.props.removeTagOfItem(payload);
    }

    handleDeleteItem(index) {
        this.props.deleteItem(index);
    }

    filterItemsByTag(filterText) {
        if(filterText.length > 0) {
            this.setState({filteredTags: this.state.tags.filter((item, i) => {
                return item.tags.filter((tag, i) => tag.toLowerCase().search(
                    filterText.toLowerCase()
                ) !== -1).length > 0
            })});
        } else {
            this.setState({filteredTags: this.state.tags});
        }
    }

}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeTagOfItem, deleteItem }, dispatch);

const mapStateToProps = store => ({
    tags: store.tagReducers,
});

export default connect(mapStateToProps, mapDispatchToProps)(TagList);
