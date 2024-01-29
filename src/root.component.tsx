import Cards from "./card";
import "./index.css";

export default function Root() {
  return (
    <section className="container bg-secondary">
      <h1 className="title">OctoSpa Users</h1>
      <Cards />
    </section>
  );
}
