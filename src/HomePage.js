import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

const HomePage = () => {
    return (
        <Home
            dish={this.props.tasks}
        />
    );
}

export default connect(mapStateToProps)(HomePage);