import React from 'react';
import CardRecentlyUse from '../CardRecentlyUse';
import SearchInput from '../SearchInput';
import SectionRecentlyFiles from '../SectionRecentlyFiles';
import SectionRecentlyUsed from '../SectionRecentlyUsed';
import SectionSharedWithMe from '../SectionSharedWithMe';
import * as S from "./styles";


export default function ContentCenter() {
  return (
    <div className='boxContent'>
      <S.ContentCenter>
      <SearchInput/>
      <SectionRecentlyUsed/>
      <SectionRecentlyFiles/>
      <SectionSharedWithMe/>
      </S.ContentCenter>
    </div>
  );
}
