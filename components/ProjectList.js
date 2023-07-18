 import React, {useState} from 'react'
 import styles from '@/styles/ProjectList.module.css'


 export default function ProjectList({posts, updatePreview}) {
  const [selected, setSelected] = useState(null);

  return (
    <div className={`${styles.projectContainer}`}>
      <ul className={`${styles.projects}`}>
        {posts.map((post, index) => (
          <li className={selected === index ? styles.selected : ""} key={index} onClick={() => {
            setSelected(index);
            updatePreview({
              slug: post.slug,
              title: post.frontmatter.title, 
              date: post.frontmatter.date, 
              excerpt: post.frontmatter.excerpt});
            }}>{selected === index ? "> " : ""} {post.frontmatter.title}</li>
        ))}
      </ul>
    </div>
    )
 }
 

 