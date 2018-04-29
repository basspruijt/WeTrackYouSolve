import React from 'react';
//import ReactDOM from 'react-dom';

import Issue from './issue/issue.js';

export default class MainContent extends React.Component {
    render() {
 
        var issues = [
            [0, "Issue 1", "18051994", "The content of Issue 1"], 
            [1, "Issue 2", "17041992", "The content of Issue 2"],
            [2, "Issue 3", "29042018", "The content of Issue 3"], 
            [3, "Issue 4", "24022015", "The content of Issue 4"], 
            [4, "Issue 5", "14011705", "The content of Issue 5"]];

        var issuesRender = [];
        for(var i = 0; i<issues.length; i++) {

            var issue = issues[i];

            issuesRender.push(<Issue issue={issue} />);
        }

        return(
            <div className="issueWrapper">
                {issuesRender}
            </div>
        )
    }
}