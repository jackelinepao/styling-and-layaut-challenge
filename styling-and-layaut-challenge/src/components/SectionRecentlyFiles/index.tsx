import React from 'react';
import { Link } from 'react-router-dom';
import CardRecentlyUse from '../CardRecentlyUse';
import Column from '../Column';

import * as S from "./styles";
import * as SC from "./../Column/styles";

const data = [
  {
    color: "#FF9F00",
    title: "Travel Landing Page",
    members: 5,
    date: "Mar 8, 2020",
  },
  {
    color: "#4AC29D",
    title: "True Photos",
    members: 12,
    date: "Mar 8, 2020",
  },
  {
    color: "#FF6860",
    title: "Dashboard Structure",
    members: 10,
    date: "Mar 9, 2020",
  },
  {
    color: "#FF9F00",
    title: "Character Illustration",
    members: 3,
    date: "Mar 10, 2020",
  }
]

export default function SectionRecentlyFiles() {

  return (
    <S.BoxSection>
      <S.TitleSection className='title'>
        <h2>Recently Files</h2>
        <div className='rightNav'>
          <ul>
            <li>
              <Link to="" className='linkViewAll'>View All</Link>
            </li>
          </ul>
        </div>
      </S.TitleSection>
      <S.Table>
        <SC.Column>
          <div className='contColumn headerTable'>
            <div>
              <h4>Name</h4>
            </div>
            <div>
              <h5>Members</h5>
            </div>
            <div>
              <h5>Last Modified</h5>
            </div>
            <div>
            </div>
          </div>
        </SC.Column>
        {data.map((item, index) => (
          <Column items={item} key={index} />
        ))}
      </S.Table>
    </S.BoxSection>
  );
}
