import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      点击
      <Link href="/documents/123">
        <span className="text-blue-500 underline">123</span>
      </Link>
      去文档编辑器
    </div>
  );
};

export default Home;
