import { Layout, SetHead } from "@/components";
export default function Home() {
  return (
    <Layout>
        <h1 className="title">Welcome to JSON Web Visualiser</h1>
        <p className="description">
          This is a simple web app that helps you visualise your JSON data in a
          tree structure with the ability to modify and control each parameter
          to your liking.
        </p>

        <p className="description">
          To get started, click on the <strong>Render</strong> tab above to start rendering your JSON data.
        </p>
    </Layout>
  );
}
