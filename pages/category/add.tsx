import { NextPage } from "next";
import CategoryForm from "../../src/components/category/CategoryForm";
import PageLayout from "../../src/components/ui/layout/PageLayout";
import { addCategory } from "../../src/api/api";
import { useMutation } from "@tanstack/react-query";
import Notify from "../../src/components/ui/Notify";
import {
  CategoryFormAddType,
  ItemObjectType,
  VoidType,
} from "../../src/components/types";

const AddCategory: NextPage = () => {
  const mutation = useMutation({
    mutationFn: (newCategory: CategoryFormAddType) => addCategory(newCategory),
  });

  const handleAddCategory = (addingCategory: ItemObjectType): VoidType => {
    const addCategory: CategoryFormAddType = {
      title: addingCategory.title,
      description: addingCategory.description,
      todoItems: [],
    };

    mutation.mutate(addCategory);
  };

  return (
    <PageLayout
      siteTitle="Add Category"
      siteDescription="Create your categories. Fill data and click submit."
    >
      <div className="hero">
        <div className="hero-content flex-col">
          {mutation.isLoading ? (
            <Notify title="Adding Category..." type="info" />
          ) : (
            <>
              {mutation.isError ? (
                <Notify title="An Error occurred" type="error" />
              ) : (
                <>
                  {mutation.isSuccess && (
                    <Notify title="Category added!" type="success" />
                  )}
                </>
              )}
              <div className="mt-5 md:col-span-1 md:mt-0">
                <CategoryForm title="" onSubmit={handleAddCategory} />
              </div>
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default AddCategory;
