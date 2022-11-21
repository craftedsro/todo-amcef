import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  editCategory,
  editTodo,
  getCategories,
  getTodo,
} from "../../src/api/api";
import { useRouter } from "next/router";
import { NextPage } from "next";
import PageLayout from "../../src/components/ui/layout/PageLayout";
import React, { useEffect, useState } from "react";
import {
  ArgsType,
  CategoryObjectWithBaseType,
  TodoObjectWithBaseType,
  TodoObjectWithBaseUnionType,
  VoidType,
} from "../../src/components/types";
import Notify from "../../src/components/ui/Notify";
import TodoForm from "../../src/components/todo/TodoForm";

const EditTodo: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [todo, setTodo] = useState<TodoObjectWithBaseUnionType>(undefined);

  const id = typeof router.query?.id === "string" ? router.query.id : "";

  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ["getTodo", id],
    queryFn: () => getTodo(id),
  });

  useEffect(() => {
    if (isSuccess && data !== todo) {
      setTodo(data);
    }
  }, [isSuccess, data, todo, setTodo]);

  const mutationTodo = useMutation({
    mutationFn: (editedData: TodoObjectWithBaseType) => editTodo(editedData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTodo", id] });
    },
  });

  const mutationCategory = useMutation({
    mutationFn: (editedData: CategoryObjectWithBaseType) =>
      editCategory(editedData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getCategories"] });
    },
  });

  const handleEditTodo = (editTodoData: ArgsType): VoidType => {
    if (data !== undefined) {
      const editedTodo = {
        id: data?.id,
        createdAt: data.createdAt,
        title: editTodoData.title,
        description: editTodoData.description,
        deadline: editTodoData.deadline,
        done: editTodoData.done,
      };

      mutationTodo.mutate(editedTodo);

      editTodoData.categories &&
        editTodoData.categories.map((category) => {
          if (category !== editTodoData.selectedCategory) {
            if (category.todoItems.indexOf(+editedTodo.id) !== -1) {
              category.todoItems = category.todoItems.filter(
                (e) => e !== +editedTodo.id
              );
            }
          } else {
            if (category.todoItems.indexOf(+editedTodo.id) === -1) {
              category.todoItems.push(+editedTodo.id);
            }
          }

          mutationCategory.mutate(category);
        });
    }
  };

  return (
    <PageLayout
      siteTitle={isLoading ? "Loading..." : "Edit Todo"}
      siteDescription={isLoading ? "Loading..." : "Edit data and click submit."}
    >
      <div className="hero">
        <div className="hero-content flex-col">
          {mutationTodo.isLoading ? (
            <Notify title="Editing Todo..." type="info" />
          ) : (
            <>
              {!todo || mutationTodo.isError || isError ? (
                <Notify title="An Error occurred" type="error" />
              ) : null}
              {mutationTodo.isSuccess ? (
                <Notify title="Todo edited!" type="success" />
              ) : null}
              <div className="mt-5 md:col-span-1 md:mt-0">
                {isLoading || isLoading ? (
                  <Notify title="Loading Todo..." type="info" />
                ) : (
                  <TodoForm {...todo} onSubmit={handleEditTodo} />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default EditTodo;
