function Footer() {
    return (
        <footer className="border-t border-neutral-200 px-6 py-8 md:px-10">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
                <p>
                    © {new Date().getFullYear()} Sriram Mookkandi
                </p>

                <p>
                    Built with React, TypeScript & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}

export default Footer;