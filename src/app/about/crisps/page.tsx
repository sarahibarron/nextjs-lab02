import Link from "next/link";

type crispsSearchQuery = {
  sortBy: string;
};

type crispsType = {
  name: string;
  id: number;
};

let crisps: crispsType[] = [
  {
    name: "01 - Mccoy's Muchos (Smokey Chilli Chicken)",
    id: 0,
  },
  {
    name: "02 - Frazzles",
    id: 1,
  },
  {
    name: "03 - Monster Munch (pickled onion)",
    id: 2,
  },
  {
    name: "04 - Walkers Cheese & Onion",
    id: 3,
  },
  {
    name: "05 - Quavers",
    id: 4,
  },
  {
    name: "06 - Walkers Marmite",
    id: 5,
  },
  {
    name: "07 - Sour Cream and Onion Pringles",
    id: 6,
  },
  {
    name: "08 - Roysters",
    id: 7,
  },
  {
    name: "09 - Really Cheesy Wotsits",
    id: 8,
  },
  {
    name: "10 - Crispy Bacon Wheat Crunchies",
    id: 9,
  },
];

function compareCrisps(a: crispsType, b: crispsType) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
}

export default function Page({
  searchParams,
}: {
  searchParams: crispsSearchQuery;
}) {
  let sortedCrisps = [...crisps];

  if (searchParams.sortBy == "asc") {
    sortedCrisps.sort(compareCrisps);
  } else if (searchParams.sortBy == "desc") {
    sortedCrisps.sort(compareCrisps).reverse();
  }

  return (
    <div>
      <h4>Here are my top 10 crisps!</h4>
      <p>{searchParams.sortBy}</p>
      <br />
      <Link href="/crisps">Remove the sort</Link>
      <br />
      <Link href="/crisps?sortBy=asc">Sort by ascending</Link>
      <br />
      <Link href="/crisps?sortBy=desc">Sort by descending</Link>
      <br />
      <br />
      <br />
      {crisps.map((crisp) => {
        return (
          <div key={crisp.id}>
            <br />
            <Link href={`/about/crisps/${crisp.name.toLowerCase()}`}>
              {crisp.name}
            </Link>
          </div>
        );
      })}
      <br />

      <Link href="/about">← Go back</Link>
    </div>
  );
}
