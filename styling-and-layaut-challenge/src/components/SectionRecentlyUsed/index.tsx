import React from 'react';
import { Link } from 'react-router-dom';
import CardRecentlyUse from '../CardRecentlyUse';

import * as S from "./styles";

const data = [
  {
    numCircles: 2,
    number: "",
    title: "App Project",
    date: "20.02.2020",
  },
  {
    numCircles: 2,
    number: "",
    title: "Project: fitbit",
    date: "28.02.2020",
  },
  {
    numCircles: 3,
    number: "+3",
    title: "Client Documents",
    date: "4.03.2020",
  }
]

export default function SectionRecentlyUsed() {

  return (
    <S.BoxSection>
      <S.TitleSection className='title'>
        <h2>Recently Used</h2>
        <div className='rightNav'>
          <ul>
          <li>
              <Link to="" className='square active'></Link>
            </li>
            <li>
              <Link to="" className='square'></Link>
            </li>
          </ul>
        </div>
      </S.TitleSection>
      <S.ContCards>
        {data.map((item, index) => (
          <CardRecentlyUse items={item} key={index} />
        ))}
      </S.ContCards>
    </S.BoxSection>
  );
}
