import React from 'react';
//import ReactDOM from 'react-dom';

import IssueBar from './issuebar/issue-bar.js';
import IssueContent from './issuecontent/issue-content.js';

export default class Issue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: true
        }
        this.toggleContent = this.toggleContent.bind(this);
    }

    toggleContent() {
        if(this.state.expanded === false) {
            this.setState({
                expanded: true
            });
        } else {
            this.setState({
                expanded: false
            });
        }
    }

    render() {
        
        var issueRender = [];
        issueRender.push(<IssueBar issue={this.props.issue} toggleContent={this.toggleContent.bind(this)} />);
        if(this.state.expanded === true) {
            issueRender.push(<IssueContent issue={this.props.issue} />);
        }

        return(
            <div className="issue">
                {issueRender}
            </div>
        )
    }
}