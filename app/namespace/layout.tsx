import PageLayout from '../components/Layout/PageLayout';

export default function NamespaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout>{children}</PageLayout>;
}