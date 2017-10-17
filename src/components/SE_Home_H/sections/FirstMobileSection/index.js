import React from 'react'
import SectionCounter from '../common/SectionCounter'
import SectionButton from '../common/SectionButton'
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_Home_FirstMobile');

const infoColumns = [
  {
    imageSrc: 'http://via.placeholder.com/70x74',
    title: 'For unbanked people',
    text: 'Humaniq opens up the benefits of<br/>financial inclusion and grants access<br/>to a series of financial services'
  } ,
  {
    imageSrc: 'http://via.placeholder.com/70x74',
    title: 'For businesses',
    text: 'Humaniq enables start-ups and<br/>projects to offer their services<br/>an audience of billions'
  }
]

const _createInfoColumns = (columns) => (
  columns.map((column, index) => (
    <div
      key={`info-column-${index + 1}`}
      className={cn('info-column')}
    >
      <img
        className={cn('info-column-image')}
        src={column.imageSrc}
      />
      <h3 className={cn('info-column-title')}>{column.title}</h3>
      <p
        className={cn('info-column-text')}
        dangerouslySetInnerHTML={{__html: column.text}}
      />
    </div>
  ))
)

const SE_Home_FirstMobile = ({mix}) => (
  <section className={cn([mix])}>
    <div className={cn('content')}>
      <h2 className={cn('title')}>
        The first mobile service with<br/>the capacity to change the world
      </h2>
      <p className={cn('subtitle')}>Humaniq is a fourth generation mobile bank with its own<br/>cryptocurrency, which is bringing millions of unbanked<br/>people into one financial network</p>
      <div className={cn('info-columns')}>
        {_createInfoColumns(infoColumns)}
      </div>
    </div>
    <SectionCounter
      sectionNum={2}
      theme='bright'
    />
    <SectionButton
      mix={cn('button')}
      text='Project details'
    />
  </section>
)

export default SE_Home_FirstMobile