import React from 'react';
import classes from './../common/FormsControls/FormsControls.module.css';
import { reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { Input, createField } from '../common/FormsControls/FormsControls';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const maxLengthLogin = maxLengthCreator(35);
const maxLengthPassword = maxLengthCreator(25);

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', 'email', [required, maxLengthLogin], Input)}
      {createField(
        'Password',
        'password',
        [required, maxLengthPassword],
        Input,
        { type: 'password' }
      )}
      {createField(
        null,
        'rememberMe',
        [],
        Input,
        { type: 'checkbox' },
        'Remember Me'
      )}
      {error && <div className={classes.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={'/profile'} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
