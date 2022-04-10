import { dataList } from "../data/data-list";
import { PageItem } from "./page-item";

export const Page4 = () => (
  <div>
    <h1>this is page4</h1>
    {dataList.map((data) => (
      <PageItem key={data.id} name={data.name} />
    ))}
  </div>
);
