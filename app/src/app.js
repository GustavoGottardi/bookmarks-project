import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import HomeContainer from './containers/Home';

import './app.scss';

class App extends Component {
  render() {
    return (
        <div class="dashboard">
            <header>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <span class="logo">BEBLUE</span> Front-End test
                        </Col>
                    </Row>
                </Container>
            </header>
            <HomeContainer />
        </div>
    )
  }
}

export default App;
