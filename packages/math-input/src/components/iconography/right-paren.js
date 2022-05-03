/**
 * An autogenerated component that renders the RIGHT_PAREN iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
import PropTypes from "prop-types";
import * as React from "react";

class RightParen extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired,
    };

    render() {
        return (
            <svg width="48" height="48" viewBox="0 0 48 48">
                <g fill="none" fillRule="evenodd">
                    <path fill="none" d="M0 0h48v48H0z" />
                    <path fill="none" d="M12 12h24v24H12z" />
                    <path
                        d="M23 14c4 6 4 14 0 20"
                        stroke={this.props.color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
            </svg>
        );
    }
}

export default RightParen;
