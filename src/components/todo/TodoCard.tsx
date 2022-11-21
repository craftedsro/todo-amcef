import Link from "next/link";
import CountDown from "./CountDown";
import {
  TodoCardPropsType,
  TodoObjectWithBaseDateType,
  VoidType,
} from "../types";

const TodoCard = ({ todo, onDelete, onDone }: TodoCardPropsType) => {
  const { id, title, description, deadline, done } = todo;

  const handleDelete = (): VoidType => {
    onDelete(todo.id);
  };

  const handleMarkAsDone = (): VoidType => {
    const editedTodo: TodoObjectWithBaseDateType = todo;

    editedTodo.done = !todo.done;

    onDone(editedTodo);
  };

  return (
    <div className="card bg-base-100 shadow-xl transform transition duration-500 hover:scale-110">
      <div className="card-body items-center">
        <Link href={{ pathname: "/todo/" + id }}>
          <h2 className="card-title">{title}</h2>
          <p className="py-2">{description}</p>
          <CountDown deadline={deadline} className="py-5" />
        </Link>
        <div className="card-actions w-full">
          <div className="flex flex-col w-full items-center justify-center">
            <button className="btn w-full" onClick={handleMarkAsDone}>
              {done ? "Mark as undone" : "Mark as Done"}
            </button>
            <div className="flex w-full space-x-5 pt-5">
              <Link
                href={{ pathname: `./todo/edit`, query: { id: id } }}
                className="btn btn-primary grow"
              >
                Edit
              </Link>
              <button className="btn btn-secondary grow" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
