import { NextPage } from "next";
import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";
import {
  deleteTodo,
  editCategory,
  editTodo,
  getCategories,
  getTodos,
} from "../../src/api/api";
import PageLayout from "../../src/components/ui/layout/PageLayout";
import TodoCard from "../../src/components/todo/TodoCard";
import { useEffect, useState } from "react";
import { Search } from "../../src/components/ui/Search";
import {
  CategoryObjectWithBaseType,
  StringType,
  TodoObjectWithBaseDateType,
  VoidType,
} from "../../src/components/types";
import { FilterDoneEnumSchema, FilterDoneEnumType } from "../../src/enums";
import DoneFilter from "../../src/components/ui/DoneFilter";
import Notify from "../../src/components/ui/Notify";

const Todos: NextPage = () => {
  const queryClient = useQueryClient();

  const [searchText, setSearchText] = useState<StringType>("");
  const [doneFilter, setDoneFilter] = useState<FilterDoneEnumType>(
    FilterDoneEnumSchema.Enum.default
  );

  const [searchTodos, setSearchTodos] = useState<TodoObjectWithBaseDateType[]>(
    []
  );
  const [doneTodos, setDoneTodos] = useState<TodoObjectWithBaseDateType[]>([]);

  const [getTodosQuery, getCategoriesQuery] = useQueries({
    queries: [
      { queryKey: ["getTodos"], queryFn: getTodos },
      { queryKey: ["getCategories"], queryFn: getCategories },
    ],
  });

  useEffect(() => {
    if (
      searchText &&
      searchText !== "" &&
      getTodosQuery.isSuccess &&
      getTodosQuery.data
    ) {
      setSearchTodos(
        getTodosQuery.data.filter((todo: TodoObjectWithBaseDateType) =>
          todo.title.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    } else if (getTodosQuery.isSuccess && getTodosQuery.data) {
      setSearchTodos(getTodosQuery.data);
    }
  }, [searchText, setSearchTodos, getTodosQuery]);

  useEffect(() => {
    if (doneFilter !== "default") {
      let done = doneFilter === "done";

      setDoneTodos(
        searchTodos.filter(
          (searchTodo: TodoObjectWithBaseDateType) => searchTodo.done === done
        )
      );
    } else if (getTodosQuery.isSuccess) {
      setDoneTodos(searchTodos);
    }
  }, [doneFilter, setDoneFilter, searchTodos, getTodosQuery]);

  const mutationDelete = useMutation({
    mutationFn: (id: StringType) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTodos"] });
    },
  });

  const mutationDone = useMutation({
    mutationFn: (editedData: TodoObjectWithBaseDateType) =>
      editTodo(editedData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTodos"] });
    },
  });

  const mutationDeleteFromCategory = useMutation({
    mutationFn: (category: CategoryObjectWithBaseType) =>
      editCategory(category),
  });

  const onDeleteHandler = (id: StringType): VoidType => {
    mutationDelete.mutate(id);

    if (getCategoriesQuery.isSuccess && getCategoriesQuery.data) {
      getCategoriesQuery.data.map((category) => {
        if (category.todoItems.indexOf(+id) !== -1) {
          category.todoItems = category.todoItems.filter((e) => e !== +id);

          mutationDeleteFromCategory.mutate(category);
        }
      });
    }
  };

  const onDoneHandler = (todo: TodoObjectWithBaseDateType): VoidType => {
    mutationDone.mutate(todo);
  };

  const onSearchHandler = (searchTextData: StringType): VoidType => {
    setSearchText(searchTextData);
  };

  const onFilterDoneHandler = (
    doneFilterData: FilterDoneEnumType
  ): VoidType => {
    setDoneFilter(doneFilterData);
  };

  return (
    <PageLayout
      siteTitle="All Todos"
      siteDescription="Here you can see all your Todos."
    >
      <>
        <div className="flex flex-row xs:flex-col justify-center items-center">
          <Search onChange={onSearchHandler} />
          <DoneFilter onChange={onFilterDoneHandler} />
        </div>
        {getTodosQuery.isLoading ? (
          <Notify title="Loading Todos..." type="info" />
        ) : (
          <>
            {getTodosQuery.isError ? (
              <Notify title="An Error occurred" type="error" />
            ) : (
              <>
                {getTodosQuery.isSuccess &&
                doneTodos &&
                doneTodos.length > 0 ? (
                  <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 md:justify-center lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {doneTodos.map((todo: TodoObjectWithBaseDateType) => {
                      return (
                        <TodoCard
                          key={todo.id}
                          todo={todo}
                          onDelete={onDeleteHandler}
                          onDone={onDoneHandler}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <Notify title="No todos to show." type="info" />
                )}
              </>
            )}
          </>
        )}
      </>
    </PageLayout>
  );
};

export default Todos;
