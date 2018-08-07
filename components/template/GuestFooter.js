import React from 'react'
import { Divider } from 'antd'

export default () => {
  return(
    <>
      <Divider dashed/>
      <div className="footer">Footer Section</div>
      <style>{`
        .footer{
          text-align: center;
        }
      `}</style>
    </>
  )
}