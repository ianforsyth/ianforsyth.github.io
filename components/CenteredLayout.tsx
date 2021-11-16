import React, { ReactNode } from 'react'

const CenteredLayout = ({ children }: { children: ReactNode }) => (
  <div className="max-w-lg p-4 m-auto">{children}</div>
)

export default CenteredLayout