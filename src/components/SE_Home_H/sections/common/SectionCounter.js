import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'

const cn = cssClassName('SE_Home_SectionCounter')

const SE_Home_SectionCounter = ({mix, sectionNum, theme}) => (
  <div className={cn([mix], {theme})}>
    — {sectionNum < 10 ? (`0${sectionNum}.`):(`${sectionNum}.`)}
  </div>
)

export default SE_Home_SectionCounter

SE_Home_SectionCounter.propTypes = {
  sectionNum: T.number.isRequired,//section number to render
  theme: T.oneOf([
    'dark', // black counter
    'blue', // sky-blue counter
  ]).isRequired
};