import React from 'react';
import { connect } from 'react-redux';
import ReactSuperSelect from 'react-super-select';
import { getCountry } from '../../actions/DashboardAction';
import './Dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
    this.props.dispatch(getCountry());
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="page-panel">
        <p>Hello Registration</p>
        <div className="form-field">
          <label className="form-label">Country</label>
          <ReactSuperSelect
            className="form-input"
            dataSource={this.props.Dashboard.country}
            // onChange={this.updateState}
            // deselectOnSelectedOptionClick={false}
            // clearable={false}
            // initialValue={this.props.Registration.currentRegistration.country}
          />
        </div>
        <div className="form-field">
          <label className="form-label">State</label>
          <ReactSuperSelect
            className="form-input"
            dataSource={this.props.country}
            onChange={this.updateState}
            // deselectOnSelectedOptionClick={false}
            // clearable={false}
            // initialValue={this.props.Registration.currentRegistration.country}
          />
        </div>

      </div>
    );
  }
}
function mapStateToProps(state) {
  return { Dashboard: state.dashboard.currentDashboard };
}
export default connect(mapStateToProps)(Dashboard);

// export default Dashboard;
// export default connect(mapStateToProps)(Home);
