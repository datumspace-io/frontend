'use client';

import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@/components/ui/adapter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import Breadcrumbs from './Breadcrumbs';

export default function TopNav() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className="flex items-center gap-4">
            <Typography variant="h6">

              <Link href="/">DatumSpace</Link>
            </Typography>

            <div className="flex gap-4">
              <Button color="inherit" component={Link} href="/namespace">
                NameSpace
              </Button>
              <Button color="inherit" component={Link} href="/uns">
                UNS
              </Button>
              <Button color="inherit" component={Link} href="/apps">
                Apps
              </Button>
            </div>
          </div>

          <div className="ml-auto flex gap-2">
            <IconButton color="inherit" size="large">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit" size="large">
              <SettingsIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Breadcrumbs />
    </>
  );
}