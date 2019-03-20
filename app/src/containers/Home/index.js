import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Col, Row } from 'react-bootstrap';

import { addTag } from '../../actions';

import TagInput from '../../components/InputTag';
import TagList from '../../components/ListTags';
import FilterByTag from '../../components/FilterByTag'


class HomeContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showFilter: false,
            revision: 0,
            tagList: {
                name: '',
                url: '',
                tags: []
            },
            filterTextTag: ''
        };
    }

    render() {
        return (
            <section className="main">
                <Container className="main_content">
                    <Row >
                        <Col sm={1}>
                            <a href="javascript:void(0);" onClick={() => this.showFilter()} className={this.state.showFilter ? "active" : ""}><span class="fa fa-search"></span></a>
                            <a href="javascript:void(0);" onClick={() => this.showRegisterItem()} className={!this.state.showFilter ? "active" : ""}><span class="far fa-plus-square"></span></a>
                        </Col>
                        { this.state.showFilter ?
                            <Col sm={11}>
                                <FilterByTag handleFilterText={this.handleFilterText.bind(this)} />
                            </Col>
                        :
                            <form id="addTag" className="col-sm-11" ref={(el) => this.formAddTag = el} onSubmit={(e) => this.addTag(e)}>
                                <Row>
                                    <Col sm={6}>
                                        <input type="text" name="name" onChange={(event) => this.updateTagName(event)} placeholder="Title" required />
                                    </Col>
                                    <Col sm={6}>
                                        <input type="text" name="url" onChange={(event) => this.updateTagUrl(event)} placeholder="Link" required />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>
                                            <TagInput placeholder="Tags" handleTagsArray={this.handleTagsArray.bind(this)} revision={this.state.revision} />
                                    </Col>
                                </Row>
                                <button onClick={this.clearInput.bind(this)}>Cadastrar</button>
                            </form>
                        }

                    </Row>
                    <Row className="tag_listing">
                        <Col sm={12}>
                            <TagList filterByTag={this.state.filterTextTag} />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }

    showFilter() {
		this.setState({
			showFilter: true
		});
    }

    showRegisterItem() {
		this.setState({
			showFilter: false
		});
    }

    addTag(e) {
        e.preventDefault();
        this.props.addTag(this.state.tagList);
        this.setState({tagList: {
            name: '',
            url: '',
            tags: []
        }});
        this.formAddTag.reset();
        this.clearInput.bind(this)
    }

    updateTagName(event) {
        let tagList = Object.assign({}, this.state.tagList);
        tagList.name = event.target.value;
        this.setState({ tagList });
    }

    updateTagUrl(event) {
        let tagList = Object.assign({}, this.state.tagList);
        tagList.url = event.target.value;
        this.setState({ tagList });
    }

    handleTagsArray(props) {
        let tagList = Object.assign({}, this.state.tagList);
        tagList.tags = props;
        this.setState({ tagList });
    }

    handleFilterText(props) {
        this.setState({filterTextTag: props});
    }

    clearInput() {
        this.setState((prev) => ({revision: prev.revision+1}))
    }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addTag }, dispatch);

const mapStateToProps = store => ({
    tags: store.addTag
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

