import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import TaskList from '../components/TaskList';
import { TaskListState } from '../reducers/taskList';
import { Task } from '../services/task';
import { add, toggle, remove, set } from '../actions/taskList';

interface StateProps {
  tasks: Task[];
}

interface DispatchProps {
  add: (task: Task) => void;
  set: (tasks: Task[]) => void;
  remove: (task: Task) => void;
  toggle: (task: Task) => void;
}

const mapStateToProps = (state: TaskListState): StateProps => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  add: title => dispatch(add(title)),
  set: tasks => dispatch(set(tasks)),
  remove: task => dispatch(remove(task)),
  toggle: task => dispatch(toggle(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
