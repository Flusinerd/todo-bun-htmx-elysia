import '../styles/output.css';

export default function Header({title}: {title: string}) {
  return(
    <head>
      <title>{title ?? 'Todo app'}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://unpkg.com/htmx.org@1.9.6"></script>
      <link rel="stylesheet" href="/styles.css" />
    </head>
  )
}