
import { useMemo } from "react";

interface EditorStatsProps {
  text: string;
}

const EditorStats = ({ text }: EditorStatsProps) => {
  const stats = useMemo(() => {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const characters = text.length;
    const lines = text.split("\n").length;
    return { words, characters, lines };
  }, [text]);

  return (
    <div className="px-4 py-2 border-t border-zinc-200 text-sm text-zinc-500 flex gap-4">
      <div>Words: {stats.words}</div>
      <div>Characters: {stats.characters}</div>
      <div>Lines: {stats.lines}</div>
    </div>
  );
};

export default EditorStats;
