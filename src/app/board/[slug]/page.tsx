import Board from "@/app/components/board";
import { mockData } from "@/app/mock-data";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
    if (!params.slug) return notFound();
    const boardId = parseInt(params.slug, 10);
    if (!boardId) return notFound();

    const board = mockData.boards.find((board) => board.boardId === boardId);
    if (!board) return notFound();

    return (
        <main>
            <Board board={board} />
        </main>
    );
}