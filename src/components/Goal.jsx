import { useState } from 'react';
import PropTypes from 'prop-types';

function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: '', by: '' });
  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value }); // Interesting!
  }
  function submitHandler(event) {
    event.preventDefault();
    // console.log(formData);
    props.onAdd(formData);
    setFormData({ goal: '', by: '' });
  }
  return (
    <>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="goal"
          placeholder="Goal"
          value={formData.goal}
          onChange={handleChange}
        />
        <input
          type="text"
          name="by"
          placeholder="By"
          value={formData.by}
          onChange={handleChange}
        />
        <button type="submit" style={{ margin: '10px' }}>
          Submit Goal
        </button>
      </form>
    </>
  );
}
GoalForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

function GoalList(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is {g.goal}, by {g.by}
          </span>
        </li>
      ))}
    </ul>
  );
}

GoalList.propTypes = {
  allGoals: PropTypes.array.isRequired,
};

function Goal() {
  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }

  return (
    <>
      <GoalForm onAdd={addGoal} />
      <GoalList allGoals={allGoals} />
    </>
  );
}

export default Goal;
