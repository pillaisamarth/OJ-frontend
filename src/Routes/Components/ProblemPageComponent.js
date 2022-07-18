import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProblemDetailComponent from './ProblemDetailComponent';
import SubmissionTableComponent from './SubmissionTableComponent';
import {useParams} from 'react-router-dom';

function ProblemPageComponent(props) {
    let params = useParams();
    return (
        <Tabs
        defaultActiveKey="problem"
        id="fill-tab-example"
        className="mb-5"
        fill
        >
        <Tab eventKey="problem" title="Problem">
            <ProblemDetailComponent problemId={params.problemId}/>
        </Tab>
        <Tab eventKey="allsubmissions" title="All Submissions">
            <SubmissionTableComponent problemId={params.problemId}/>
        </Tab>
        <Tab eventKey="mysubmissions" title="My Submissions">
        </Tab>
        </Tabs>
    );
}

export default ProblemPageComponent;