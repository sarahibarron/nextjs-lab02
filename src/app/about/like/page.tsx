import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2>LIKES 🤗 </h2>
      <ul>
        <li>🍺 Lots and lots of Guinness </li>
        <li>🍕 Pizza (vegetables only)</li>
        <li>🐶 Dogs (all of them)</li>
        <li>🌊 Running into the sea and screaming at the waves</li>
        <li>📽 The Room (2003, Tommy Wiseau)</li>
        <li>📺 Parks and Recreation</li>
        <li>💤 Napping</li>
      </ul>
      &nbsp;
      <Link href="/about">Go back </Link>
    </div>
  );
}
