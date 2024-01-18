import PropTypes from 'prop-types';

function Dialog(props) {
  return <div style={{ color: props.color }}>{props.children}</div>;
}

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

function ConfirmationDialog() {
  return (
    <Dialog color="blue">
      <h1>Dialog</h1>
    </Dialog>
  );
}

export default ConfirmationDialog;
