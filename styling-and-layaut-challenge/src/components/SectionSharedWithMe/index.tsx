import React from 'react';
import { Link } from 'react-router-dom';
import CardShared from '../CardShared';

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

export default function SectionSharedWithMe() {

  return (
    <div>
      <S.TitleSection className='title'>
        <h2>Share with me</h2>
        <div className='rightNav'>
          <ul>
            <li>
              <Link to="" className='linkViewAll'>View All</Link>
            </li>
          </ul>
        </div>
      </S.TitleSection>
      <S.ContCards>
        {data.map((item, index) => (
          <CardShared items={item} key={index} />
        ))}
      </S.ContCards>
    </div>
  );
}
