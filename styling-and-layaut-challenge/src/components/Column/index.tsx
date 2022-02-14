import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"

import * as S from "./styles";

interface ICard {
  color: string,
  title: string,
  members: number,
  date: string,
}

export default function Column({ items: { title, color, members, date } }: { items: ICard }) {

  return (
    <S.Column>
      <div className="contColumn">
        <div className="form-group">
          <S.LabelCustom type="checkbox" id={title} color={color} />
          <label htmlFor={title}></label>
        </div>
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <h5>{members} menbers</h5>
        </div>
        <div>
          <h5>{date}</h5>
        </div>
        <div>
          <button className="btnEdit">
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
        </div>
      </div>
    </S.Column>
  );
}
