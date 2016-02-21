var React = require('react'),
    d = React.DOM,
    rpt = React.PropTypes;

module.exports = React.createClass({
    displayName: 'React Page Div',

    propTypes: {
        width: rpt.number.isRequired,
        height: rpt.number.isRequired,
        widthUnit: rpt.string.isRequired,
        heightUnit: rpt.string.isRequired
    },

    getInitialState: function () {
        return {
            height: 0,
            width: 0
        };
    },

    render: function () {
        return d.div({
            style: {
                height: this.state.height + this.props.heightUnit,
                width: this.state.width + this.props.widthUnit
            }
        });
    }
});