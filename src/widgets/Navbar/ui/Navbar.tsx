import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon } from 'shared/ui/Icon/Icon';
import LogoIcon from 'shared/assets/icons/logo.svg';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { HStack } from 'shared/ui/Stack';
import cls from './Navbar.module.scss';

export const Navbar = memo(() => {
  const { t } = useTranslation();
  const authData = useAppSelector(getUserAuthData);
  const dispatch = useAppDispatch();
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);
  if (authData) {
    return (
      <HStack role="heading" className={classNames(cls.navbar)}>
        <div className={cls.logoWrapper}>
          <Icon Svg={LogoIcon} className={cls.logo} />
        </div>
        <HStack grow justify="end">
          <Dropdown
            direction="bottomLeft"
            className={cls.dropdown}
            trigger={<Avatar size={30} src={authData.avatar} />}
            items={[
              {
                content: t('Log out'),
                onClick: onLogout,
              },
            ]}
          />
        </HStack>

      </HStack>
    );
  }
  return null;
});
