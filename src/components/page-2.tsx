import { dataList } from "../data/data-list";
import { PageItem } from "./page-item";

export const Page2 = () => (
  <div>
    <h1>this is page2</h1>
    {dataList.map((data) => (
      <PageItem key={data.id} name={data.name} />
    ))}
  </div>
);
