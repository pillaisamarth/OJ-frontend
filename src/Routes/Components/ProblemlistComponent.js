import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import Urls from '../../Config/Urls';
import { Link } from 'react-router-dom';

const Problem = ({pk, title, difficulty}) => {
    return (
        <tr>
            <td style={{textAlign:'center'}}>{pk}</td>
            <td>
                <Link to = {`problem/${pk}/mysubmissions`}>
                    {title}
                </Link>
            </td>
            <td style={{textAlign:'center'}}>{difficulty}</td>
        </tr>
    );
}

const problemset = [
    {
        pk: 1,
        title: "Sum of two numbers",
        difficulty:100
    },
    {
        pk:2,
        title: "Sum of Array",
        difficulty:100
    },
    {
        pk:3,
        title: "Product of two numbers",
        difficulty:100
    }
]

function ProblemlistComponent(props) {
    const [problems, setProblems] = React.useState(null);

    React.useEffect(() => {
        let data;
        axios.get(Urls.problemlist).then((response) => {
        console.log(response.data);
        data = response.data;
        setProblems(data)
        });
    }, []);

    return (
       <div className='problem-list-container'>
         <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th style={{width:'5%', textAlign:'center'}}>
            #
          </th>
          <th style={{textAlign:'center'}}>Problem</th>
          <th style={{width:'10%', textAlign:'center'}}>Difficulty</th>
        </tr>
      </thead>
      <tbody>
        { problems != null && 
            problems.map((problem) => (
                <Problem pk={problem.pk} title={problem.title} difficulty={problem.difficulty}/>
            )) 
        }
      </tbody>
    </Table>
       </div>
    );
}

export default ProblemlistComponent;