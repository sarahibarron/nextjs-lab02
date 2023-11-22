export default function Page({ params }: { params: { crisp: string } }) {
  return (
    <div>
      <h1>Hello </h1>
      <p>{params.crisp}</p>
    </div>
  );
}
