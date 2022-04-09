import { dataList } from "./data-list";
import { PageItem } from "./page-item";

export const Page1 = () => (
  <div>
    <h1>this is page1</h1>
    {dataList.map((data) => (
      <PageItem key={data.id} name={data.name} />
    ))}
  </div>
);
