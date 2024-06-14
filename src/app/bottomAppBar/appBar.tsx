'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import { useRouter } from "next/navigation";



export default function AppBar() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const router = useRouter();

  return (
    <Box sx={{ pb: 7 }} ref={ref}>      
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction onClick={() => router.push('/Home')} label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction onClick={() => router.push('/Favorites')} label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction onClick={() => router.push('/Archive')} label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
