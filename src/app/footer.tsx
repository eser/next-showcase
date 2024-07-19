import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <Link href="/" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
                <Image
                    aria-hidden
                    src="/file-text.svg"
                    alt="File icon"
                    width={16}
                    height={16}
                />
                Home
            </Link>
            <Link href="/use/" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
                <Image
                    aria-hidden
                    src="/window.svg"
                    alt="Window icon"
                    width={16}
                    height={16}
                />
                use()
            </Link>
            <Link href="/use-optimistic/" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
                <Image
                    aria-hidden
                    src="/window.svg"
                    alt="Window icon"
                    width={16}
                    height={16}
                />
                useOptimistic()
            </Link>
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://eser.live"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    src="/globe.svg"
                    alt="Globe icon"
                    width={16}
                    height={16}
                />
                Go to eser.live →
            </a>
        </footer>
    );
}