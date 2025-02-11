
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { GithubLogo } from '@phosphor-icons/react'

export function Sidebar({ content }){
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src={content.coverUrl} />
            <div className={styles.profile}>
                <Avatar hasBorder src={content.avatarUrl}/>
                <strong>{content.name}</strong>
                <span>{content.role}</span>
            </div>

            <footer>                                
                <a target="blank" href={content.github.profileUrl}>
                <GithubLogo size={20} />{content.github.profile}</a>
            </footer>
        </aside>
    )
}