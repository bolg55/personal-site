import './globals.css';
import { Montserrat } from 'next/font/google';
import { fetchAPI } from '@/lib/api';
import { footerQuery, headerQuery } from '@/queries/populate';
import Header from './Header';
import Footer from './Footer';
import { Suspense } from 'react';
import SkeletonLoader from '@/components/SkeletonLoader';
import Providers from './Providers';

export const metadata = {
  title: 'Kellen Bolger | Full-Stack Developer',
  description: 'Built by Kellen Bolger, a full-stack developer.',
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerData, footerData] = await Promise.all([
    fetchAPI('/header', headerQuery),
    fetchAPI('/brand-info', footerQuery),
  ]);

  const {
    menu,
    showLogo,
    Logo: logo,
    socialLinks: headerSocialLinks,
  } = headerData.data.attributes;

  const {
    brandEmail,
    brandName,
    socialLinks: footerSocialLinks,
  } = footerData.data.attributes;

  const { url: logoUrl } = logo.image.data.attributes;

  return (
    <html lang='en' className={`${montserrat.variable} `}>
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#333333' />
      <body>
        <Providers>
          <div className='bg-light dark:bg-dark '>
            <Suspense fallback={<SkeletonLoader />}>
              <Header
                logoUrl={logoUrl}
                alt={logo.alt}
                showLogo={showLogo}
                socialLinks={headerSocialLinks}
                menu={menu}
              />
            </Suspense>

            {children}

            <Footer
              brandEmail={brandEmail}
              brandName={brandName}
              socialLinks={footerSocialLinks}
            />
          </div>
        </Providers>
      </body>
    </html>
  );
}
