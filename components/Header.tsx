import Navbar from './Navbar';

const Header = () => {
  return (
    <div>
      <div>Informer</div>
      <div className='searchbar'>
        <form action=''>
          <input
            name='Search'
            type='text'
            placeholder='Search from ... Companies'
          />
          <button type='submit'>Search</button>
        </form>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
