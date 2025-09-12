import '../styles/globals.css';

export const metadata = {
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  title: 'IU Resume Editor',
  description: 'Create your resume with ease',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={'content'}>{children}</div>
      </body>
    </html>
  );
}
