import Link from "next/link";
import { CategoryCardPropsType, VoidType } from "../types";

const CategoryCard = ({
  id,
  title,
  description,
  onDelete,
}: CategoryCardPropsType) => {
  const handleDelete = (): VoidType => {
    onDelete(id);
  };

  return (
    <div className="card bg-base-100 shadow-xl transform transition duration-500 hover:scale-110">
      <div className="card-body">
        <Link href={{ pathname: "/category/" + id }}>
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </Link>
        <div className="card-actions justify-end">
          <Link
            href={{
              pathname: "/category/edit",
              query: { id: id },
            }}
            className="btn btn-primary"
          >
            Edit
          </Link>
          <button className="btn btn-secondary" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
