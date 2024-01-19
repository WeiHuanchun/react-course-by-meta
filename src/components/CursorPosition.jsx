import { useState, useEffect } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const withMousePosition = (WrappedComponent) => {
  const ComponentWithMousePosition = (props) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
      const handleMousePositionChange = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      };
      window.addEventListener('mousemove', handleMousePositionChange);

      return () => {
        window.removeEventListener('mousemove', handleMousePositionChange);
      };
    }, []);
    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };

  return ComponentWithMousePosition;
};

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) return null;
  return (
    <div>
      <p>Mouse position:</p>
      <div className="row">
        <span>x:{mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

PanelMouseLogger.propTypes = {
  mousePosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) return null;
  return (
    <p>
      ({mousePosition.x},{mousePosition.y})
    </p>
  );
};
PointMouseLogger.propTypes = {
  mousePosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

const CursorPosition = () => {
  return (
    <div>
      <h1>CursorPosition</h1>
      <header>Cursor</header>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
};

export default CursorPosition;
