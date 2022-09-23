import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/companies'>
          <a>Companies</a>
        </Link>
        <Link href='/company'>
          <a>Company</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
