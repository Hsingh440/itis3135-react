import { useState } from 'react'
import { Helmet } from "react-helmet-async";

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <> {/* These are called fragments */}
      <Helmet>
    <title>Harsimran Singh  | ITIS3135 | Home</title> 
    </Helmet>
<main>
        <h2>Home</h2>
        <p>Hello, you've made it to my 3135 course page</p>
        <p>This is my first website and I am excited to learn more about web development through this course.</p>
        <p>Feel free to explore the different sections of the site to learn more about me and my work.</p>
    </main>
    </>
  )
}
