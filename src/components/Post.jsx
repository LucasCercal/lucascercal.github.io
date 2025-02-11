import { ArrowSquareUpRight } from '@phosphor-icons/react'
import styles from './Post.module.css'

export function Post({ content, }) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.project}>
                    <img className={styles.projectLogo} src={content.projectLogo}/>
                    <div className={styles.projectInfo}>
                        <strong>
                            <a href={content.website} target="blank">{content.projectName} {content.website ? <ArrowSquareUpRight /> : ''}</a>
                            
                        </strong>
                    </div>
                </div>
            </header>

            <div className={styles.content}>
                <p >{content.description}</p><br />

                {content.hashtags.map((hashtag) => {
                    return <span> #{hashtag}</span>          
                })}
            </div>
        </article>
    )
}