import { ReactElement } from "react";
import SeoHead from "./SeoHead";
import Title from "../Title";
import { StringType } from "../../types";

type Props = {
  siteTitle?: StringType;
  siteDescription?: StringType;
  type?: StringType;
  children: ReactElement;
};

const PageLayout = ({ siteTitle, siteDescription, type, children }: Props) => {
  const title = siteTitle || "ToDo";
  const description =
    siteDescription || "Stop forgetting what to do next use this app.";

  return (
    <>
      <SeoHead siteTitle={title + " - AMCEF"} siteDescription={description} />
      <main className="min-h-screen bg-base-200">
        {type !== "home" && <Title title={title} description={description} />}
        <section className="p-10">{children}</section>
      </main>
    </>
  );
};

export default PageLayout;
