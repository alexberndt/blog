import Link from 'next/link'
import { siteName } from '../utils/constants'

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/" passHref>
          {siteName}
        </Link>
      </div>
    </header>
  )
}
