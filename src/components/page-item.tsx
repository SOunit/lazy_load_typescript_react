import { FC } from "react";

type Props = {
  name: string;
};
export const PageItem: FC<Props> = ({ name }) => <div>page item {name}</div>;
