import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"

import * as S from "./styles";

interface ICard {
  color: string,
  cantFiles: string,
  peso: string,
}

export default function ColumnTableSideRight({ items: { color, cantFiles, peso } }: { items: ICard }) {

  return (
    <S.Column>
      <div className="contColumn">
        <S.Square style={{ background: color }} />
        <div>
          <h4>Documents</h4>
          <h6>{cantFiles} files</h6>
        </div>
        <div className="boxPeso">
          <h5>{peso}</h5>
        </div>
      </div>
    </S.Column>
  );
}
