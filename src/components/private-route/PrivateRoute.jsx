import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const PrivateRoutes = ({ 
    component: Component,
    auth,
    ...rest
}) => (
<Route render= { props => auth.isAuthenticated === true ? ( <Component {...props }/>): ( <Redirect to = "/login" /> ) } {...rest }/>
);

PrivateRoute.PropTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ auth: state.auth });
export default connect(mapStateToProps)(PrivateRoute);