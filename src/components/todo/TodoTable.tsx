import { useQueries, UseQueryResult } from "@tanstack/react-query";
import { getTodo } from "../../api/api";
import CountDown from "./CountDown";
import { TodoObjectWithBaseDateType, TodoTablePropsType } from "../types";
import Link from "next/link";

const TodoTable = ({ onDelete, todoItems }: TodoTablePropsType) => {
  const todos: UseQueryResult[] = useQueries({
    queries: todoItems.map((id) => {
      return {
        queryKey: ["getTodo", id],
        queryFn: () => getTodo(id.toString()),
      };
    }),
  });

  const isLoading = !todos.some((result) => result.isLoading);

  const onDeleteHandler = (todo: TodoObjectWithBaseDateType) => {
    onDelete(todo);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Description</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            todos.map((todo, key) => {
              const row = todo.data as TodoObjectWithBaseDateType;

              return (
                <tr key={key}>
                  <th>{row.id}</th>
                  <td>
                    <Link href={{ pathname: "../todo/" + row.id }}>
                      {row.title}
                    </Link>
                  </td>
                  <td>{row.description}</td>
                  <td>{<CountDown deadline={row.deadline} />}</td>
                  <td>
                    <Link
                      href={{ pathname: "../todo/edit", query: { id: row.id } }}
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button type="button" onClick={() => onDeleteHandler(row)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <th>...</th>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
