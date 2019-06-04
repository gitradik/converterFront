import React from 'react';
import styles from './Btn.module.sass';
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.min.css';

class Btn extends React.Component {
    render() {
        return (
            <button className={styles.btn} onClick={this.props.onClick}>
                <span>{this.props.content}</span>
                <i className="fas fa-arrow-right"/>
            </button>
        );
    }
}

Btn.propTypes = {
    content: PropTypes.string,
    onClick: PropTypes.func,
};

Btn.defaultProps = {
    content: 'convert'
};

export default Btn;

