
const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-200 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm text-zinc-500">
          <div>
            Made with ❤️ using React and Markdown
          </div>
          <div>
            © {new Date().getFullYear()} Markdown Editor
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
