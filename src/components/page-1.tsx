import { PageItem } from "./page-item";

const dataList = [
  { name: "a" },
  { name: "a" },
  { name: "a" },
  { name: "a" },
  { name: "a" },
  { name: "a" },
  { name: "a" },
  { name: "a" },
  { name: "a" },
  { name: "a" },
  { name: "a" },
  { name: "a" },
];

export const Page1 = () => (
  <div>
    <h1>this is page1</h1>
    {dataList.map((data) => (
      <PageItem key={data.name} name={data.name} />
    ))}
  </div>
);
