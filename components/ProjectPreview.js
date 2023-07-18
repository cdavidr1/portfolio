import React from 'react'
import styles from '@/styles/ProjectPreview.module.css'
import Link from 'next/link'

export default function ProjectPreview({preview}) {
  return (
    <div className={`${styles.prevContainer}`}>
      <h2 className={`${styles.prevTitle}`}>{preview === null ? 'Welcome!' : preview.title}</h2>
      <span className={`${styles.prevDate}`}>{preview === null ? 'In the left box you will find a list of projects I worked on...' : preview.date}</span>
      <span className={`${styles.prevExcerpt}`}>{preview === null ? 'Click on one and check it out!' : preview.excerpt}</span>
      {preview === null ? '' : <Link legacyBehavior href={`/project/${preview.slug}`}>
        <a>Explore</a>
      </Link>}
    </div>
  )
}
