// Collections.js
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCollections, createCollection } from '../actions/actions';
import { Button, TextField, Typography } from '@material-ui/core';
//import { Button, Typography } from '@material-ui/core';


function Collections({ collections, fetchCollections, createCollection }) {
  const [newCollectionName, setNewCollectionName] = useState('');

  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  const handleCreateCollection = () => {
   
    createCollection({ name: newCollectionName });
    setNewCollectionName('');
  };

  return (
    <div>
      <Typography variant="h4">Collections</Typography>
      <div>
        <TextField
          label="New Collection Name"
          variant="outlined"
          value={newCollectionName}
          onChange={(e) => setNewCollectionName(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleCreateCollection}>
          Create Collection
        </Button>
      </div>
      <div>
        {collections.map((collection) => (
          <div key={collection.id}>
            <Typography variant="h6">{collection.name}</Typography>
            {/* Render collection details */}
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  collections: state.collections.collections,
});

export default connect(mapStateToProps, { fetchCollections, createCollection })(Collections);
