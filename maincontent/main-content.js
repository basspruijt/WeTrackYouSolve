import React from 'react';
//import ReactDOM from 'react-dom';

import Issue from './issue/issue.js';
import NewIssue from './newissue/new-issue.js';

export default class MainContent extends React.Component {
    render() {
 
        var issues = [{
            id: 0,
            date: 18051994,
            title: "Issue 1",
            content: "All of the content of issue 1 would go here."
        }, {
            id: 1,
            date: 29042018,
            title: "Issue 2",
            content: "All of the content of issue 2 would go here."
        }];

        var issuesRender = [];
        for(var i = 0; i<issues.length; i++) {

            var issue = issues[i];

            issuesRender.push(<Issue issue={issue} />);
        }

        return(
            <div>
                <div className="issueWrapper">
                    {issuesRender}
                </div>
                <div className="newIssue">
                    <NewIssue />
                </div>
            </div>
        )
    }
}