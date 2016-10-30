import React, { Component } from 'react';

class Project extends Component {

  static propTypes = {
    projectImageSource: React.PropTypes.string.isRequired,
    projectTitle: React.PropTypes.string.isRequired,
    projectDescription: React.PropTypes.string.isRequired,
    projectAuthor: React.PropTypes.string.isRequired,
    projectUrlColor: React.PropTypes.string.isRequired,
    projectUrl: React.PropTypes.string.isRequired,
    projectDisplayUrl: React.PropTypes.string.isRequired
  };

  render() {

    const {
      projectImageSource,
      projectTitle,
      projectDescription,
      projectAuthor,
      projectUrlColor,
      projectUrl,
      projectDisplayUrl
    } = this.props;

    return (
      <div className="items-start w-50-l w-80-m w-100 ph3-ns mb5-ns mb4 mh0-l center relative">
        <a className="link" href={projectUrl}>
        <img className="q-shadow-hover w-100" src={projectImageSource} alt={projectTitle} />
        <div className="w-100">
          <h2 className="fw4 lh-title mb2 f3 black">{projectTitle}</h2>
          <p className="db lh-copy black-60 mb2">{projectDescription}</p>
          <p className="mt0 pt0 db f6 lh-copy black-30 i">by {projectAuthor}</p>
          <a className="link dim mt0 mb2 db f5" href={projectUrl}>
            <span className={projectUrlColor}>
              {projectDisplayUrl}
            </span>
          </a>
        </div>
        </a>
      </div>
    );
  }
}

export default Project;
