import { BooleanType, DateType } from "../types";

type Props = {
  deadline: DateType;
  done: BooleanType;
};

const TodoDetail = ({ deadline, done }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="py-5">
        <h3 className="font-bold">Deadline</h3>
        <p>{new Date(deadline).toTimeString()}</p>
      </div>
      <div className="py-5">
        <h3 className="font-bold">Done</h3>
        <p>{done ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default TodoDetail;
