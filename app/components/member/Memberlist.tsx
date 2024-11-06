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
    <div id="member">
        {memberData.map((memberItems: MEMBERData) => (
            <Member key={memberItems.id} memberItems={memberItems} />
        ))}
    </div>
  )
}

export default Memberlist;