import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://anishduwal.com.np",
      lastModified: new Date(),
    },
    {
      url: "https://anishduwal.com.np/projects",
      lastModified: new Date(),
    },
  ];
}
