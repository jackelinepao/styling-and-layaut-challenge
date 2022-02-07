import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";

export default function SideRight() {
  return (
    <div>
      <S.SideRight>
        <div className="contSideRight">
          <div>
            <S.HeaderSideRight>
              <div className="rightNav">
                <ul>
                  <li>
                    <Link to="" className="square"></Link>
                  </li>
                  <li>
                    <Link to="" className="square"></Link>
                  </li>
                </ul>
              </div>
              <S.Avatar>
                <h6>Name</h6>
                <div className="avatar"></div>
              </S.Avatar>
            </S.HeaderSideRight>
            <div>
              <h2>Storage</h2>
              <S.BoxWhite>
                <S.BoxColor />
                <h4>Buy more space now!</h4>
                <p>Upgrade to cloud premium</p>
                <S.ContButton>
                  <Link to="">Upgrade Account!</Link>
                </S.ContButton>
              </S.BoxWhite>
            </div>
          </div>
        </div>
      </S.SideRight>
    </div>
  );
}
