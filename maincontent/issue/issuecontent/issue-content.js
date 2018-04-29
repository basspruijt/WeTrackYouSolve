import React from 'react';

export default class IssueContent extends React.Component {
    render() {
        return(
            <div className="issueContent">
                {this.props.issue.content}
            </div>
        )
    }
}