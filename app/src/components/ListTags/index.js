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
            tags: []
        }
    }

    componentWillReceiveProps(newProps, newState) {

        if (newProps.tags.length !== this.props.tags.length) {
            this.setState({ tags: newProps.tags });
            console.log(this.state.tags)
        }
    }

    render() {
        return (
            <div class="tag_list">
                <Container>
                    {this.state.tags.map((tags, index) =>
                        <Row key={index}>
                            <Col sm={10}>
                                <div class="name">{tags.name}</div>
                                <div class="url">{tags.url}</div>
                                <div class="tag_content">
                                    {tags.tags.map((tag, i) =>
                                        <span key={i} class="tags">{tag} <span onClick={() => this.handleDeleteTagOfItem(i, index)}>(x)</span></span>
                                    )}
                                </div>
                            </Col>
                            <Col sm={2}>
                                <a href="#" class="trash" onClick={() => this.handleDeleteItem(index)}>Excluir</a>
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

}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeTagOfItem, deleteItem }, dispatch);

const mapStateToProps = store => ({
    tags: store.addTag,
});

export default connect(mapStateToProps, mapDispatchToProps)(TagList);
