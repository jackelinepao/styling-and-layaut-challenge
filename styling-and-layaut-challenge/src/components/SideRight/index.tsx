import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from "./styles";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function SideRight() {
  return (
    <div>
      <S.SideRight>
        <div className='contSideRight'>
          <div>
            <S.HeaderSideRight>
              <div className='rightNav'>
                <ul>
                  <li>
                    <Link to="" className='square'></Link>
                  </li>
                  <li>
                    <Link to="" className='square'></Link>
                  </li>
                </ul>
              </div>
            </S.HeaderSideRight>
          </div>
        </div>
      </S.SideRight>
    </div>
  );
}
