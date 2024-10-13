import { useState } from 'react';
import './App.css';
import Content from './component/Content';
import Footer from './component/Footer';
import Header from './component/Header';
import AddRecord from './Operations/AddRecord';
import EditRecord from './Operations/EditRecord';

function App() {
  const [isOpen, setIsOpen] = useState(false); 
  const [isOpened, setIsOpened] = useState(false); 
  const [selectedUser, setSelectedUser] = useState(null);  

 
  const ToggleModal = () => {
    setIsOpen(!isOpen);
  };

 
  const ToggleModaltwo = () => {
    setIsOpened(!isOpened);
  };

 
  const handleEditUser = (user) => {
    setSelectedUser(user);
    ToggleModaltwo();
  };

  return (
    <div className="App">
      <Header />
      <Content 
        onOpenModal={ToggleModal} 
        onOpenModaltwo={handleEditUser}  
      />
      <AddRecord isModalOpen={isOpen} onCloseModal={ToggleModal} />
      <EditRecord 
        isModalOpentwo={isOpened} 
        onCloseModaltwo={ToggleModaltwo} 
        selectedUser={selectedUser}  
      />
      <Footer />
    </div>
  );
}

export default App;
