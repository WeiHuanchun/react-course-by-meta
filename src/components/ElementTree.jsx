import PropTypes from 'prop-types';

const Button = ({ children, backgroundColor }) => {
  return <button style={{ backgroundColor }}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

const Alert = ({children}) => {
  return (
    <>
      <div className='Overlay'></div>
      <div className='Alert'>{children}</div>
    </>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
};

const DeleteButton = () => {
    
  return <Button backgroundColor="red">Delete</Button>;
};

function ElementTree() {
  return (
    <div>
      <header>Element Tree</header>
      <Alert>
        <h4>Delete a User</h4>
        <p>Are you sure you want to delete this user?</p>
        <DeleteButton />
      </Alert>
    </div>
  );
}

export default ElementTree;
