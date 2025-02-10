
const Footer = () => {
  return (
    <footer className="py-4 px-6 border-t border-zinc-200 bg-white/50 backdrop-blur-sm">
      <div className="flex items-center justify-between text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Markdown Editor. All rights reserved.</p>
        <p>Made with ❤️ using React and Markdown</p>
      </div>
    </footer>
  );
};

export default Footer;
