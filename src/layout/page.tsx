import Header from "./header";

type PageProps = {
  children: JSX.Element;
  title?: string;
};

export function Page({children, title}: PageProps) {
  return (
    <html lang="en">
      <Header title={title ?? 'TODO App'}/>
      <body>
        {children}
      </body>
    </html>
  )
}