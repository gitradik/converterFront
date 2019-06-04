import React from 'react';
import styles from './TextArea.module.sass';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
    render() {
        return (
            <textarea

                className={styles.textArea}
                value={this.props.value}
                onChange={(e) => this.props.onChange(e.target.value)}
                readOnly={this.props.isReadOnly}
            />
        );
    }
}

TextArea.propTypes = {
    onChange: PropTypes.func,
    isReadOnly: PropTypes.bool,
};

TextArea.defaultProps = {
    isReadOnly: false
};

export default TextArea;