import { memo, useState } from 'react';
import { Page } from 'widgets/Page/Page';
import { OutlayList, useFetchList } from 'entities/Outlay';
import { Stack, Divider } from '@mui/material';
import { Sidebar } from '../Sidebar/Sidebar';
import cls from './MainPage.module.scss';
import { MainPageHeader } from '../MainPageHeader/MainPageHeader';

const sidebarWidth = 234;
const MainPage = memo(() => {
  const { data: outlays, isLoading, error } = useFetchList();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  if (isLoading) {
    return <Page className={cls.Page}>Loading</Page>;
  }
  if (error) {
    return <Page className={cls.Page}>Error</Page>;
  }
  return (
    <Page className={cls.Page}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Sidebar
          width={sidebarWidth}
          open={isSidebarOpen}
          onSidebarClose={() => setIsSidebarOpen(false)}
        />
        <Stack
          className={cls.wrapper}
          direction="column"
          divider={<Divider />}
          sx={{
            width: { sm: `calc(100% - ${sidebarWidth}px)` },
            ml: { sm: `${sidebarWidth}px` },
          }}
        >
          <MainPageHeader
            onSidebarOpen={() => setIsSidebarOpen(true)}
            title="Строительно-монтажные работы"
          />
          <OutlayList items={outlays} />
        </Stack>
      </Stack>
    </Page>
  );
});
export default MainPage;
