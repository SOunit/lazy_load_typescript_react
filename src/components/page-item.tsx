import { FC } from "react";
import classes from "./page-item.module.css";

type Props = {
  name: string;
};
export const PageItem: FC<Props> = ({ name }) => (
  <div className={classes["page-item"]}>page item {name}</div>
);
