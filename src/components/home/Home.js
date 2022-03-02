import React, { useState, useEffect } from 'react';
import {Container, Spinner, Row, Col} from 'react-bootstrap';
import { useQuery } from "../../utils/graphqlClient";
import LUNG_CARCINOMA_ASSOCIATED_TARGETS from "../../graphql/queries/lungCarcinomaAssociatedTargets";
import ChartContainer from "../../components/charts/Charts";

function Home() {
  const [rows, setRows] = useState([]);
  const params = { 
      id: "EFO_0001071"   // EFO ID
  };
  const { loading, data } = useQuery(LUNG_CARCINOMA_ASSOCIATED_TARGETS, { variables:  params });
  useEffect(() => {
    if (data) {
        setRows(data.disease.associatedTargets.rows);
    }
  },[loading, data]);

  const showCharts = (index) => {
     const newRows = rows.map((row, i) => {
        const newRow = {...row};
        if(i === index){
            newRow.showCharts = !newRow.showCharts;
        }
        return newRow;
     });
     setRows(newRows);
  }

  return (
    <Container className="mt-4">
         <h3 className="main-heading">Genes associated with lung carcinoma</h3>
    { loading ? (
        <div className="loading">
            <Spinner class animation="border" variant="primary" />
        </div>
    ) : (
        <div>
            <Row>
                <Row>
                    <Col sm={3} className="table-header">
                        <span className="expand expand-header"></span>
                        <span className="link-header">Approved Symbol</span>
                    </Col>
                    <Col sm={5} className="table-header ">Gene Name</Col>
                    <Col sm={4} className="table-header">Overall Association Score</Col>
                </Row>
            </Row>
            { rows && rows.map((obj, index)=>{
                    return(
                        <Row>
                            <Row>
                                <Col sm={3} className="table-body">
                                    <span className="expand" onClick={() => showCharts(index)}>+</span>
                                    <a className="link" href={`https://platform.opentargets.org/target/${obj.target.id}
`}>{ obj.target.approvedSymbol }</a>
                                </Col>
                                <Col sm={5} className="table-body">{ obj.target.approvedName }</Col>
                                <Col sm={4} className="table-body">{ obj.score }</Col>
                            </Row>
                            {
                                obj.showCharts && (
                                    <Row>
                                        <div className="table-body chart-border">
                                            <ChartContainer data={obj.datatypeScores} target={obj.target.approvedSymbol} />
                                        </div>
                                    </Row>
                                )
                            }
                        </Row>
                    )
                })            
            }
        </div>
        )
      }
    </Container>
  );
}

export default Home;