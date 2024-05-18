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
        <p style={{ color: '#fff', textDecoration: 'none' }}>Search</p>
      </Link>
      <Link href="/messages">
        <p style={{ color: '#fff', textDecoration: 'none' }}>Messages</p>
      </Link>
      <Link href="/profile">
        <p style={{ color: '#fff', textDecoration: 'none' }}>Profile</p>
      </Link>
    </nav>
  );
}