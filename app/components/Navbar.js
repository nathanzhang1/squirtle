// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '1em' }}>
//       <Link href="/search.html">Search</Link>
//       <Link href="/messages">Messages</Link>
//       <Link href="/profile">Profile</Link>
//     </nav>
//   );
// }

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-around',
      padding: '1em',
      backgroundColor: '#333',
      color: '#fff',
    }}>
      <Link href="/search.html">
        <a style={{ color: '#fff', textDecoration: 'none' }}>Search</a>
      </Link>
      <Link href="/messages">
        <a style={{ color: '#fff', textDecoration: 'none' }}>Messages</a>
      </Link>
      <Link href="/profile">
        <a style={{ color: '#fff', textDecoration: 'none' }}>Profile</a>
      </Link>
    </nav>
  );
}