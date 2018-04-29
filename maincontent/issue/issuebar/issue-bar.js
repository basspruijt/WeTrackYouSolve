import React from 'react';


export default class IssueBar extends React.Component {
    render() {

        var date = this.props.issue[2];
        var dateArr = [];
        for(var i=0; i<date.length; i++) {
            dateArr.push(date.charAt(i));
            if(i===1 || i===3) {
                dateArr.push("-");
            }
        }

        return(
            <div className="issueBar">
                <div className="issueBarIndex">
                    {this.props.issue[0]}
                </div>
                <div className="issueBarTitle">
                    {this.props.issue[1]}
                </div>
                <div className="issueBarDate">
                    {dateArr}
                </div>
            </div>
        )
    }
}