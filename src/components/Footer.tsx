const Footer = () => {
    return (
        <footer className="w-screen fixed bottom-0 shadow-inner">
            <div className="container flex items-center justify-center mx-auto capitalize h-14">
                Made by
                <a
                    href="https://www.instagram.com/harsh.coderc/"
                    className="mx-1"
                >
                    Coderc
                </a>
                with
                <span className="ml-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="#ff0000"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
