import Link from 'next/link'
const package_json = require('../../package.json');
const version_number = package_json.version

export default function Footer() {
  return (
    <footer>
      <div className='container footer'>
        <Link href='https://alexberndt.com' passHref>© 2023 by Alex Berndt</Link>
        <p className='footer-text'>Data Driven Developer</p>
        <p className='footer-text'>{ version_number }</p>
      </div>
    </footer>
  )
}
