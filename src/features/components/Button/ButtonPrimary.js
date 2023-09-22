export default function ButtonPrimary({ title }) {
  return (
    <>
      <button className="rounded-lg bg-primary px-3 py-2 capitalize text-white hover:bg-primary_dark">
        {title}
      </button>
    </>
  );
}
