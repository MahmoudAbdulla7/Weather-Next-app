import React from 'react'
import noData from '../../assets/No data-cuate.png'
import Image from 'next/image'

export default function NoData() {
  return (
    <div><Image src={noData} className="w-full" alt="" /></div>
  )
}
