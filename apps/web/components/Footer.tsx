const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-2xl font-bold text-white tracking-tight">Lov</span>
            <p className="mt-1 text-sm">사랑과 비주얼의 교차점</p>
          </div>

          <div className="flex flex-col items-center gap-1 text-sm">
            <p>© {currentYear} Lov. All rights reserved.</p>
            <a
              href="mailto:hello@lov.kr"
              className="text-gray-500 hover:text-white transition-colors"
            >
              hello@lov.kr
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex gap-6 text-sm">
              {['소개', '서비스', '포트폴리오', '연락하기'].map((label, i) => {
                const hrefs = ['#about', '#services', '#portfolio', '#contact'];
                return (
                  <li key={label}>
                    <a href={hrefs[i]} className="hover:text-white transition-colors">
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
