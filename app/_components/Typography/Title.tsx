export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-5 flex place-content-center items-center justify-center columns-2 content-center">
      <h1 className="text-5xl font-weight">{children}</h1>
    </div>
  );
}
