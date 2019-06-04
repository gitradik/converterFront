import React from 'react';
import styles from './Converter.module.sass';
import TextArea from "../TextArea/TextArea";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import Loader from 'react-loader-spinner'
import Btn from "../Btn/Btn";
import baseURL from '../../api/baseURL';

class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputNumbers: '',
            result: '',
            isFetching: false
        };
    }

    onClickConvert = () => {
        this.setState({isFetching: true});
        axios.post(baseURL, {text: this.state.inputNumbers})
            .then(reject => {
                const {data} = reject;
                this.setState({result: data.result, isFetching: false});
            }).catch(error => {
                this.setState({result: error.response.data.err, isFetching: false})
        });
    };

    render() {
        const {isFetching, inputNumbers, result} = this.state;
        return (
            <div className={styles.converter}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className={styles.title}>
                                Конвертер римских и арабских чисел
                            </div>
                        </Col>
                        <Col lg={4}>
                            <TextArea onChange={(value) => this.setState({inputNumbers: value})}
                                      value={inputNumbers}
                            />
                        </Col>
                        <Col lg={4} className="d-flex align-items-center justify-content-center pt-md-2 pb-md-2">
                            <Btn onClick={this.onClickConvert}/>
                        </Col>
                        <Col lg={4} className="position-relative">
                            {
                                isFetching &&
                                <div className={styles.loader}>
                                    <Loader type="Watch" color="#499fd8" height="100" width="100"/>
                                </div>
                            }
                            <TextArea
                                value={result}
                                onChange={(value) => this.setState({result: value})}
                                isReadOnly={true}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Converter;