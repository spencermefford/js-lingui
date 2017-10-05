import * as React from 'react'
import { Plural } from 'lingui-react'

export default function Regression({ photoCount }) {
  return (
    <div>
      {photoCount > 0 && <Plural value={photoCount} one="One" other="Other" />}
    </div>
  )
}
