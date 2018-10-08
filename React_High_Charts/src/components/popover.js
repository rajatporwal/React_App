import React, { Component } from 'react';
import {Button, ButtonToolbar, Overlay, Popover, ButtonGroup} from 'react-bootstrap';

export default class Example extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleClick = e => {
        this.setState({ target: e.target, show: !this.state.show });
      };
  
      this.state = {
        show: false
      };
    }
  
    render() {
      return (
        <ButtonToolbar>
          <Button onClick={this.handleClick}>Edit!!</Button>
  
          <Overlay
            show={this.state.show}
            target={this.state.target}
            placement="bottom"
            container={this}
            containerPadding={20}
          >
            <Popover id="popover-contained" title="Fill Details">
              <strong>Edit!</strong> Check this info.
              {/* <ButtonGroup>
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
            </ButtonGroup> */}
              
            </Popover>
          </Overlay>
        </ButtonToolbar>
      );
    }
  }