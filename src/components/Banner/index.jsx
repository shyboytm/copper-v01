import React, { Component } from 'react';

class Banner extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    descriptionSize: React.PropTypes.string,
    description: React.PropTypes.string.isRequired,
    backgroundColor: React.PropTypes.string.isRequired
  };

  render() {

    const {
      title,
      descriptionSize,
      description,
      backgroundColor
    } = this.props;

    return (
      <div id="Banner" className={backgroundColor}>
          <div className="pa6-l pa5-m ph4 pv5 cf">
            <div className="w-100">
              <h1 className="mt0 mb4 fw4 f2-ns f3 white t-tracking lh-copy">
                {title}
              </h1>
              <p className="mb0 white-70 f3-ns f4 fw3 lh-copy lh-custom-ns">
                {description}
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default Banner;
