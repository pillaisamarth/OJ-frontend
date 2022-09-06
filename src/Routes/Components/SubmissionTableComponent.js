import axios from 'axios';
import React from 'react';
import Table from 'react-bootstrap/Table';
import Urls from '../../Config/Urls';
import Pagination from 'react-bootstrap/Pagination';

const SubmissionTableRow = ({pk, problem_title, verdict, submitted_at, language}) => {
    let color;
    if(verdict == 'AC'){
        color = 'green';
    }else{
        color = 'red';
    }
    return (
        <tr>
            <td className='center-table-component'>{pk}</td>
            <td className='center-table-component'>{problem_title}</td>
            <td className='center-table-component' style={{color:color}}>{verdict}</td>
            <td className='center-table-component'>{language}</td>
            <td className='center-table-component'>{submitted_at}</td>
        </tr>
    );
}


function SubmissionTableComponent({problemId}) {
    const [submissions, setSubmissions] = React.useState(null);
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        let data;
        axios.get(`${Urls.submissionsbase}${problemId}?page=${page}`).then((response) =>{
            data = response.data;
            setSubmissions(data);
        });
    }, [page])

    let items = [];
    let active = page;
    if(submissions != null){
        let numPages = submissions.length / 10 +  1;
        console.log(submissions[0].language);
        for(let number = 1; number <= numPages; number++){
            console.log("Hello");
            items.push(
                <Pagination.Item key={number} active={number === active}
               onClick={()=>setPage(number)}>
                    {number}
                </Pagination.Item>
            );
        }
    }

    


    return (
        <>
        <Table striped bordered className='table-size mt-5'>
        <thead>
            <tr>
            <th className='center-table-component'>#</th>
            <th className='center-table-component'>Problem</th>
            <th className='center-table-component'>Language</th>
            <th className='center-table-component'>Verdict</th>
            <th className='center-table-component'>Submitted At</th>
            </tr>
        </thead>
        <tbody>
            {
                submissions != null && 
                submissions.map((submission) => (
                    <SubmissionTableRow pk = {submission.id}
                    problem_title={submission.problem.title} verdict={submission.verdict}
                    submitted_at={submission.submitted_at} language={submission.language}/>
                ))
            }
            
        </tbody>
    </Table>
    <Pagination bsPrefix = 'pagination'>{items}</Pagination>
        </>
    );
}

export default SubmissionTableComponent;