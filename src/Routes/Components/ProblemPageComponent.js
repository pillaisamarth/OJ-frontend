import React, {useCallback, useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProblemDetailComponent from './ProblemDetailComponent';
import SubmissionTableComponent from './SubmissionTableComponent';
import {useNavigate, useParams} from 'react-router-dom';

function ProblemPageComponent(props) {
    let params = useParams();
    const [key, setKey] = useState(params.eventKey)
    function handleChange(newKey) {
        setKey(newKey);
    }
    let navigate = useNavigate()
    return (
        <Tabs
        defaultActiveKey= 'problem'
        activeKey={key}
        onSelect={(k) => setKey(k)}
        id="fill-tab-example"
        className="mb-5"
        fill
        >
        <Tab eventKey="problem" title="Problem">
            <ProblemDetailComponent problemId={params.problemId} onChange={handleChange}/>
        </Tab>
        <Tab eventKey="allsubmissions" title="All Submissions">
            <SubmissionTableComponent problemId={params.problemId}  key={key} onChange={handleChange}/>
        </Tab>
        <Tab eventKey="mysubmissions" title="My Submissions"  key={key} onChange={handleChange}>
        </Tab>
        </Tabs>
    );
}

export default ProblemPageComponent;