import { useState, useCallback, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import EditorStats from "./EditorStats";
import { handleEditorShortcuts } from "@/lib/shortcuts";
const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState<string>(`# Welcome to the Markdown Editor

Start typing your markdown here...

## Features
- Live preview
- Syntax highlighting
- Keyboard shortcuts
- Word count
- Character statistics

### Try some formatting
**Bold text** and *italic text*

> Quote blocks look beautiful

\`\`\`javascript
// Code blocks with syntax highlighting
function hello() {
  console.log("Hello, world!");
}
\`\`\`
`);
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    handleEditorShortcuts(event, markdown, setMarkdown);
  }, [markdown]);
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
  return <div className="container mx-auto p-4 h-screen max-h-screen">
      <div className="bg-white rounded-lg shadow-sm border border-zinc-200 h-[calc(100vh-2rem)]">
        <ResizablePanelGroup direction="horizontal" className="h-full rounded-lg">
          <ResizablePanel defaultSize={50} minSize={30}>
            <div className="h-full flex flex-col">
              <div className="flex-grow">
                <MDEditor value={markdown} onChange={val => setMarkdown(val || "")} preview="edit" className="!border-0 h-full" height="100%" />
              </div>
              <EditorStats text={markdown} />
            </div>
          </ResizablePanel>
          <ResizableHandle className="bg-zinc-100 w-2 hover:bg-zinc-200 transition-colors" />
          <ResizablePanel defaultSize={50} minSize={30}>
            <div className="h-full overflow-auto p-8 prose prose-zinc max-w-none px-px">
              <MarkdownPreview source={markdown} />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>;
};
export default MarkdownEditor;