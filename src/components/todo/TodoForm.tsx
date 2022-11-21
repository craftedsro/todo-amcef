import {
  CategoriesObjectWithBaseUnionType,
  CategoryObjectWithBaseType,
  NumberType,
  VoidType,
} from "../types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { ArgsType, FormDataSchema, FormDataType, PropsType } from "./types";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../api/api";

const TodoForm = ({
  id,
  title,
  description,
  deadline,
  done,
  onSubmit,
}: PropsType) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormDataType>({ resolver: zodResolver(FormDataSchema) });

  const [categories, setCategories] =
    useState<CategoriesObjectWithBaseUnionType>();
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryObjectWithBaseType>();

  const { isLoading, isSuccess, data } = useQuery({
    queryKey: ["getCategories"],
    queryFn: () => getCategories(),
  });

  useEffect(() => {
    if (isSuccess && data && data !== categories) {
      setCategories(data);
      data.map((category) => {
        if (
          id &&
          category.todoItems.find((c: NumberType) => c.toString() === id)
        ) {
          setSelectedCategory(category);
        }
      });
    }
  }, [isSuccess, data, setCategories, categories, id]);

  useEffect(() => {
    if (title !== getValues("title") && title) {
      setValue("title", title);
    }

    if (description !== getValues("description") && description) {
      setValue("description", description);
    }

    if (
      deadline?.toString().slice(0, 16) !== getValues("deadline") &&
      deadline
    ) {
      setValue("deadline", deadline.toString().slice(0, 16));
    }

    if (done !== getValues("done") && done) {
      setValue("done", done);
    }

    if (selectedCategory?.id !== getValues("selectedCategory")) {
      if (selectedCategory?.id) {
        setValue("selectedCategory", selectedCategory.id);
      }
    }
  }, [
    title,
    description,
    deadline,
    done,
    setValue,
    getValues,
    selectedCategory,
    categories,
  ]);

  const onSubmitHandler = (formData: FormDataType): VoidType => {
    const categoryTmp = categories!.find(
      (category) => category.id === formData.selectedCategory
    );
    const selectedCategoryTmp: CategoryObjectWithBaseType = categoryTmp!;

    const data: ArgsType = {
      title: formData.title,
      description: formData.description,
      deadline: new Date(formData.deadline),
      done: formData.done,
      selectedCategory: selectedCategoryTmp,
      categories: categories,
    };

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="form-control py-2">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered"
          {...register("title")}
        />
        {errors.title && (
          <p className="alert-warning">{errors.title.message}</p>
        )}
      </div>

      <div className="form-control py-2">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Type here"
          {...register("description")}
        ></textarea>
      </div>

      <div className="form-control py-2">
        <label className="label">
          <span className="label-text">Deadline</span>
        </label>
        <input
          type="datetime-local"
          className="input input-bordered"
          placeholder="Select date and time"
          {...register("deadline")}
        />
        {errors.deadline && (
          <p className="alert-warning">{errors.deadline.message}</p>
        )}
      </div>

      <div className="form-control py-2">
        <label className="label">
          <span className="label-text">Category</span>
        </label>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <select
            {...register("selectedCategory")}
            className="select select-bordered w-full max-w-xs"
          >
            <option key="none" value="">
              Pick Category
            </option>
            {categories &&
              categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                );
              })}
          </select>
        )}
        {errors.selectedCategory && (
          <p className="alert-warning">{errors.selectedCategory.message}</p>
        )}
      </div>

      <div className="form-control py-2">
        <label className="label cursor-pointer">
          <span className="label-text">Mark as Done</span>
          <input type="checkbox" {...register("done")} className="toggle" />
        </label>
      </div>

      <div className="form-control py-5">
        <input className="btn btn-primary" type="submit" />
      </div>
    </form>
  );
};

export default TodoForm;
