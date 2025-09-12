import Head from "next/head";

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Tyler Yan is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="tyler yan, tyler, yan, web developer portfolio, tyler web developer, tyler developer, tyler software engineer, mern stack, tyler yan portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Tyler Yan's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="/main/main.png" />
      <meta property="og:url" content="https://tyyan03.github.io" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Tyler Yan",
};
