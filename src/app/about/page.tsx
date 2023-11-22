import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2>SOME STUFF ABOUT ME</h2>
      <br />
      <Link href="/about/like">- Find out what I like... </Link>
      <br />
      <a href="./about/dontlike">- Find out what I don't like...</a>
      <br />
      <a href="./about/crisps">- My top 10 crisps...</a>
    </div>
  );
}
