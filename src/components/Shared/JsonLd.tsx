import { Head } from "vite-react-ssg";

/** Renders a JSON-LD structured data block into <head>. */
export const JsonLd = ({ data }: { data: object }) => (
  <Head>
    <script type="application/ld+json">{JSON.stringify(data)}</script>
  </Head>
);
