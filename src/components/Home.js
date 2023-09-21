import React, {useState} from 'react';
import { Button, Card, CardContent, Grid, IconButton, Typography, Hidden ,TextField, InputLabel} from '@mui/material';
import MovieIcon from './assets/icons/movie.svg'; 
import MusicIcon from './assets/icons/music.svg';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; 
import EducationIcon from './assets/icons/education.svg'; 
import DocumentIcon from './assets/icons/documents.svg'; 
import BusinessIcon from './assets/icons/business.svg'; 
import FinancialIcon from './assets/icons/financial.svg'; 
import Bell from './assets/icons/bell.svg'; 
import  Person from './assets/icons/person.svg';
//import Search from './assets/icons/search.svg'
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { SketchPicker } from 'react-color';
function Home() {
  const [selectedColor, setSelectedColor] = useState('#000000'); 

    const bellIconStyle = {
        width: '64px', 
        height: '64px',
        marginRight: '20px', 
      };
    
      const avatarIconStyle = {
        width: '64px', 
        height: '64px', 
        marginRight: '20px',
      };
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 3, padding: '20px' }}>
          <div>
            <Button variant="contained" color="primary" startIcon={<AddCircleOutlineIcon />}>
              Create New Folder
            </Button>
          </div>
  
          <div>
            <Typography variant="h5" gutterBottom>
              My Favorites
            </Typography>
  
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card style={{ width: '100%', minHeight: '150px', display: 'flex', alignItems: 'center' }}>
                  <CardContent>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton color="primary">
                        <img src={MovieIcon} alt="Movie" width={48} height={48} />
                      </IconButton>
                      <Typography variant="h6" style={{ marginLeft: '10px' }}>
                        Movies
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card style={{ width: '100%', minHeight: '150px', display: 'flex', alignItems: 'center' }}>
                  <CardContent>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton color="primary">
                        <img src={MusicIcon} alt="Music" width={48} height={48} />
                      </IconButton>
                      <Typography variant="h6" style={{ marginLeft: '10px' }}>
                        Music
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
  
          <div>
            <Typography variant="h5" gutterBottom>
              Recent Collections
            </Typography>
            <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card style={{ width: '100%', minHeight: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CardContent>
                    <IconButton color="primary">
                        <img src={EducationIcon} alt="Movie" width={48} height={48} />
                    </IconButton>
                    <Typography variant="h6" style={{ marginTop: '10px' }}>
                        Education
                    </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card style={{ width: '100%', minHeight: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CardContent>
                    <IconButton color="primary">
                        <img src={DocumentIcon} alt="Movie" width={48} height={48} />
                    </IconButton>
                    <Typography variant="h6" style={{ marginTop: '10px' }}>
                        Documents
                    </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card style={{ width: '100%', minHeight: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CardContent>
                    <IconButton color="primary">
                        <img src={FinancialIcon} alt="Movie" width={48} height={48} />
                    </IconButton>
                    <Typography variant="h6" style={{ marginTop: '10px' }}>
                        Financial
                    </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card style={{ width: '100%', minHeight: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CardContent>
                    <IconButton color="primary">
                        <img src={BusinessIcon} alt="Movie" width={48} height={48} />
                    </IconButton>
                    <Typography variant="h6" style={{ marginTop: '10px' }}>
                        Business
                    </Typography>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
          </div>


          <div>
            <Typography variant="h5" gutterBottom>
              All Collections
            </Typography>
            <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card style={{ width: '100%', minHeight: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CardContent>
                    <IconButton color="primary">
                        <img src={EducationIcon} alt="Movie" width={48} height={48} />
                    </IconButton>
                    <Typography variant="h6" style={{ marginTop: '10px' }}>
                        Education
                    </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card style={{ width: '100%', minHeight: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CardContent>
                    <IconButton color="primary">
                        <img src={DocumentIcon} alt="Movie" width={48} height={48} />
                    </IconButton>
                    <Typography variant="h6" style={{ marginTop: '10px' }}>
                        Documents
                    </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card style={{ width: '100%', minHeight: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CardContent>
                    <IconButton color="primary">
                        <img src={FinancialIcon} alt="Movie" width={48} height={48} />
                    </IconButton>
                    <Typography variant="h6" style={{ marginTop: '10px' }}>
                        Financial
                    </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card style={{ width: '100%', minHeight: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CardContent>
                    <IconButton color="primary">
                        <img src={BusinessIcon} alt="Movie" width={48} height={48} />
                    </IconButton>
                    <Typography variant="h6" style={{ marginTop: '10px' }}>
                        Business
                    </Typography>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
          </div>
        </div>
  
       
        <Hidden smDown>
        <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1, backgroundColor: '#f2f2f2', padding: '20px' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <TextField
            label="Search..."
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="primary" />
                </InputAdornment>
              ),
              style: { background: 'white', borderRadius: '0.5rem', height: '48px' },
            }}
          />
          <div style={{ marginLeft: '20px' }}>
            
            <img src={Bell} alt="bell" style={bellIconStyle} />
          </div>
          <div style={{ marginLeft: '20px' }}>
           
            <img src={Person} alt="person" style={avatarIconStyle} />
          </div>
        </div>

      
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
          <Typography variant="h6">Add Collection</Typography>
          <div style={{ marginTop: '10px' }}>
            <div style={{ marginBottom: '10px' }}>
              <InputLabel htmlFor="collection-name">Collection Name</InputLabel>
              <TextField
                fullWidth
                variant="outlined"
                id="collection-name"
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
  <InputLabel htmlFor="icon-color">Select Icon Color</InputLabel>
  <TextField
    fullWidth
    variant="outlined"
    id="icon-color"
  />
  <SketchPicker
    color={selectedColor}
    onChange={(color) => setSelectedColor(color.hex)}
  />
</div>
           
            <Button
              variant="contained"
              color="primary"
            >
              Add Collection
            </Button>
          </div>
        </div>
      </div>
    </div>
    
        </Hidden>
      </div>
    );
  }
  
  export default Home;
  