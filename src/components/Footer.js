import Link from 'next/link'
import { siteName } from '../utils/constants'

const packageJson = require('../../package.json')
const versionNumber = packageJson.version

export default function Footer() {
  return (
    <footer>
      <div className="container footer">
        <Link href="https://alexberndt.com" passHref>
          © 2025 by Alex Berndt
        </Link>
        <p className="footer-text">{siteName}</p>
        <p className="footer-text">{versionNumber}</p>
      </div>
    </footer>
  )
}
