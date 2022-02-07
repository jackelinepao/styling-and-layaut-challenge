import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"

import * as S from "./styles";

interface ICard {
  numCircles: number,
  number: string,
  title: string,
  date: string,
}

export default function CardRecentlyUse(items: { items: ICard }) {

  return (
    <S.ContCard>
      <div>
        <div className="flexBox">
          <S.SquareOrange></S.SquareOrange>
          <S.ContCircles>
            {[...Array(items.items.numCircles)].map((e, i) => (
              items.items.numCircles - 1 > i ?
                <S.Circle key={i}></S.Circle> : (
                  <S.Circle key={i}>
                    <span>{items.items.number}</span>
                  </S.Circle>
                )))}
          </S.ContCircles>
        </div>
        <div>
          <h4>{items.items.title}</h4>
          <span className="date">Created {items.items.date}</span>
        </div>
      </div>
      <button className="btnEdit">
        <FontAwesomeIcon icon={faEllipsisV} />
      </button>
    </S.ContCard>
  );
}
