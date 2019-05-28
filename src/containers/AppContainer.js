import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App/App';

function AppContainer(props) {
    return (
        <App user={props} />
    )
}
const mapStateToProps = function(state) {
    return {
        isGuest: 1,
    }
}

export default connect(mapStateToProps)(AppContainer);