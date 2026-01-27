import ProfileImage from "@/components/ProfileImage";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 items-center min-h-screen px-8">
      <div>
        <h1 className="text-5xl font-bold">
          Hi, I’m <span className="text-blue-500">Anish Duwal</span>
        </h1>
        <p className="mt-4 text-gray-500">
          Full Stack Developer — ASP.NET Core, Angular, Next.js
        </p>
      </div>

      <ProfileImage />
    </section>
  );
}
