import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Row = ({ children, spacing }) => {
  const childStyle = {
    display: 'inline-block',
    marginLeft: `${spacing}px`,
  };
  return (
    <div className="Row">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {}),
          },
        });
      })}
    </div>
  );
};
Row.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.number.isRequired,
};
function LiveOrders() {
  return (
    <div>
      <h1>Live Orders</h1>
      <div>
        <Row spacing={32}>
          <p>Pizza Margarita</p>
          <p>2</p>
          <p>30$</p>
          <p>18:30</p>
          <p>John</p>
        </Row>
      </div>
    </div>
  );
}

export default LiveOrders;
