import axios from "axios";
import {
  CategoriesObjectWithBaseUnionType,
  CategoryFormAddType,
  CategoryObjectWithBaseType,
  CategoryObjectWithBaseUnionType,
  StringType,
  TodoObjectType,
  TodoObjectWithBaseType,
  TodoObjectWithBaseUnionType,
} from "../components/types";

const API_URL = "https://636ba3e07f47ef51e13633ee.mockapi.io/api/v1/";
const CATEGORY_URL = "category";
const TODO_URL = "todo";

export const getCategories =
  async (): Promise<CategoriesObjectWithBaseUnionType> => {
    try {
      const result = await axios.get(API_URL + CATEGORY_URL);

      return result.data;
    } catch (err) {
      console.log(err);
    }
  };

export const getCategory = async (
  id: string
): Promise<CategoryObjectWithBaseUnionType> => {
  try {
    const result = await axios.get(`${API_URL}${CATEGORY_URL}/${id}`);

    return result.data;
  } catch (err) {
    console.log(err);
  }
};

export const addCategory = async (
  data: CategoryFormAddType
): Promise<TodoObjectWithBaseUnionType> => {
  try {
    const result = await axios.post(`${API_URL}${CATEGORY_URL}`, data);

    return result.data;
  } catch (err) {
    console.log(err);
  }
};

export const editCategory = async (
  data: CategoryObjectWithBaseType
): Promise<TodoObjectWithBaseUnionType> => {
  const editedData = {
    title: data.title,
    description: data.description,
    todoItems: data.todoItems,
  };

  try {
    const result = await axios.put(
      `${API_URL}${CATEGORY_URL}/${data.id}`,
      editedData
    );

    return result.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteCategory = async (
  id: string
): Promise<TodoObjectWithBaseUnionType> => {
  try {
    const result = await axios.delete(`${API_URL}${CATEGORY_URL}/${id}`);

    return result.data;
  } catch (err) {
    console.log(err);
  }
};

export const getTodos = async () => {
  try {
    const result = await axios.get(API_URL + TODO_URL);

    return result.data;
  } catch (err) {
    console.log(err);
  }
};

export const getTodo = async (
  id: StringType
): Promise<TodoObjectWithBaseUnionType> => {
  try {
    const result = await axios.get(`${API_URL}${TODO_URL}/${id}`);

    return result.data;
  } catch (err) {
    console.log(err);
  }
};

export const addTodo = async (
  data: TodoObjectType
): Promise<TodoObjectWithBaseUnionType> => {
  const editedData = {
    title: data.title,
    description: data.description,
    deadline: data.deadline,
    done: data.done,
  };

  try {
    const result = await axios.post(`${API_URL}${TODO_URL}`, editedData);

    return result.data;
  } catch (err) {
    console.log(err);
  }
};

export const editTodo = async (
  data: TodoObjectWithBaseType
): Promise<TodoObjectWithBaseUnionType> => {
  const editedData = {
    createdAt: data.createdAt,
    title: data.title,
    description: data.description,
    deadline: data.deadline,
    done: data.done,
  };

  try {
    const result = await axios.put(
      `${API_URL}${TODO_URL}/${data.id}`,
      editedData
    );

    return result.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteTodo = async (
  id: StringType
): Promise<TodoObjectWithBaseUnionType> => {
  try {
    const result = await axios.delete(`${API_URL}${TODO_URL}/${id}`);

    return result.data;
  } catch (err) {
    console.log(err);
  }
};
