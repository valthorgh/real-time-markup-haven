
import MarkdownEditor from "@/components/MarkdownEditor";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      <div className="flex-grow">
        <MarkdownEditor />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
