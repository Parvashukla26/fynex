import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sign In to Your Account',
  description: 'Access your Fynex account. Sign in to manage your projects, view progress, and collaborate with our team on your digital solutions.',
  keywords: ['sign in', 'login', 'account access', 'client portal', 'member login'],
  openGraph: {
    title: 'Sign In to Your Account | Fynex',
    description: 'Access your Fynex account. Sign in to manage your projects and collaborate with our team.',
    url: 'https://fynex-gray.vercel.app/signin',
    type: 'website',
    images: [
      {
        url: 'https://fynex-gray.vercel.app/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Fynex - Sign In to Your Account',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign In to Your Account | Fynex',
    description: 'Access your Fynex account. Sign in to manage your projects and collaborate with our team.',
    images: ['https://fynex-gray.vercel.app/og-image.svg'],
    creator: '@fynex',
  },
  alternates: {
    canonical: 'https://fynex-gray.vercel.app/signin',
  },
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign In Page" />

      <Signin />
    </>
  );
};

export default SigninPage;
