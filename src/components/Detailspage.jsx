import React from "react";
import { Container, Col, Image, Row } from "react-bootstrap";

export default class Detailspage extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.id)
    this.state = {
      jobDetails: null,
    };}
  

  componentDidMount() {
    this.getJobDetails();
  }

  getJobDetails = async () => {
    const response = await fetch(
      `https://strive-proxy.herokuapp.com/https://jobs.github.com/positions/${this.props.match.params.id}.json`
    );
    const jobDetails = await response.json();
    console.log(jobDetails);

    this.setState({ jobDetails });
  };

  render() {
    const { jobDetails } = this.state;
    return (
      <Container>
        <Row>
          {jobDetails && (
            <>
              <Col xs={12} className="d-flex align-items-center my-4">
                <Image
                  fluid
                  className="header-img me-3"
                  src={jobDetails.company_logo}
                />
                 
                
              </Col>
              <Col xs={12} className=" ">
              <h1>{jobDetails.company}</h1>
                <div
                  dangerouslySetInnerHTML={{ __html: jobDetails.description }}
                />

                <h5>How to apply:</h5>
                <div
                  dangerouslySetInnerHTML={{ __html: jobDetails.how_to_apply }}
                />
              </Col>
            </>
          )}
        </Row>
      </Container>
    );
  }
}
