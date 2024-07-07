import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box, Button, List, ListItem, ListItemText } from '@mui/material';

const Candidates = ({ onSelectUrl, onParse }) => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    fetch('/candidates')
      .then(response => response.json())
      .then(data => setUrls(data))
      .catch(error => console.error('Error fetching candidates:', error));
  }, []);

  return (
    <Box>
      <List>
        {urls.map((url, index) => (
          <ListItem key={index} button onClick={() => onSelectUrl(url)}>
            <ListItemText primary={url} />
            <Button variant="contained" color="primary" onClick={onParse}>Parse</Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const Configure = () => {
  return (
    <Box>
      <h2>Configure</h2>
      {/* Add configuration options here */}
    </Box>
  );
};

const Preview = ({ url }) => {
  return (
    <Box>
      <iframe src={url} title="Preview" style={{ width: '100%', height: '100%' }} />
    </Box>
  );
};

const Parsed = () => {
  return (
    <Box>
      <h2>Parsed Content</h2>
      {/* Add parsed content here */}
    </Box>
  );
};

const Index = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedUrl, setSelectedUrl] = useState('');
  const [showParsed, setShowParsed] = useState(false);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleSelectUrl = (url) => {
    setSelectedUrl(url);
    setShowParsed(false);
  };

  const handleParse = () => {
    setShowParsed(true);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab label="Nate" />
        <Tab label="World Ranks" />
        <Tab label="State Ranks" />
      </Tabs>
      <Box sx={{ display: 'flex', height: 'calc(100vh - 48px)' }}>
        <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ flex: 1 }}>
            <Candidates onSelectUrl={handleSelectUrl} onParse={handleParse} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Configure />
          </Box>
        </Box>
        <Box sx={{ width: '50%' }}>
          {showParsed ? <Parsed /> : <Preview url={selectedUrl} />}
        </Box>
      </Box>
    </Box>
  );
};

export default Index;