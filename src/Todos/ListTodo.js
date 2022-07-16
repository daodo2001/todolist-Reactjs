import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "1", title: "Code" },
      { id: "2", title: "Fix bug" },
      { id: "3", title: "Fix bug" },
      { id: "4", title: "Code" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    //c1
    //let currentListTodo = this.state.listTodos;
    // currentListTodo.push(todo);

    //c2
    this.setState({
      listTodos: [...this.state.listTodos, todo],
      //c1
      // listTodos: currentListTodo
    });
    toast("Wow so easy!");
  };

  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodos,
    });
    toast("Delete success!");
  };

  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    //save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];

      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

      listTodosCopy[objIndex].title = editTodo.title;

      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });
      toast.success("Update todo succeed!");
      return;
    }

    //edit
    this.setState({
      editTodo: todo,
    });
  };

  handleOnchangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    //c2
    //let listTodos = this.state.listTodos;

    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(">>> check empty object: ", isEmptyObj);
    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === true ? (
                    //check edit oject
                    <span>
                      {" "}
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        //check todo edit có bằng todo item
                        <span>
                          {index + 1} -{" "}
                          {/* <input
                            value={editTodo.title}
                            onChange={(event) =>
                              this.handleOnchangeEditTodo(event)
                            }
                          /> */}
                          
                            <input style={{width: 350, marginTop:1, borderRadius: 8}}
                              type="text"
                
                              aria-describedby="basic-addon1"
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnchangeEditTodo(event)
                              }
                            />
                         
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}
                  {/* <button
                    className="edit"
                    onClick={() => this.handleEditTodo(item)}
                  >
                    {isEmptyObj === false && editTodo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button> */}
                  <button
                    style={{ marginLeft: 10 }}
                    type="button"
                    class="btn btn-warning"
                    onClick={() => this.handleEditTodo(item)}
                  >
                    {isEmptyObj === false && editTodo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  {/* <button
                    className="delete"
                    onClick={() => this.handleDeleteTodo(item)}
                  >
                    {" "}
                    Delete
                  </button> */}
                  <button
                    style={{ marginLeft: 10 }}
                    type="button"
                    class="btn btn-danger"
                    onClick={() => this.handleDeleteTodo(item)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
