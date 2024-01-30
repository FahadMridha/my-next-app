import Counter from "@/components/Counter/Counter";
import Link from "next/link";

const HomePage = () => {
  // throw new error()
  return (
    <div>
      <h1>This is next app</h1>
      <Counter/>

      <Link href='/about'>
      <button className="btn btn-accent">About</button></Link>
    </div>
  );
};

export default HomePage;
