import React from "react";

import * as S from "./styles";

interface ICard {
  numCircles: number,
  number: string,
  title: string,
  date: string,
}

export default function CardShared(items: { items: ICard }) {

  return (
    <S.ContCard>
      <div>
        <div className="flexBox">
          <S.SquareOrange></S.SquareOrange>
          <S.ContCircles>
            {[...Array(items.items.numCircles)].map((e, i) => (
              items.items.numCircles - 1 > i ?
                <S.Circle key={i} className="borderColor" /> : (
                  <S.Circle key={i} className="borderColor">
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
    </S.ContCard>
  );
}
