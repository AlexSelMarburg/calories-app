export default function BodyweightPage() {
  const storage = localStorage.getItem("calories");

  return (
    <div className="page">
      <h2>BodyweightPage</h2>
      <p>{storage}</p>
    </div>
  );
}
