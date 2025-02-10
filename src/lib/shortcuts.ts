
export const handleEditorShortcuts = (
  event: KeyboardEvent,
  markdown: string,
  setMarkdown: (value: string) => void
) => {
  // Save with Ctrl/Cmd + S
  if ((event.ctrlKey || event.metaKey) && event.key === "s") {
    event.preventDefault();
    // Here you could add save functionality
    console.log("Save triggered");
  }

  // Bold with Ctrl/Cmd + B
  if ((event.ctrlKey || event.metaKey) && event.key === "b") {
    event.preventDefault();
    const selection = window.getSelection()?.toString();
    if (selection) {
      const newText = markdown.replace(
        selection,
        `**${selection}**`
      );
      setMarkdown(newText);
    }
  }

  // Italic with Ctrl/Cmd + I
  if ((event.ctrlKey || event.metaKey) && event.key === "i") {
    event.preventDefault();
    const selection = window.getSelection()?.toString();
    if (selection) {
      const newText = markdown.replace(
        selection,
        `*${selection}*`
      );
      setMarkdown(newText);
    }
  }
};
