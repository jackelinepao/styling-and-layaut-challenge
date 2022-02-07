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

export default function Column(items: { items: ICard }) {

  return (
    <S.Column>
      <div className="contColumn">
        <div className="form-group">
          <S.LabelCustom type="checkbox" id={items.items.title} color={items.items.color} />
          <label htmlFor={items.items.title}></label>
        </div>
        <div>
          <h4>{items.items.title}</h4>
        </div>
        <div>
          <h5>{items.items.members} menbers</h5>
        </div>
        <div>
          <h5>{items.items.date}</h5>
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
