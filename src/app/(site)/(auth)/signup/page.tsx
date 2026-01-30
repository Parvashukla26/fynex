import SignUp from "@/components/Auth/SignUp";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Create Your Fynex Account | Sign Up',
  description: 'Join Fynex today. Create your account to access premium digital services, manage projects, and collaborate with our expert team. Get started in minutes.',
  keywords: ['sign up', 'create account', 'register', 'join Fynex', 'new account', 'get started'],
  openGraph: {
    title: 'Create Your Fynex Account | Sign Up',
    description: 'Join Fynex today. Create your account to access premium digital services and collaborate with our expert team.',
    url: 'https://fynex-plum.vercel.app/signup',
    type: 'website',
    images: [
      {
        url: 'https://fynex-plum.vercel.app/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Fynex - Create Your Account',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Create Your Fynex Account | Sign Up',
    description: 'Join Fynex today. Create your account to access premium digital services and collaborate with our expert team.',
    images: ['https://fynex-plum.vercel.app/og-image.svg'],
    creator: '@fynex',
  },
  alternates: {
    canonical: 'https://fynex-plum.vercel.app/signup',
  },
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign Up Page" />

      <SignUp />
    </>
  );
};

export default SignupPage;
