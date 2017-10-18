import React from 'react'
import * as T from 'prop-types'
import SectionCounter from '../common/SectionCounter'
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_Home_Quotes')

const _getQuotesSlides = (quotes) => (
  quotes.map((quote, index) => (
    <div className = {cn('slide')}>
      <div className = {cn('slide-content')}>
        <h2 className = {cn('slide-title')}>{quote.title}</h2>
        <p className = {cn('slide-text')}>{quote.text}</p>
        <p className = {cn('slide-author')}>{quote.author}</p>
      </div>
    </div>
  ))
)

const SE_Home_Quotes = ({mix}) => (
  <section className={cn([mix])}>

    <div className={cn('slider')}>
      {_getQuotesSlides(quotes)}
    </div>

    <SectionCounter
      mix={cn('counter')}
      sectionNum={4}
      theme='dark'
    />

  </section>
)

export default SE_Home_Quotes

SE_Home_Quotes.propTypes = {
  mix: T.string, //BEM mixin from parent block
}

const quotes = [
  {
    title: 'The world is ready<br/> for the change',
    text: 'Including the poorest in the financial\n' +
          'system that increases instead of limiting\n' +
          'the value of their assets, transforming\n' +
          'the underlying economics of financial\n' +
          'services through digital currency will\n' +
          'help those who live in poverty directly',
    author: '&mdash; Bill Gates',
    img:  '/img/main-h/quotes-section/bill-gates.jpg'
  },
  {
    title: 'The world is ready<br/> for the change',
    text: 'Including the poorest in the financial\n' +
    'system that increases instead of limiting\n' +
    'the value of their assets, transforming\n' +
    'the underlying economics of financial\n' +
    'services through digital currency will\n' +
    'help those who live in poverty directly',
    author: '&mdash; Bill Gates',
    img:  '/img/main-h/quotes-section/bill-gates.jpg'
  },
  {
    title: 'The world is ready<br/> for the change',
    text: 'Including the poorest in the financial\n' +
    'system that increases instead of limiting\n' +
    'the value of their assets, transforming\n' +
    'the underlying economics of financial\n' +
    'services through digital currency will\n' +
    'help those who live in poverty directly',
    author: '&mdash; Bill Gates',
    img:  '/img/main-h/quotes-section/bill-gates.jpg'
  },
  {
    title: 'The world is ready<br/> for the change',
    text: 'Including the poorest in the financial\n' +
    'system that increases instead of limiting\n' +
    'the value of their assets, transforming\n' +
    'the underlying economics of financial\n' +
    'services through digital currency will\n' +
    'help those who live in poverty directly',
    author: '&mdash; Bill Gates',
    img:  '/img/main-h/quotes-section/bill-gates.jpg'
  }
]