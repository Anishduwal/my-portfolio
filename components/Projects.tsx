const projects = [
  {
    title: "Himal Remit Exchange",
    tech: "ASP.NET Core, Clean Architecture, CQRS, PostgreSQL, Kafka, Redis, gRPC, Migrations",
  },
  {
    title: "Tour Booking System",
    tech: "Next.js, .NET, PostgreSQL",
  },
  {
    title: "MyPay Wallet",
    tech: "ASP.NET MVC, REST & SOAP APIs, Hangfire, SQL Server, JavaScript, jQuery",
  },
  {
    title: "Hungry Pizza",
    tech: "ASP.NET MVC, Hangfire, SQL Server, JavaScript, jQuery",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="
                group relative rounded-2xl p-6
                border border-gray-800
                bg-gradient-to-br from-gray-900 to-gray-950
                transition-all duration-300
                hover:border-blue-500/60
                hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
              "
            >
              {/* Accent bar */}
              <span className="absolute inset-x-0 top-0 h-[2px]
                bg-gradient-to-r from-blue-500 to-cyan-400 opacity-70" />

              <h3 className="text-lg font-semibold text-white tracking-tight">
                {p.title}
              </h3>

              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                {p.tech}
              </p>

              <div className="mt-5 text-sm text-blue-400 opacity-0
                group-hover:opacity-100 transition">
                View Details →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
