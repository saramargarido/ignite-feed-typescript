import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/saramargarido.png",
      name: "Sara Margarido",
      role: "Frontend Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    tags: ["novoprojeto", "nlw", "rocketseat"],
    publishedAt: new Date("2024-09-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/saramargarido.png",
      name: "Sara Margarido",
      role: "Frontend Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    tags: ["novoprojeto", "nlw", "rocketseat"],
    publishedAt: new Date("2024-09-13 10:00:00"),
  },
];
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              tags={post.tags}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
