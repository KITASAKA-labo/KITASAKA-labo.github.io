import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MEMBERData } from '@/app/types/types'

interface MemberProps {
    memberItems: MEMBERData;
}

export const Member = ({memberItems}: MemberProps) => {
  const {id, graduation, number, name} = memberItems;
  return (
    <div id="member" className='align-items:center'>
        <div id="membername" className='align-items:center'>{name}</div>
    </div>
  )
}
