export default function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2024 Rankify</p>
        <div>
          <a href="#" className="text-gray-300 hover:text-white mr-4">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
