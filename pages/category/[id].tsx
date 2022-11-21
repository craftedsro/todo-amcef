import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, editCategory, getCategory } from "../../src/api/api";
import { NextPage } from "next";
import { useRouter } from "next/router";
import PageLayout from "../../src/components/ui/layout/PageLayout";
import TodoTable from "../../src/components/todo/TodoTable";
import Link from "next/link";
import Notify from "../../src/components/ui/Notify";
import { useEffect, useState } from "react";
import {
  CategoryObjectWithBaseType,
  CategoryObjectWithBaseUnionType,
  StringType,
  TodoObjectWithBaseDateType,
} from "../../src/components/types";

const Category: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [category, setCategory] = useState<CategoryObjectWithBaseUnionType>();

  const id = typeof router.query?.id === "string" ? router.query.id : "";

  const { isLoading, isError, data, isSuccess } = useQuery({
    queryKey: ["getCategory", id],
    queryFn: () => getCategory(id),
  });

  useEffect(() => {
    if (isSuccess && data) {
      setCategory(data);
    }
  }, [isSuccess, data, setCategory]);

  const mutationTodo = useMutation({
    mutationFn: (id: StringType) => deleteTodo(id),
    onSuccess: (todo) => {
      queryClient.invalidateQueries({ queryKey: ["getTodo", todo?.id] });
    },
  });

  const mutationCategory = useMutation({
    mutationFn: (editedData: CategoryObjectWithBaseType) =>
      editCategory(editedData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getCategory", id] });
    },
  });

  const onDeleteHandler = (todo: TodoObjectWithBaseDateType) => {
    mutationTodo.mutate(todo.id);

    if (category) {
      if (category.todoItems.indexOf(+todo.id) !== -1) {
        category.todoItems = category.todoItems.filter((e) => e !== +todo.id);
      }

      mutationCategory.mutate(category);
    }
  };

  return (
    <PageLayout
      siteTitle={isLoading ? "Loading..." : category?.title}
      siteDescription={isLoading ? "Loading..." : category?.description}
    >
      <div className="hero">
        <div className="hero-content">
          <div className="flex flex-col justify-center">
            {isLoading ? (
              <Notify title="Loading Category..." type="info" />
            ) : (
              <>
                {isError ? (
                  <Notify title="An Error occurred" type="error" />
                ) : (
                  <>
                    {isSuccess && category && category?.todoItems.length > 0 ? (
                      <TodoTable
                        todoItems={category?.todoItems}
                        onDelete={onDeleteHandler}
                      />
                    ) : (
                      <div className="flex flex-col">
                        <p className="py-5">No todos add some</p>
                        <Link
                          href={{ pathname: "../todo/add" }}
                          className="btn btn-primary"
                        >
                          Add Todo
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Category;
