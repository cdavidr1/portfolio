import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import Link from 'next/link'
import styles from '@/styles/ProjectPreview.module.css'


export default function Post({frontmatter: {title, date, excerpt}, slug, content}) {
  return (
    <>      
      <div className={`${styles.marked}`} dangerouslySetInnerHTML={{__html: marked(content)}}></div>
      
      <Link href='/' className={`${styles.marked}`} style={{color: 'purple'}}>Go Back</Link>
    </>
  )
}


export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md','')
    }
  }))

  return {
    paths,
    fallback: false
  }
}


export async function getStaticProps({params: {slug}}) {
  const mdWithMeta = fs.readFileSync(path.join('posts',slug+'.md'),'utf-8')
  const {data:frontmatter, content} = matter(mdWithMeta) 

  return {
    props: {
      frontmatter,
      slug,
      content
    }
  }
}