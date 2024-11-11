import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MEMBERData } from '@/app/types/types'
import { Member } from './Member'

interface MemberProps {
    memberData: MEMBERData[];
}

const Memberlist = ({memberData}: MemberProps) => {
  return (
    <section id="member" className='grid'>
        {memberData.map((memberItems: MEMBERData) => (
            <Member key={memberItems.id} memberItems={memberItems} />
        ))}
    </section>
  )
}

export default Memberlist;