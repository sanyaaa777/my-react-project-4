import Profile from './components/ImageGallery/ImageGallery';
import FriendList from './components/SearchBar/SearchBar';
import TransactionHistory from './components/ImageCard/ImageCard';
import friends from './friends.json';
import userData from './userData.json';
import transactions from './transactions.json';


function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

  export default App;