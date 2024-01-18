import PropTypes from 'prop-types';

const Button = ({ type, children, ...buttonProps }) => {
  const className =
    type === 'primary' ? 'btn btn-primary' : 'btn btn-secondary';
  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
};

const LoginButton = ({ ...buttonProps }) => (
  <Button type="primary" {...buttonProps} onClick={() => alert('Login')}>
    Login
  </Button>
);

const SignupButton = ({ ...buttonProps }) => (
  <Button type="secondary" {...buttonProps} onClick={() => alert('Signup')}>
    Signup
  </Button>
);

const Buttons = () => (
  <div>
    <SignupButton />
    <LoginButton onClick={() => alert('signup')} />{' '}
    {/* still alert login, because
    the onClick in LoginButton is after the {...buttonProps} , This should be noticed when using spread operator*/}
  </div>
);

export default Buttons;
