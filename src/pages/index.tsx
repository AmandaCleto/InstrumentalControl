import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    fetch("http://localhost:3333/musics")
    .then(response => response.json())
    .then(data => console.log(data))
  }, []);

  return (
    <div>
      <h2>oi</h2>
    </div>
  )
}
