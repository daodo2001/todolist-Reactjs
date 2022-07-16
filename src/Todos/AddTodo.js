import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };
  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAddTodo = () => {
    //check null
    if (!this.state.title) {
      toast.error(`Missing title's Todo!`);
      return;
    }
    let todo = {
      id: this.state.id,
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        {/* <input
          type="text"
          value={title}
          onChange={(event) => this.handleOnChangeTitle(event)}
        /> */}

        

        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            TODO LIST
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            value={title}
            onChange={(event) => this.handleOnChangeTitle(event)}
          />
          <button
            type="button"
            class="btn btn-success"
            onClick={() => this.handleAddTodo()}
          >
            Add
          </button>
        </div>

        {/* <button
          type="button"
          className="add"
          onClick={() => this.handleAddTodo()}
        >

          ADD
        </button> */}
      </div>
    );
  }
}
export default AddTodo;
