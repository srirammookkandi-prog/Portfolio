function LifeFooter() {
    return (
        <footer
            className="
        border-t
        border-neutral-900
        bg-neutral-950
        px-6
        py-8
        text-neutral-100
        md:px-10
        md:py-10
      "
        >
            <div
                className="
          mx-auto
          flex
          w-full
          max-w-6xl
          flex-col
          gap-3
          text-xs
          text-neutral-700
          md:flex-row
          md:items-center
          md:justify-between
        "
            >
                <p>
                    © {new Date().getFullYear()} Sriram Mookkandi
                </p>

                <p>
                    Built with React & TypeScript
                </p>
            </div>
        </footer>
    );
}

export default LifeFooter;