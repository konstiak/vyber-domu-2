import React from "react";
import { Col, Row, Card, ListGroup, Button } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default ({data}) => {
  return (<Layout>
    <SEO title="Súbory" />
    <Row>
      <Col>
        <h1>Súbory</h1>
        <p>Dodatočné materiály k štúdii</p>
      </Col>
    </Row>
    <Row>
      <Col md="6">
        <Card>
          <Card.Body>
            <Card.Text>
              <ListGroup>
              {
                data.assets.edges.map(({ node }) => (
                  <ListGroup.Item>
                    <Button variant="link" href={node.publicURL}>{node.base}</Button>
                  </ListGroup.Item>
                ))
              }
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Layout>)
}
  
export const query = graphql`
  query {
    assets: allFile(filter: {sourceInstanceName: {eq: "assets"}}) {
      edges {
        node {
          base
          publicURL
        }
      }
    }
  }`
