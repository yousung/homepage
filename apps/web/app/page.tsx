import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getContactEmail } from '@/lib/contactEmail';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lovizu',
  url: 'https://www.lovizu.com',
  description: '깊이 있는 IT 솔루션으로 고객의 성장을 함께 그려가는 파트너',
  contactPoint: {
    '@type': 'ContactPoint',
  },
};

export default function Home() {
  const contactEmail = getContactEmail();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...organizationJsonLd,
            contactPoint: {
              ...organizationJsonLd.contactPoint,
              email: contactEmail,
            },
          }),
        }}
      />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
