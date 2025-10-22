export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={className}>
      <p>
        Made by{" "}
        {/* <a
          href={process.env.NEXT_PUBLIC_GITHUB_URL + "/portfolio"}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        > */}
        Neria M. Lister {/* </a> */}
      </p>
    </footer>
  );
};
