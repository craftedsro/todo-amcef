import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { editCategory, getCategory } from "../../src/api/api";
import { useRouter } from "next/router";
import { NextPage } from "next";
import PageLayout from "../../src/components/ui/layout/PageLayout";
import React, { useEffect, useState } from "react";
import Notify from "../../src/components/ui/Notify";
import {
  CategoryObjectExtendedType,
  CategoryObjectWithBaseType,
  CategoryObjectWithBaseUnionType,
  ItemObjectType,
  VoidType,
} from "../../src/components/types";
import CategoryForm from "../../src/components/category/CategoryForm";

const EditCategory: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [category, setCategory] = useState<CategoryObjectWithBaseUnionType>();

  const id = typeof router.query?.id === "string" ? router.query.id : "";

  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ["getCategory", id],
    queryFn: () => getCategory(id),
  });

  useEffect(() => {
    if (isSuccess && data && data !== category) {
      setCategory(data);
    }
  }, [isSuccess, data, setCategory, category]);

  const mutation = useMutation({
    mutationFn: (editedData: CategoryObjectWithBaseType) =>
      editCategory(editedData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getCategory", id] });
    },
  });

  const handleEditCategory = (editCategoryData: ItemObjectType): VoidType => {
    const editingCategory: CategoryObjectExtendedType = {
      id: id,
      createdAt: category?.createdAt ? category?.createdAt : new Date(),
      title: editCategoryData.title,
      description: editCategoryData.description,
      todoItems: category ? category.todoItems : [],
    };

    mutation.mutate(editingCategory);
  };

  return (
    <PageLayout
      siteTitle={isLoading ? "Loading..." : "Edit Category"}
      siteDescription={isLoading ? "Loading..." : "Edit data and click submit."}
    >
      <>
        {isLoading ? (
          <Notify title="Loading Category..." type="info" />
        ) : isError ? (
          <Notify title="An Error occurred" type="error" />
        ) : isSuccess && mutation.isLoading ? (
          <Notify title="Editing Category..." type="info" />
        ) : (
          <div className="hero">
            <div className="hero-content flex-col">
              {mutation.isError ? (
                <Notify title="An Error occurred" type="error" />
              ) : (
                <>
                  {mutation.isSuccess && (
                    <Notify title="Category edited!" type="success" />
                  )}
                </>
              )}
              {category && (
                <div className="mt-5 md:col-span-1 md:mt-0">
                  <CategoryForm
                    title={category.title}
                    description={category.description}
                    onSubmit={handleEditCategory}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </>
    </PageLayout>
  );
};

export default EditCategory;
