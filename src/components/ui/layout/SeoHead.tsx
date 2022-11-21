import Head from "next/head";
import { SeoHeadPropsType } from "../../types";

const SeoHead = ({ siteTitle, siteDescription, favicon }: SeoHeadPropsType) => {
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <link rel="icon" href={favicon || "/to-do-list.ico"} />
    </Head>
  );
};

export default SeoHead;
