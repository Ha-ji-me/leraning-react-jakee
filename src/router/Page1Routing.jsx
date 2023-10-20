import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";

export const page1Routing = [
  {
    index: true,
    children: <Page1 />
  },
  {
    path: "/detail-a",
    children: <Page1DetailA />
  },
  {
    path: "/detail-b",
    children: <Page1DetailB />
  },
];