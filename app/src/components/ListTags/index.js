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

    componentWillUpdate(newProps, newState) {
        if (newProps.tags !== this.props.tags) {
            this.setState({ tags: newProps.tags });
        }
    }

    render() {
        return (
            <div class="tag_list">
                <Container>
                    {this.state.tags.map((tags, index) =>
                        <Row>
                            <Col sm={10}>
                                <div class="name">{tags.name}</div>
                                <div class="url">{tags.url}</div>
                                <div class="tag_content">
                                    {tags.tags.map((tag, i) =>
                                        <span class="tags">{tag} <span onClick={() => this.handleDeleteTagOfItem(i, index)}>(x)</span></span>
                                    )}
                                </div>
                            </Col>
                            <Col sm={2}>
                                <a href="javascript:void(0);" class="trash" onClick={this.handleDeleteItem(index)}>Excluir</a>
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
