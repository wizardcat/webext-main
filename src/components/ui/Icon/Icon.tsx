import { ComponentPropsWithoutRef } from 'react';
import cn from 'classnames';
// Icons
import AppFilled from '~/assets/images/icons/app-filled.svg?react';
import ArrowDownRight from '~/assets/images/icons/arrow-down-right.svg?react';
import ArrowRight from '~/assets/images/icons/arrow-right.svg?react';
import ArrowUpRight from '~/assets/images/icons/arrow-up-right.svg?react';
import BackForwardArrows from '~/assets/images/icons/back-forward-arrows.svg?react';
import Check from '~/assets/images/icons/check.svg?react';
import ChevronLeft from '~/assets/images/icons/chevron-left.svg?react';
import Copy from '~/assets/images/icons/copy.svg?react';
import CopyFilled from '~/assets/images/icons/copy-filled.svg?react';
import Cross from '~/assets/images/icons/cross.svg?react';
import CryptoCoin from '~/assets/images/icons/crypto-coin.svg?react';
import CryptoCoinTransparentFilled from '~/assets/images/icons/crypto-coin-transparent-filled.svg?react';
import DangerFilled from '~/assets/images/icons/danger-filled.svg';
import DeleteFilled from '~/assets/images/icons/delete-filled.svg?react';
import EditFilled from '~/assets/images/icons/edit-filled.svg';
import Exchange from '~/assets/images/icons/exchange.svg?react';
import FileDownloadFilled from '~/assets/images/icons/file-download-filled.svg?react';
import Info from '~/assets/images/icons/info.svg?react';
import Lock from '~/assets/images/icons/lock.svg?react';
import Minus from '~/assets/images/icons/minus.svg';
import MoreCircleFilled from '~/assets/images/icons/more-circle-filled.svg?react';
import PasswordKeyFilled from '~/assets/images/icons/password-key-filled.svg?react';
import Plus from '~/assets/images/icons/plus.svg?react';
import Rotate from '~/assets/images/icons/rotate.svg?react';
import SettingsFilled from '~/assets/images/icons/settings-filled.svg?react';
import Split from '~/assets/images/icons/split.svg?react';
import Unlock from '~/assets/images/icons/unlock.svg?react';
import UploadInCircle from '~/assets/images/icons/upload-in-circle.svg?react';
import User from '~/assets/images/icons/user.svg?react';
import UserCard from '~/assets/images/icons/user-card.svg?react';
import UserCardFilled from '~/assets/images/icons/user-card-filled.svg?react';
import UserFilled from '~/assets/images/icons/user-filled.svg?react';
import Users from '~/assets/images/icons/users.svg?react';
import UsersFilled from '~/assets/images/icons/users-filled.svg?react';
import VerifyFilled from '~/assets/images/icons/verify-filled.svg?react';
import Wallet from '~/assets/images/icons/wallet.svg?react';
import WalletFilled from '~/assets/images/icons/wallet-filled.svg?react';
import WalletInCircle from '~/assets/images/icons/wallet-in-circle.svg?react';
import Warning from '~/assets/images/icons/warning.svg?react';
import ZpassLogo from '~/assets/images/icons/zpass-logo.svg?react';
import ZpassLogoShort from '~/assets/images/icons/zpass-logo-short.svg?react';
// Styles
import styles from './Icon.module.scss';

const ICON_NAMES = {
  'app-filled': AppFilled,
  'arrow-down-right': ArrowDownRight,
  'arrow-right': ArrowRight,
  'arrow-up-right': ArrowUpRight,
  'back-forward-arrows': BackForwardArrows,
  check: Check,
  'copy-filled': CopyFilled,
  copy: Copy,
  cross: Cross,
  'crypto-coin-transparent-filled': CryptoCoinTransparentFilled,
  'crypto-coin': CryptoCoin,
  exchange: Exchange,
  'file-download-filled': FileDownloadFilled,
  info: Info,
  lock: Lock,
  'more-circle-filled': MoreCircleFilled,
  'password-key-filled': PasswordKeyFilled,
  plus: Plus,
  rotate: Rotate,
  'settings-filled': SettingsFilled,
  split: Split,
  unlock: Unlock,
  'upload-in-circle': UploadInCircle,
  'user-card-filled': UserCardFilled,
  'user-card': UserCard,
  'user-filled': UserFilled,
  user: User,
  'users-filled': UsersFilled,
  users: Users,
  'wallet-filled': WalletFilled,
  'wallet-in-circle': WalletInCircle,
  wallet: Wallet,
  warning: Warning,
  'zpass-logo-short': ZpassLogoShort,
  'zpass-logo': ZpassLogo,
  'chevron-left': ChevronLeft,
  'delete-filled': DeleteFilled,
  'verify-filled': VerifyFilled,
  'danger-filled': DangerFilled,
  minus: Minus,
  'edit-filled': EditFilled,
};

export type IconName = keyof typeof ICON_NAMES;

type IconProps = ComponentPropsWithoutRef<'svg'> & {
  name: IconName;
  withoutFill?: boolean;
};

export default function ({
  name,
  className,
  withoutFill,
  ...rest
}: IconProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const SvgTag = ICON_NAMES[name] as 'svg';

  return (
    <SvgTag
      className={cn(
        styles.root,
        {
          [styles.withoutFill]: withoutFill,
        },
        className
      )}
      data-icon-name={name}
      aria-hidden="true"
      role="presentation"
      focusable="false"
      {...rest}
    />
  );
}
