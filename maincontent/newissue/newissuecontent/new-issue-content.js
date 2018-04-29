import React from 'react';

export default class NewIssueContent extends React.Component {
    render() {
        return(
            <div className="issueContent">
                <textarea name="newIssueContent" class="newIssueContentInput" rows="10"></textarea>
            </div>
        );
    }
}