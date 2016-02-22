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
            ht: null,
            wd: null
        };
    },

    componentDidMount: function () {
        this.calculateHeightAndWidth();
    },

    componentDidUpdate: function (prevProps, prevState) {
        this.calculateHeightAndWidth();
    },

    calculateHeightAndWidth: function () {
        var hidden = this.refs.hidden,
            ht = hidden.scrollHeight,
            wd = hidden.scrollWidth;

        if (this.state.ht !== ht || this.state.wd !== wd) {
            this.setState({
                ht: ht,
                wd: wd
            });
        }
    },

    render: function () {
        return d.div({}, [
            // a hidden container used to calculate height and width of the children elements
            d.div({
                key: 'hidden',
                ref: 'hidden',
                style: {
                    width: 0,
                    height: 0,
                    visibility: 'hidden'
                }
            }, this.props.children),
            d.div({
                key: 'main',
                style: {
                    height: this.state.ht + this.props.heightUnit,
                    width: this.state.wd + this.props.widthUnit
                }
            }, this.props.children)
        ]);
    }
});