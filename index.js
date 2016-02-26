'use strict';

var React = require('react'),
  assign = require('object-assign'),
  d = React.DOM,
  rpt = React.PropTypes,
  ALLOWED_UNITS = rpt.oneOf([ 'in', 'px', 'cm' ]),
  INCHES_TO_CENTIMETERS = 2.54;

module.exports = React.createClass({
  displayName: 'React Page Div',

  propTypes: {
    // the width of one page
    width: rpt.number.isRequired,
    widthUnit: ALLOWED_UNITS,

    // the height of one page
    height: rpt.number.isRequired,
    heightUnit: ALLOWED_UNITS,

    // the dpi of the viewer
    dpi: rpt.number.isRequired,

    // how often to verify the proper number of page increments are displayed in ms
    checkInterval: rpt.number,

    pageMarkerStyle: rpt.obj
  },

  getDefaultProps: function () {
    return {
      widthUnit: 'in',
      fixed: 'width',
      dpi: 300,
      checkInterval: null,
      pageMarkerStyle: {
        borderTop: '1px dotted black'
      }
    };
  },

  getInitialState: function () {
    return {
      increments: 1,
      calculateTimer: null
    };
  },

  componentDidMount: function () {
    this.calculateHeight();
    this.checkHeight();
  },

  componentDidUpdate: function (prevProps, prevState) {
    this.calculateHeight();

    if (prevProps.checkInterval !== this.props.checkInterval) {
      this.checkHeight();
    }
  },

  checkHeight: function () {
    if (this.isMounted()) {
      this.calculateHeight();

      if (this.props.checkInterval !== null) {
        setTimeout(function () {
          this.checkHeight();
        }.bind(this), this.props.checkInterval);
      }
    }
  },

  calculateHeight: function () {
    var hidden = this.refs.hidden,
      pxHeight = hidden.scrollHeight;

    if (typeof pxHeight === 'undefined') {
      return;
    }

    // calculate the minimum height of the page
    var heightUnitHeight;
    var heightUnit = this.props.heightUnit;
    if (heightUnit === 'in') {
      heightUnitHeight = (pxHeight / this.props.dpi);
    } else if (heightUnit === 'px') {
      heightUnitHeight = pxHeight;
    } else if (heightUnit === 'cm') {
      heightUnitHeight = (pxHeight / this.props.dpi) * INCHES_TO_CENTIMETERS;
    }

    // calculate the number of increments of one page that we should extend
    var increments = Math.ceil(heightUnitHeight / this.props.height);
    if (this.state.increments !== increments) {
      this.setState({
        increments: increments
      });
    }
  },

  getPageMarkers: function () {
    var pm = [];
    for (var i = 1; i < this.state.increments; i++) {
      pm.push(d.hr({
        key: i,
        style: assign({}, this.props.pageMarkerStyle, {
          position: 'absolute',
          left: 0,
          right: 0,
          top: (i * this.props.height) + this.props.heightUnit
        })
      }));
    }
    return pm;
  },

  getWidth: function () {
    return (this.props.width + this.props.widthUnit);
  },

  getHiddenDiv: function () {
    return d.div({
      key: 'hidden',
      ref: 'hidden',
      className: this.props.className,
      style: assign({}, this.props.style, {
        position: 'absolute',
        width: this.getWidth(),
        height: 0,
        visibility: 'hidden'
      })
    }, this.props.children);
  },

  getVisibleDiv: function () {
    return d.div({
      key: 'visible',
      ref: 'visible',
      className: this.props.className,
      style: assign({}, this.props.style, {
        overflow: 'hidden',
        position: 'relative',
        height: (this.props.height * this.state.increments) + this.props.heightUnit,
        width: this.getWidth()
      })
    }, this.getPageMarkers().concat(this.props.children));
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