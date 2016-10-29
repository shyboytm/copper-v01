import React, { Component } from 'react';

class Banner extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
  };

  render() {

    const { title, description } = this.props;

    return (
      <div id="Banner" className="mv0 w-100">
          <div className="bg-black pa6-l pa5-m ph4 pv5 cf">
            <div className="w-100">
              <h1 className="mt0 mb4 fw4 f2-ns f3 white t-tracking lh-title">
                {title}
              </h1>
              <p className="mb0 lh-copy measure white-70">
                {description}
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default Banner;
