import ProfileImage from "@/components/ProfileImage";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 items-center min-h-screen px-8">
      <div>
        <h1 className="text-5xl font-bold">
          Hi, I’m <span className="text-blue-500">Anish Duwal</span>
        </h1>
        <p className="mt-4 text-gray-500">
          Full Stack Developer with over 6 years of experience in IT, 
          with strong expertise in ASP.NET Core, Angular, Next.js, JavaScript, 
          and backend system design. Experienced in Clean Architecture, microservices, 
          gRPC, Kafka, Redis, and Kubernetes/OpenShift deployments, with additional 
          background in motion graphics design, and PHP (CodeIgniter) and Python (Django) development.
        </p>
      </div>

      <ProfileImage />
    </section>
  );
}
