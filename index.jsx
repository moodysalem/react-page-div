import React, { DOM, PropTypes, Component, createFactory } from 'react';

const assign = require('object-assign'),
  ALLOWED_UNITS = PropTypes.oneOf([ 'in', 'px', 'cm', 'mm' ]),
  INCHES_TO_CENTIMETERS = 2.54;

class ReactPageDiv extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      increments: 1,
      calculateTimer: null
    };
  }

  /**
   * When mounting, start off the timer for checking the height
   */
  componentDidMount() {
    this.checkHeight();
  }

  /**
   * Whenever updated, we need to recalculate our height immediately
   * @param prevProps
   * @param prevState
   */
  componentDidUpdate(prevProps, prevState) {
    this.calculateHeight();

    // we weren't running the check timer so kick it back off
    if (prevProps.calculateTimer === null) {
      this.checkHeight();
    }
  }

  /**
   * This function checks height on an interval
   */
  checkHeight() {
    this.calculateHeight();

    const { checkInterval } = this.props;

    if (checkInterval !== null) {
      const calculateTimer = setTimeout(() => this.checkHeight(), checkInterval);

      this.setState({ calculateTimer });
    }
  }

  calculateHeight() {
    const { hidden } = this.refs,
      { heightUnit, dpi, height } = this.props,
      { increments } = this.state,
      { scrollHeight } = hidden;

    if (typeof scrollHeight === 'undefined') {
      return;
    }

    // calculate the height of the page in pixels based on the dpi
    let heightUnitHeight;

    if (heightUnit === 'in') {
      heightUnitHeight = (scrollHeight / dpi);
    } else if (heightUnit === 'px') {
      heightUnitHeight = scrollHeight;
    } else if (heightUnit === 'cm') {
      heightUnitHeight = (scrollHeight / dpi) * INCHES_TO_CENTIMETERS;
    } else if (heightUnit === 'mm') {
      heightUnitHeight = (scrollHeight / dpi) * INCHES_TO_CENTIMETERS * 10;
    }

    // calculate the number of increments of one page that we should extend
    const newIncrements = Math.ceil(heightUnitHeight / height);
    if (increments !== newIncrements) {
      this.setState({ increments: newIncrements });
    }
  }

  getPageMarkers() {
    const { increments } = this.state,
      { pageMarkerClassName, pageMarkerStyle, height, heightUnit } = this.props,
      pageMarkers = [];

    for (let i = 1; i < increments; i++) {
      const markerStyle = assign({}, pageMarkerStyle, {
        position: 'absolute',
        left: 0,
        right: 0,
        top: (i * height) + heightUnit
      });

      pageMarkers.push(<div key={i} className={pageMarkerClassName} style={markerStyle}/>);
    }

    return pageMarkers;
  }

  getWidth() {
    const { width, widthUnit } = this.props;
    return (width + widthUnit);
  }

  getHiddenDiv() {
    const { style, className, children } = this.props;

    const divStyle = assign({}, style, {
      position: 'absolute',
      width: this.getWidth(),
      height: 0,
      visibility: 'hidden'
    });

    return <div key="hidden" ref="hidden" className={className} style={divStyle}>{children}</div>;
  }

  getVisibleDiv() {
    const { height, className, style, heightUnit, children }  = this.props,
      { increments } = this.state;

    const divStyle = assign({}, style, {
      overflow: 'hidden',
      position: 'relative',
      height: (height * increments) + heightUnit,
      width: this.getWidth()
    });

    return (
      <div key="visible" ref="visible" className={className} style={divStyle}>
        {this.getPageMarkers()}
        {children}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.getHiddenDiv()}
        {this.getVisibleDiv()}
      </div>
    );
  }
}

ReactPageDiv.propTypes = {
  // the width of one page
  width: PropTypes.number.isRequired,
  widthUnit: ALLOWED_UNITS,

  // the height of one page
  height: PropTypes.number.isRequired,
  heightUnit: ALLOWED_UNITS,

  // the dpi of the user agent, used to convert inches to pixels
  dpi: PropTypes.number.isRequired,

  // how often to verify the proper number of page increments are displayed in ms, or null if all dom updates are happening
  // through the div and no timer needs to be set
  checkInterval: PropTypes.number,

  // the style to apply to the page break marker
  pageMarkerStyle: PropTypes.object,
  pageMarkerClassName: PropTypes.string
};

ReactPageDiv.defaultProps = {
  widthUnit: 'in',
  heightUnit: 'in',
  dpi: 96,
  checkInterval: null,
  pageMarkerStyle: {
    borderTop: '2px dashed rgba(0,0,0,0.5)'
  },
  pageMarkerClassName: null
};

export default ReactPageDiv;
const ReactPageDivFactory = createFactory(ReactPageDiv);
export { ReactPageDivFactory };