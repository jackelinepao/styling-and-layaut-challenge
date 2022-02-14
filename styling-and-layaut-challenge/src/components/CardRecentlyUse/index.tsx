import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"

import { ContCard, BoxFlexbox, TextDate, SquareOrange, Circle, NumCircle, ContCircles, ButtomEdit, TitleCard } from "./styles";

interface ICard {
  numCircles: number,
  number: string,
  title: string,
  date: string,
}

export default function CardRecentlyUse({items:{numCircles, number, title, date}}:{items: ICard}) {
  return (
    <ContCard>
      <div>
        <BoxFlexbox>
          <SquareOrange></SquareOrange>
          <ContCircles>
            {[...Array(numCircles)].map((e, i) => (
              numCircles - 1 > i ?
                <Circle key={i}></Circle> : (
                  <Circle key={i}>
                    <NumCircle>
                      {number}
                    </NumCircle>
                  </Circle>
                )))}
          </ContCircles>
        </BoxFlexbox>
        <div>
          <TitleCard>
            {title}
          </TitleCard>
          <TextDate>
            Created {date}
          </TextDate>
        </div>
      </div>
      <ButtomEdit>
        <FontAwesomeIcon icon={faEllipsisV} />
      </ButtomEdit>
    </ContCard>
  );
}
