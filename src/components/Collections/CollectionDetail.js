import React from 'react';
import { Button, Card, CardHeader, Icon, TextField } from '@material-ui/core';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Redux Setup
const initialState = {
 
};

const rootReducer = (state = initialState, action) => {
  
  return state;
};

const store = createStore(rootReducer);


const NewFolderButton = () => {
  const createNewFolder = () => {
    
  };

  return (
    <div>
      <Button onClick={createNewFolder}>Create New Folder</Button>
    </div>
  );
};

const MyFavorites = () => {
  return (
    <div>
      <Card>
        <CardHeader title="Movies" avatar={<Icon>movie</Icon>} />
       
      </Card>
      <Card>
        <CardHeader title="Music" avatar={<Icon>music_note</Icon>} />
      
      </Card>
    </div>
  );
};

const RecentCollections = () => {
  return (
    <div>
      <Card>
        <CardHeader title="Education" avatar={<Icon>school</Icon>} />
       
      </Card>
      <Card>
        <CardHeader title="Document" avatar={<Icon>description</Icon>} />
        
      </Card>
      <Card>
        <CardHeader title="Financial" avatar={<Icon>attach_money</Icon>} />
        
      </Card>
      <Card>
        <CardHeader title="Business" avatar={<Icon>business</Icon>} />
        
      </Card>
    </div>
  );
};

const AllCollections = () => {
  return (
    <div>
      <Card>
        <CardHeader title="Education" avatar={<Icon>school</Icon>} />
        
      </Card>
      <Card>
        <CardHeader title="Document" avatar={<Icon>description</Icon>} />
      
      </Card>
      <Card>
        <CardHeader title="Financial" avatar={<Icon>attach_money</Icon>} />
       
      </Card>
      <Card>
        <CardHeader title="Business" avatar={<Icon>business</Icon>} />
       
      </Card>
    </div>
  );
};

// Right Panel Components
const SearchBar = () => {
  return (
    <div>
      <TextField placeholder="Search..." />
    </div>
  );
};

const CollectionDetail = () => {
  return (
    <Provider store={store}>
      <div>
        {/* Left Panel */}
        <div style={{ float: 'left', width: '50%' }}>
          <NewFolderButton />
          <MyFavorites />
          <RecentCollections />
          <AllCollections />
        </div>

        {/* Right Panel */}
        <div style={{ float: 'left', width: '50%' }}>
          <SearchBar />
        </div>
      </div>
    </Provider>
  );
};

export default CollectionDetail;
