import { Layout, Notification } from "@/components";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [notify, setNotify] = useState(false);
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!file) {
      console.log("No file selected");
      setNotify(true);
      return;
    }

    const formData = new FormData();
    formData.append("jsonFile", file);

    console.log("File:", file);

    try {
      const response = await fetch("/api/renderer/json", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Upload successful:", result);
      } else {
        console.error("Upload failed:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  return (
    <Layout>
      <h1 className="title">Hey! Upload your JSON file below.</h1>
      <form className="upload" onSubmit={handleSubmit}>
        <input
          type="file"
          name="jsonFile"
          className="file"
          id="jsonFile"
          accept=".json"
          onChange={handleFileChange}
        />
        <button className="submit" type="submit">Upload</button>
      </form>
      { file && <p className="description">Selected file: {file.name}</p> }

      { file && <Link href="/rendered" className="link">Render your JSON</Link> }
      

      { notify && <Notification message="Please select a file first!" /> }
    </Layout>
  );
}
