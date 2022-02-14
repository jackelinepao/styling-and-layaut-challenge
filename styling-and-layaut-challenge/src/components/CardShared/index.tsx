import React from "react";

import * as S from "./styles";

interface ICard {
  numCircles: number,
  number: string,
  title: string,
  date: string,
}

export default function CardShared({ items: { numCircles, number, title, date } }: { items: ICard }) {

  return (
    <S.ContCard>
      <div>
        <div className="flexBox">
          <S.SquareOrange></S.SquareOrange>
          <S.ContCircles>
            {[...Array(numCircles)].map((e, i) => (
              numCircles - 1 > i ?
                <S.Circle key={i} className="borderColor" /> : (
                  <S.Circle key={i} className="borderColor">
                    <span>{number}</span>
                  </S.Circle>
                )))}
          </S.ContCircles>
        </div>
        <div>
          <h4>{title}</h4>
          <span className="date">Created {date}</span>
        </div>
      </div>
    </S.ContCard>
  );
}
