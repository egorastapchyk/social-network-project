import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { logout })(Header);
