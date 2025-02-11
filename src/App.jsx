import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import data from './database/db.json'

import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar content={data.author}/>
        <main>
          {data.projects.map((project) => {
            return (
              <Post 
                key={project.id}
                content={project}
              />
            )            
          })}
        </main>
      </div>
    </div>
    
  )
}

export default App
