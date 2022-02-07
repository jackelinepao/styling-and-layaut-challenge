import React, { useState } from 'react';
import * as S from "./styles";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function SideBar() {
  return (
    <div>
      <S.SideBar>
        <div>
          <S.Logo></S.Logo>
          <S.ContNav>
            <ul>
              <li>
                <NavLink to="/">
                  <div className='square'></div>
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-files">
                  <div className='square'></div>
                  <span>My Files</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/recet-files">
                  <div className='square'></div>
                  <span>Recent Files</span>
                </NavLink>
              </li>
              <li><NavLink to="/shared-filed">
                <div className='square'></div>
                <span>Shared Filed</span>
              </NavLink>
              </li>
              <li>
                <NavLink to="/file-request">
                  <div className='square'></div>
                  <span>File Request</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/trash">
                  <div className='square'></div>
                  <span>Trash</span>
                </NavLink>
              </li>
            </ul>
          </S.ContNav>
        </div>
        <S.SectionButtomSidebar>
          <S.ContCkeckboxes>
            <ul className="contBoxCheckbox">
              <li>
                <input className="styled-checkbox" id="checkbox-1" type="checkbox" value="value1"/>
                <label htmlFor="checkbox-1"><span>Checkbox</span></label>
              </li>
              <li>
                <input className="styled-checkbox" id="checkbox-2" type="checkbox" value="value2" />
                <label htmlFor="checkbox-2"><span>CSS Only</span></label>
              </li>
              <li>
                <input className="styled-checkbox" id="checkbox-3" type="checkbox" value="value3" />
                <label htmlFor="checkbox-3"><span>A disabled checkbox</span></label>
              </li>
              <li>
                <input className="styled-checkbox" id="checkbox-4" type="checkbox" value="value4" />
                <label htmlFor="checkbox-4"><span>Fourth option</span></label>
              </li>
            </ul>
          </S.ContCkeckboxes>
          <S.ContButton>
            <button>
              <div className='textButton'>Create New</div>
              <div className='icon'><FontAwesomeIcon icon={faPlus} /></div>
            </button>
          </S.ContButton>
        </S.SectionButtomSidebar>
      </S.SideBar>
    </div>
  );
}
