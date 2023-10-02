import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import {
  Stack, IconButton, Tabs, Tab, AppBar, Divider,
} from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import ReplyIcon from '@mui/icons-material/Reply';
import cls from './Navbar.module.scss';

function a11yProps(index: number) {
  return {
    id: `navbartab-${index}`,
    'aria-controls': `navbarpanel-${index}`,
  };
}

export const Navbar = memo(() => {
  const [tab, setTab] = useState(0);
  const changeTab = useCallback((event: React.SyntheticEvent, newValue:number) => {
    setTab(newValue);
  }, []);
  return (
    <AppBar position="static">
      <Stack spacing={7} direction="row">
        <Stack direction="row" alignItems="center">
          <IconButton className={cls.icon}>
            <AppsIcon />
          </IconButton>
          <IconButton className={cls.icon}>
            <ReplyIcon />
          </IconButton>
        </Stack>
        <Stack direction="row">
          <Tabs value={tab} onChange={changeTab} aria-label="main application tabs">
            <Tab sx={{ textTransform: 'none' }} label="Просмотр" {...a11yProps(0)} />
            <Tab sx={{ textTransform: 'none' }} label="Управление" {...a11yProps(1)} />
          </Tabs>
        </Stack>
      </Stack>
      <Divider />
    </AppBar>

  );
});
