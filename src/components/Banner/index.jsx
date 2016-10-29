import React, { Component } from 'react';

class Banner extends Component {

  static propTypes = {
    titleStyles: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    descriptionStyles: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    backgroundColor: React.PropTypes.string.isRequired
  };

  render() {

    const {
      backgroundColor,
      titleStyles,
      title,
      descriptionStyles,
      description,
    } = this.props;

    return (
      <div id="Banner" className={backgroundColor}>
          <div className="pa6-l pa5-m ph4 pv5 cf">
            <div className="w-100">
              <h1 className="mt0 mb4 fw4 f2-ns f3 t-tracking lh-copy">
                <span className={titleStyles}>{title}</span>
              </h1>
              <p className="mb0 f3-ns f4 fw3 lh-subtitle">
                <span className={descriptionStyles}>{description}</span>
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default Banner;
