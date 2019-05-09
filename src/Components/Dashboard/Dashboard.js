import React from 'react';
import { connect } from 'react-redux';
import './Dashboard.scss';
import { getEmpData } from '../../actions/DashboardAction';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
    if (this.props.dashboard.employee && !this.props.dashboard.employee.length) {
      this.getEmpData();
    }
  }
  componentDidMount() {
  }
  getEmpData = () => {
    this.props.dispatch(
      getEmpData(this.props.dashboard.employee)
    );
  }
  render() {
    const response = [];
    if (this.props.dashboard.employee && this.props.dashboard.employee.length !== 0) {
      this.props.dashboard.employee.map((keySub) => {
        response.push(<tr><td className="app-wrapper1">
          {keySub.id}
        </td>
          <td className="app-wrapper1">
            {keySub.name}
          </td>
          <td className="app-wrapper1">
            {keySub.age}
          </td>
          <td className="app-wrapper1">
            {keySub.gender}
          </td>
          <td className="app-wrapper1">
            {keySub.email}
          </td>
          <td className="app-wrapper1">
            {keySub.phoneNo}
          </td>
        </tr>
        );
        return 1;
      });
    }
    return (
      <div className="page-panel">
        <table className="app-wrapper5 responce" border={1}>
          <tr>
            <td className="page-panel">ID</td>
            <td className="page-panel">NAME</td>
            <td className="page-panel">AGE</td>
            <td className="page-panel">GENDER</td>
            <td className="page-panel">EMAIL</td>
            <td className="page-panel">PHONE</td>
          </tr>
          {response}
        </table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { dashboard: state.dashboard };
}

export default connect(mapStateToProps)(Dashboard);
