import { useQuery } from "@tanstack/react-query";
import { getTodo } from "../../src/api/api";
import { NextPage } from "next";
import { useRouter } from "next/router";
import PageLayout from "../../src/components/ui/layout/PageLayout";
import Notify from "../../src/components/ui/Notify";
import { TodoObjectWithBaseUnionType } from "../../src/components/types";
import { useEffect, useState } from "react";
import TodoDetail from "../../src/components/todo/TodoDetail";

const Todo: NextPage = () => {
  const router = useRouter();
  const [todo, setTodo] = useState<TodoObjectWithBaseUnionType>();

  const id = typeof router.query?.id === "string" ? router.query.id : "";

  const { isLoading, isError, data, isSuccess } = useQuery({
    queryKey: ["getTodo", id],
    queryFn: () => getTodo(id),
  });

  useEffect(() => {
    if (isSuccess && data) {
      setTodo(data);
    } else {
      setTodo(undefined);
    }
  }, [isSuccess, data, setTodo]);

  return (
    <PageLayout
      siteTitle={isLoading && !todo ? "Loading..." : todo?.title}
      siteDescription={isLoading && !todo ? "Loading..." : todo?.description}
    >
      <div className="hero">
        <div className="hero-content">
          <div className="flex flex-col justify-center">
            {isLoading ? (
              <Notify title="Loading Todo..." type="info" />
            ) : (
              <>
                {isError ? (
                  <Notify title="An Error occurred" type="error" />
                ) : (
                  <>
                    {isSuccess && todo ? (
                      <TodoDetail deadline={todo.deadline} done={todo.done} />
                    ) : (
                      <Notify title="No data to show" type="info" />
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

export default Todo;
