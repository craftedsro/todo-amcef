import CategoryCard from "../../src/components/category/CategoryCard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCategory, getCategories } from "../../src/api/api";
import { NextPage } from "next";
import PageLayout from "../../src/components/ui/layout/PageLayout";
import { useEffect, useState } from "react";
import { Search } from "../../src/components/ui/Search";
import {
  CategoriesObjectWithBaseUnionType,
  CategoryObjectWithBaseType,
  StringType,
  VoidType,
} from "../../src/components/types";
import Notify from "../../src/components/ui/Notify";

const Categories: NextPage = () => {
  const queryClient = useQueryClient();

  const { isLoading, isError, data, isSuccess } = useQuery({
    queryKey: ["getCategories"],
    queryFn: getCategories,
  });

  const [searchText, setSearchText] = useState<StringType>("");
  const [categories, setCategories] =
    useState<CategoriesObjectWithBaseUnionType>([]);

  useEffect(() => {
    if (searchText && searchText !== "" && isSuccess && data) {
      setCategories(
        data.filter((category: CategoryObjectWithBaseType) =>
          category.title.includes(searchText)
        )
      );
    } else if (isSuccess) {
      setCategories(data);
    }
  }, [searchText, setCategories, data, isSuccess]);

  const mutation = useMutation({
    mutationFn: (id: StringType) => deleteCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getCategories"] });
    },
  });

  const onSearchHandler = (searchText: StringType): VoidType => {
    setSearchText(searchText);
  };

  const onDeleteHandler = (id: StringType): VoidType => {
    mutation.mutate(id);
  };

  return (
    <PageLayout
      siteTitle="All Categories"
      siteDescription="Here you can manage your categories."
    >
      <>
        <div className="flex flex-row xs:flex-col justify-center items-center">
          <Search onChange={onSearchHandler} />
        </div>
        {isLoading ? (
          <Notify title="Loading Categories..." type="info" />
        ) : (
          <>
            {isError ? (
              <Notify title="An Error occurred" type="error" />
            ) : (
              <>
                {isSuccess && categories && categories.length > 0 ? (
                  <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 md:justify-center lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {categories.map((category: CategoryObjectWithBaseType) => {
                      return (
                        <CategoryCard
                          key={category.id}
                          id={category.id}
                          title={category.title}
                          description={category.description}
                          onDelete={onDeleteHandler}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <Notify title="No categories to show." type="info" />
                )}
              </>
            )}
          </>
        )}
      </>
    </PageLayout>
  );
};

export default Categories;
