import React from "react";

import { Link } from "react-router-dom";
import CardRecentlyUse from "../CardRecentlyUse";
import ColumnTableSideRight from "../ColumnTableSideRight";

import * as S from "./styles";

const data = [
  {
    color: "#FF9F00",
    cantFiles: "720",
    peso: "200 GB",
  },
  {
    color: "#689FF8",
    cantFiles: "720",
    peso: "125 GB",
  },
  {
    color: "#4AC29D",
    cantFiles: "720",
    peso: "75 GB",
  },
  {
    color: "#BCBECA",
    cantFiles: "720",
    peso: "50 GB",
  },
]

export default function TableSideRight() {

  return (
    <S.BoxSection>
      <S.ContTable>
        {data.map((item, index) => (
          <ColumnTableSideRight items={item} key={index} />
        ))}
      </S.ContTable>
    </S.BoxSection>
  );
}
