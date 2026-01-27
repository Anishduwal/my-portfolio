const projects = [
  {
    title: "Money Exchange API",
    tech: "ASP.NET Core, Clean Architecture",
  },
  {
    title: "Tour Booking System",
    tech: "Angular, .NET, PostgreSQL",
  },
  {
    title: "YouTube Shorts Automation",
    tech: "React, FFmpeg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-400 mt-2">{p.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
