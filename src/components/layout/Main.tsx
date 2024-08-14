export default function Main({ children }: any) {
  return (
    <main className="px-10 py-5 flex justify-center">
      <div className="container max-w-screen-xl flex flex-col">{children}</div>
    </main>
  );
}
