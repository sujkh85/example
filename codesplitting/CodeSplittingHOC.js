//https://velog.io/@velopert/react-code-splitting
import React, { Component } from "react";

const CodeSplittingHOC = component => {
  class WithSplitting extends Component {
    state = {
      SplittedComponent: null
    };

    constructor(props) {
      super(props);
      component().then(({ default: SplittedComponent }) => {
        this.setState({ SplittedComponent });
      });
    }

    render() {
      const { SplittedComponent } = this.state;
      if (!SplittedComponent) {
        return null;
      }
      return <SplittedComponent {...this.props} />;
    }
  }
  return WithSplitting;
};

export default CodeSplittingHOC;
