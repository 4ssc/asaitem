import Link from 'next/link';

const GlobalFooter = () => {
  return (
    <footer>
      <nav className="mb-2 text-sm">
        <ul className="flex justify-center">
          <li>
            <Link href="/privacy/">
              <a className="block py-1 px-3">
                プライバシーポリシー
              </a>
            </Link>
          </li>
          <li className="border-l">
            <Link href="/contact/">
              <a className="block py-1 px-3">
                お問い合わせ
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <p className="text-sm text-center">© 2020 <Link href="/"><a>asaitem</a></Link></p>
    </footer>
  );
};

export default GlobalFooter;
