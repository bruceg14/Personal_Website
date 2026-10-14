export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center text-sm">
      <p>
        © {new Date().getFullYear()} Bruce Guo · Edmonton, Canada ·{" "}
        <a
          href="mailto:bruce.guo.ca@gmail.com"
          className="hover:text-red-400 transition-colors"
        >
          bruce.guo.ca@gmail.com
        </a>
      </p>
    </footer>
  );
}
