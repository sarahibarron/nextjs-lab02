import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2>Some stuff about me</h2>
      <Link href="/about/like">find out what I like... </Link>
      <br />
      <a href="./about/dontlike">find out what I don't like...</a>
    </div>
  );
}
