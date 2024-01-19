import Feedback from './Feedback';

function ForTest() {
  const handleSubmit = () => {
    console.log('Submitted');
  };
  return (
    <div>
      <Feedback onSubmit={handleSubmit} />
    </div>
  );
}

export default ForTest;
