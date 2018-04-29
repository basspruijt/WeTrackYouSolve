import React from 'react';


export default class IssueBar extends React.Component {
    render() {

        var date = this.props.issue.date.toString();
        var dateArr = [];
        for(var i=0; i<date.length; i++) {
            dateArr.push(date.charAt(i));
            if(i===1 || i===3) {
                dateArr.push("-");
            }
        }

        return(
            <div className="issueBar" onClick={this.props.toggleContent}>
                <div className="issueBarIndex">
                    {this.props.issue.id}
                </div>
                <div className="issueBarTitle">
                    {this.props.issue.title}
                </div>
                <div className="issueBarDateText">
                    Created on:
                </div>
                <div className="issueBarDate">
                    {dateArr}
                </div>
            </div>
        )
    }
}