/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      // The Appointment Engine offer no longer lives on this site.
      { source: "/appointment-engine", destination: "/", permanent: true },
      // The five AI services became three. Old links land on the closest page.
      { source: "/services/ai-google-ads", destination: "/services/smarter-google-ads", permanent: true },
      { source: "/services/ai-seo", destination: "/services/ai-search-visibility", permanent: true },
      { source: "/services/ai-websites", destination: "/services/ai-design-websites", permanent: true },
      { source: "/services/ai-social-content", destination: "/services/ai-design-websites", permanent: true },
      { source: "/services/ai-chat-and-voice", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
