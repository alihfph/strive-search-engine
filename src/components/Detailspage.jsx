import React from "react";
import { Container, Col, Image, Row } from "react-bootstrap";

export default class Detailspage extends React.Component {
  state = {
    jobDetails: null,
  };

  componentDidMount() {
    this.getJobDetails();
  }

  getJobDetails = async () => {
    const response = await fetch(
      `https://strive-proxy.herokuapp.com/https://jobs.github.com/positions/${this.props.match.params.jobId}.json`
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
                <h1>{jobDetails.company}</h1>
              </Col>
              <Col xs={12} className=" ">
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
