import { LoadingPropsType } from "../types";

const Notify = ({ title, type }: LoadingPropsType) => {
  return (
    <div className="m-10">
      <p className={`justify-center text-white shadow-lg alert alert-${type}`}>
        {title}
      </p>
    </div>
  );
};

export default Notify;
