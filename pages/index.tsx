import type { NextPage } from "next";
import PageLayout from "../src/components/ui/layout/PageLayout";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <PageLayout type="home">
      <div className="hero">
        <div className="min-h-screen hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">This project is base on AMCEF request.</p>
            <p>Create Todo app based on React framework.</p>
            <div className="py-6">
              <Link href="https://github.com/crafted/todo-amcef">
                Read more
              </Link>
            </div>
            <Link
              href={{ pathname: "/category/add" }}
              className="btn btn-primary"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
