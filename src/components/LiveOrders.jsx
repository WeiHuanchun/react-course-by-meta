import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ children }) => {
  return (
    <div className="Row">
      {React.Children.map(children, (child, index) => {
        return child;
      })}
    </div>
  );
};
Row.propTypes = { children: PropTypes.node.isRequired };
function LiveOrders() {
  return (
    <div>
      <Row spacing={32}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>30$</p>
        <p>18:30</p>
        <p>John</p>
      </Row>
    </div>
  );
}

export default LiveOrders;
