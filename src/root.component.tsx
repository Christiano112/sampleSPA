import Emmy from "./emmy";

export default function Root(props) {
  const myName = "Christiano";
  return (
    <section>
      {props.name} is mounted!
      Home Page
      <Emmy name={myName} />
    </section>
  );
}
