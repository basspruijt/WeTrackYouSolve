import React from 'react';

export default class NewIssueBar extends React.Component {
    render() {
        return(
            <div className="newIssueBar">
                <div className="issueBarIndex">
                    1
                </div>
                <div className="newIssueBarTitle">
                    <input type="text" placeholder="Enter a title" class="newIssueTitleInput" />
                </div>
                <div className="newIssueBarPriority">
                    <div class="dropdownButton">Priority
                        <div class="priorityDropdownContent">
                            <a href="{javascript:void(0)}">Highest</a>
                            <a href="{javascript:void(0)}">High</a>
                            <a href="{javascript:void(0)}">Medium</a>
                            <a href="{javascript:void(0)}">Low</a>
                            <a href="{javascript:void(0)}">Lowest</a>
                        </div>
                    </div>
                </div>
                <div className="newIssueBarDateText">
                    Created on:
                </div>
                <div className="newIssueBarDate">
                    29-04-2018
                </div>
            </div>
        );
    }
}