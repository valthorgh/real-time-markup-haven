
const Footer = () => {
  return (
    <footer className="w-full border-t bg-white/50 backdrop-blur-sm py-4 mt-4">
      <div className="container flex items-center justify-center text-sm text-zinc-600">
        <p>
          © {new Date().getFullYear()} Made with ❤️ using React and Markdown
        </p>
      </div>
    </footer>
  );
};

export default Footer;
