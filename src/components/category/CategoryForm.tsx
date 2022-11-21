import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import {
  CategoryFormPropsType,
  ItemObjectSchema,
  ItemObjectType,
} from "../types";
import title from "../ui/Title";
import { zodResolver } from "@hookform/resolvers/zod";

const CategoryForm = ({
  title,
  description,
  onSubmit,
}: CategoryFormPropsType) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    setValue,
    getValues,
    formState: { isDirty, isSubmitting, errors },
  } = useForm<ItemObjectType>({ resolver: zodResolver(ItemObjectSchema) });

  useEffect(() => {
    if (title !== getValues("title")) {
      setValue("title", title);
    }

    if (description !== getValues("description")) {
      setValue("description", description);
    }
  }, [title, description, getValues, setValue]);

  const onSubmitHandler = (data: ItemObjectType) => {
    const resultData: ItemObjectType = {
      title: data.title,
      description: data.description,
    };

    onSubmit(resultData);

    clearErrors();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="form-control">
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

      <div className="form-control">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Type here"
          {...register("description")}
        ></textarea>
      </div>

      <div className="form-control py-5">
        <input
          className="btn btn-primary"
          type="submit"
          disabled={isSubmitting || !isDirty}
        />
      </div>
    </form>
  );
};

export default CategoryForm;
