export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {year} CamiloTechCore | Brayan Camilo Molina Vera. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}