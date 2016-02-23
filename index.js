var React = require('react'),
    d = React.DOM,
    rpt = React.PropTypes;

module.exports = React.createClass({
    displayName: 'React Page Div',

    propTypes: {
        width: rpt.number.isRequired,
        widthUnit: rpt.string.isRequired,
        height: rpt.number.isRequired,
        heightUnit: rpt.string.isRequired
    },

    getDefaultProps: function () {
        return {};
    },

    getInitialState: function () {
        return {
            height: null
        };
    },

    componentDidMount: function () {
        this.calculateHeight();
    },

    componentDidUpdate: function (prevProps, prevState) {
        this.calculateHeight();
    },

    calculateHeight: function () {
        var hidden = this.refs.hidden,
            height = hidden.scrollHeight;

        if (this.state.ht !== height) {
            this.setState({
                ht: height
            });
        }
    },

    getWidth: function () {
        return (this.props.width + this.props.widthUnit);
    },

    getHiddenDiv: function () {
        return d.div({
            key: 'hidden',
            ref: 'hidden',
            style: {
                width: this.getWidth(),
                height: 0,
                visibility: 'hidden'
            }
        }, this.props.children);
    },

    getVisibleDiv: function () {
        return d.div({
            key: 'visible',
            ref: 'visible',
            style: {
                height: this.state.height + this.props.heightUnit,
                width: this.getWidth()
            }
        }, this.props.children);
    },

    render: function () {
        return d.div({}, [
            // a hidden container used to calculate height of children elements
            this.getHiddenDiv(),

            // the visible div with the appropriate increment of height
            this.getVisibleDiv()
        ]);
    }
});