import { Github, Linkedin, Mail, FileText } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <nav className="bg-gray-900/50 backdrop-blur-sm fixed w-full z-10">
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-white">Mi Portafolio</h1>
            <div className="flex space-x-4">
              <a href="#sobre-mi" className="text-gray-300 hover:text-white">Sobre Mí</a>
              <a href="#proyectos" className="text-gray-300 hover:text-white">Proyectos</a>
              <a href="#contacto" className="text-gray-300 hover:text-white">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="section-padding pt-32">
        <div className="container-custom text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Desarrollador Full Stack
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Soy Luis Denilson, desarrollador web enfocado en crear experiencias 
          modernas y eficientes con JavaScript, React, Node.js y MongoDB. 
          Tengo experiencia en protección de datos, ciberseguridad y 
          optimización de redes. Mi meta es combinar funcionalidad, 
          seguridad y diseño en productos digitales innovadores y confiables.
          </p>
          
          <div className="flex justify-center space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer" 
               className="p-2 text-gray-300 hover:text-white">
              <Github size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
               className="p-2 text-gray-300 hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="#"
               className="p-2 text-gray-300 hover:text-white">
              <Mail size={24} />
            
            </a>
            <a href="#" className="p-2 text-gray-300 hover:text-white">
                +591 12345678
            </a>

          </div>
        </div>
      </section>


      <section id="proyectos" className="section-padding bg-gray-800/50">
  <div className="container-custom">
    <h2 className="text-3xl font-bold text-white mb-12 text-center">Proyectos Destacados</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          id: 1,
          nombre: "Proyecto E-commerce",
          descripcion: "Plataforma de comercio electrónico desarrollada con React, Node.js y MongoDB.",
          imagen: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
          tecnologias: ["React", "Node.js", "MongoDB"],
          enlace: "#"
        },
        {
          id: 2,
          nombre: "Aplicación de Tareas",
          descripcion: "Aplicación web para gestión de tareas construida con Vue.js y Firebase.",
          imagen: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=60",
          tecnologias: ["Vue.js", "Firebase", "TailwindCSS"],
          enlace: "#"
        },
        {
          id: 3,
          nombre: "Sistema de Gestión de Inventario",
          descripcion: "Sistema completo de inventario desarrollado con Django y PostgreSQL.",
          imagen: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=60",
          tecnologias: ["Django", "PostgreSQL", "Bootstrap"],
          enlace: "#"
        }
      ].map((project) => (
        <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
          <img 
            src={project.imagen} 
            alt={project.nombre} 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-2">{project.nombre}</h3>
            <p className="text-gray-400 mb-4">
              {project.descripcion}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tecnologias.map((tech, index) => (
                <span key={index} className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.enlace} className="text-blue-400 hover:text-blue-300 inline-flex items-center">
              Ver más <FileText className="ml-2" size={16} />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="contacto" className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Contacto</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-300">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-primary w-full"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container-custom text-center text-gray-400">
          <p>© 2025 Mi Portafolio. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;