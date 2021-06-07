import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Pnud
        </a>
        <span className="ms-1">&copy; 2021</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Cabinet
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
