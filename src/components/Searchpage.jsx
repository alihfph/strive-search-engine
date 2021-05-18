import React from "react";
import { Container, Row, Col, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Searchpage extends React.Component {
  state = {
    description: "",
    location: "",
    result: [],
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { description, location } = this.state;

    const response = await fetch(
      `https://strive-proxy.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`
    );
    const result = await response.json();
    console.log(result);
    this.setState({
      result,
    });
  };
  render() {
    console.log(this.state);
    return (
      <Container>
        <Row className="mt-5">
          <Col xs={12} md={8} className="mx-auto">
            <h1>Search Jobs...</h1>
            <Form onSubmit={this.handleSubmit}>
              <div className="d-flex my-3">
                <Form.Control
                  name="description"
                  className="me-1"
                  type="search"
                  placeholder="Search jobs"
                  onChange={this.handleChange}
                />
                <Form.Control
                  name="location"
                  type="search"
                  placeholder="Location"
                  onChange={this.handleChange}
                />
              </div>
              <Form.Control type="submit" value="Submit" />
            </Form>
            {this.state.result.map((r) => (
              <Col xs={12} className="d-flex">
                <Col xs={2}>
                  <Image fluid className="result-img" src={r.company_logo} />
                </Col>
                <Col xs={10} className="ps-2">
                  <h6 className="mt-3">{r.company}</h6>
                  <Link to={`/${r.id}`} className="btn btn-primary">
                    Show more
                  </Link>
                </Col>
              </Col>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}
