'use client'
import React, { useState } from 'react'

export const Input = (props: {}) => {
  const [zoneName, setZoneName] = useState('');
  return (
    <>
      <input type="text" onChange={(e) => setZoneName(e.currentTarget.value)} value={zoneName} />
    </>
  )
}
