import { getServerSession } from 'next-auth';
import './global.css';
import AuthProvider from './presentation/auth/provider';
import { authOptions } from './api/auth/[...nextauth]/route';

export const metadata = {
  title: 'Welcome to ca-next-demo',
  description: 'Generated by create-nx-workspace',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <AuthProvider session={session}>
          {children}
        </AuthProvider></body>
    </html>
  );
}
