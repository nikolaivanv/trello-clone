import Image from "next/image";
import { mockData } from "./mock-data";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Boards</h1>
      <ul>
        {mockData.boards.map((board) => (
          <li key={board.boardId}>
            <Link href={`/board/${board.boardId}`}>{board.title}</Link>
          </li>
        ))}
      </ul>    
    </main>
  );
}
