import React, { Component } from "react";
import { Grid, Row, Col, Alert } from "react-bootstrap";



class Notifications extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <div className="card">
            <div className="header">
              <h4 className="title">Notifications</h4>
              
            </div>
            <div className="content">
              <Row>
                <Col md={6}>
                  <h5>CuraNu</h5>
                  <Alert bsStyle="info">
                    <span>Nieuwe campagne CuraNed gisteren van start gegaan</span>
                  </Alert>
                  <Alert bsStyle="info">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>VIO erkend als theoretisch goed.</span>
                  </Alert>
                  <Alert bsStyle="info" className="alert-with-icon">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span data-notify="icon" className="pe-7s-bell" />
                    <span data-notify="message">
                    Commissiebrief over nieuwe Wlz.
                    </span>
                  </Alert>
                  <Alert bsStyle="info" className="alert-with-icon">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span data-notify="icon" className="pe-7s-bell" />
                    <span data-notify="message">
                    Periodieke test gebruikersgroepen.
                    </span>
                  </Alert>
                </Col>
                
              </Row>
              <br />
              <br />
              
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Notifications;
