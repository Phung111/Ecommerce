export default function AboutUsComponent({ title, decription }) {
  return (
    <>
      <div className="grid grid-cols-[40%_auto]">
        <p className="text-[#888]">{title}</p>
        <p className="">{decription}</p>
      </div>
    </>
  );
}
