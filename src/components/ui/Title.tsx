import { TitlePropsSchema } from "../types";

const Title = ({ id, title, description }: TitlePropsSchema) => {
  return (
    <section id={id} className="text-center py-10 px-6">
      <h1 className="text-3xl font-bold mt-0 mb-6">{title}</h1>
      <h3 className="text-1xl font-bold mb-8">{description}</h3>

      <div className="divider"></div>
    </section>
  );
};

export default Title;
