import PageLayout from '../components/Layout/PageLayout';

export default function UNSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout>{children}</PageLayout>;
}