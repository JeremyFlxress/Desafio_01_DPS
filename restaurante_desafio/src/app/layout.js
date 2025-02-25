import 'bootstrap/dist/css/bootstrap.min.css';//aca simplemente importamos el css de bootstrap, investigue como hacerlo ya que no es simplemente agregar un link a la pagina
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}