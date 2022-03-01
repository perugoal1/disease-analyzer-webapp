import React, { useState } from 'react';
import {Container, Spinner, Row, Col, Button} from 'react-bootstrap';
import { useQuery } from "../../utils/graphqlClient";
import LUNG_CARCINOMA_ASSOCIATED_TARGETS from "../../graphql/queries/lungCarcinomaAssociatedTargets";


function Home() {
  const [count, setCount] = useState(0);
  const { loading, error, data } = useQuery(LUNG_CARCINOMA_ASSOCIATED_TARGETS);
  
  if (loading) return  <Spinner animation="grow" variant="primary" />;
  const { rows } = data.disease.associatedTargets;
  return (
    <Container>
        <h3>Genes associated with lung carcinoma</h3>
        <Row>
            <Col sm={2} className="table-header">Approved Symbol</Col>
            <Col sm={6} className="table-header">Approved Name</Col>
            <Col sm={4} className="table-header">Score</Col>
        </Row>
        { rows && rows.map((obj, index)=>{
                return(
                    <Row>
                        <Row>
                            <Col sm={2} className="table-body link">
                                <span className="expand">+</span>
                                { obj.target.approvedSymbol }
                            </Col>
                            <Col sm={6} className="table-body">{ obj.target.approvedName }</Col>
                            <Col sm={4} className="table-body">{ obj.score }</Col>
                        </Row>
                        <Row>

                        </Row>
                    </Row>
                )
            })
        }
    </Container>
  );
}

export default Home;