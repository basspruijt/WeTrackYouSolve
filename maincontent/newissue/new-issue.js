import React from 'react';

import NewIssueBar from './newissuebar/new-issue-bar.js';
import NewIssueContent from './newissuecontent/new-issue-content.js';

export default class NewIssue extends React.Component {
    render() {
        return(
            <div className="issueForm">
                <form>
                    <NewIssueBar />
                    <NewIssueContent />
                </form>
            </div>
        );
    }
}