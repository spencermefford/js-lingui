import * as React from 'react'
import { render } from 'react-dom'
import dev from 'lingui-i18n/dev'
import { I18nProvider } from 'lingui-react'

import Regression from './Regression'

render(
  <I18nProvider language="en" development={dev}>
    <Regression photoCount={1}/>
  </I18nProvider>
  , document.getElementById('root'))
