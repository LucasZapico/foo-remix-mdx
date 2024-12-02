import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Foo - Mdx" },
    { name: "description", content: "A public Remixjs site working through the expected behavior" },
  ];
};

export default function Index() {
  return (
    <div className="py-10 px-10">
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    Remixjs - Mdx
    </h1>

  </div>
  );
}
