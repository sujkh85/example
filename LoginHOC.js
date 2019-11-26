import React, { Component } from "react";
import { connect } from "react-redux";
const LoginHOC = WrapperComponent => {
  const mapStateToProps = (state, ownProps) => {
    return {
      authInfoRes: state.AuthReducer.authInfoRes,
      adminInfoRes: state.SystemReducer.adminInfoRes
    };
  };

  return connect(mapStateToProps)(
    class extends Component {
      render() {
        let isLogin = false;
        if (Object.keys(this.props.authInfoRes).length !== 0) {
          isLogin = true;
        }
        const authInfoRes = {
          authInfo: this.props.authInfoRes,
          adminInfo: this.props.adminInfoRes
        };
        const newProps = { ...this.props, authInfoRes, isLogin: isLogin };
        return <WrapperComponent {...newProps} />;
      }
    }
  );
};

export default LoginHOC;
