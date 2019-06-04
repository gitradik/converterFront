import React from 'react';
import styles from './TextArea.module.sass';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
    render() {
        return (
            <textarea
                placeholder={this.props.placeHolder}
                className={[styles.textArea, this.props.isFocusStyle || styles.nonFocusStyle].join(' ')}
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
    placeHolder: PropTypes.string,
    isFocusStyle: PropTypes.bool,
};

TextArea.defaultProps = {
    isReadOnly: false,
    placeHolder: '',
    isFocusStyle: true
};

export default TextArea;