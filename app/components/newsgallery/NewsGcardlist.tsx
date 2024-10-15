import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NEWSData } from '@/app/types/types'
import { NewsGallery } from './NewsGallery'

interface NewscardlistProps {
    newsData: NEWSData[];
}

const NewsGcardlist = ({newsData}: NewscardlistProps) => {
  return (
    <div id="newsbox" className="flex flex-wrap justify-center my-16">
        {newsData.map((newsItems: NEWSData) => (
          <NewsGallery key={newsItems.id} newsItems={newsItems} />
        ))}
    </div>
  )
}

export default NewsGcardlist;