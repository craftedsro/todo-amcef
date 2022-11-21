import { NextPage } from "next";
import PageLayout from "../../src/components/ui/layout/PageLayout";
import {
  addTodo,
  editCategory,
  getCategories,
  getTodos,
} from "../../src/api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import TodoForm from "../../src/components/todo/TodoForm";
import {
  ArgsType,
  CategoryObjectWithBaseType,
  TodoObjectType,
  TodoObjectWithBaseUnionType,
  VoidType,
} from "../../src/components/types";
import Notify from "../../src/components/ui/Notify";
import { useEffect, useState } from "react";

const AddTodo: NextPage = () => {
  const queryClient = useQueryClient();

  const [selectedCategory, setSelectedCategory] =
    useState<CategoryObjectWithBaseType>();

  const [todo, setTodo] = useState<TodoObjectWithBaseUnionType>();

  useEffect(() => {
    if (todo && selectedCategory) {
      selectedCategory.todoItems.push(+todo.id);

      mutationCategory.mutate(selectedCategory);
    }
  }, [todo, selectedCategory]);

  const mutationTodo = useMutation({
    mutationFn: (newTodo: TodoObjectType) => addTodo(newTodo),
    onSuccess: (addedTodo: TodoObjectWithBaseUnionType) => {
      setTodo(addedTodo);

      queryClient.invalidateQueries({
        queryKey: ["getTodos"],
      });
    },
  });

  const mutationCategory = useMutation({
    mutationFn: (editedData: CategoryObjectWithBaseType) =>
      editCategory(editedData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getCategories"] });
    },
  });

  const handleAddTodo = (addTodoData: ArgsType): VoidType => {
    const editingTodo: TodoObjectType = {
      title: addTodoData.title,
      description: addTodoData.description,
      deadline: addTodoData.deadline,
      done: addTodoData.done,
    };

    setSelectedCategory(addTodoData.selectedCategory);

    mutationTodo.mutate(editingTodo);
  };

  return (
    <PageLayout
      siteTitle="Add Todo"
      siteDescription="Create your todos. Fill data and click submit."
    >
      <>
        {mutationTodo.isLoading || mutationCategory.isLoading ? (
          <Notify title="Adding Todo..." type="info" />
        ) : (
          <>
            {mutationTodo.isError || mutationCategory.isError ? (
              <Notify title="An Error occurred" type="error" />
            ) : (
              <div className="hero">
                <div className="hero-content flex-col">
                  {mutationTodo.isLoading || mutationCategory.isLoading ? (
                    <Notify title="Adding Todo..." type="info" />
                  ) : (
                    <>
                      {mutationTodo.isError || mutationCategory.isError ? (
                        <Notify title="An Error occurred" type="error" />
                      ) : (
                        <>
                          {mutationTodo.isSuccess ||
                            (mutationCategory.isSuccess && (
                              <Notify title="Todo added!" type="success" />
                            ))}
                        </>
                      )}
                      <div className="mt-5 md:col-span-1 md:mt-0">
                        <TodoForm onSubmit={handleAddTodo} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </>
    </PageLayout>
  );
};

export default AddTodo;
