import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';
// Icons
import AppFilled from '~/assets/images/icons/app-filled.svg';
import ArrowDownRight from '~/assets/images/icons/arrow-down-right.svg';
import ArrowRight from '~/assets/images/icons/arrow-right.svg';
import ArrowUpRight from '~/assets/images/icons/arrow-up-right.svg';
import BackForwardArrows from '~/assets/images/icons/back-forward-arrows.svg';
import Check from '~/assets/images/icons/check.svg';
import ChevronLeft from '~/assets/images/icons/chevron-left.svg';
import CopyFilled from '~/assets/images/icons/copy-filled.svg';
import Copy from '~/assets/images/icons/copy.svg';
import Cross from '~/assets/images/icons/cross.svg';
import CryptoCoinTransparentFilled from '~/assets/images/icons/crypto-coin-transparent-filled.svg';
import CryptoCoin from '~/assets/images/icons/crypto-coin.svg';
import DangerFilled from '~/assets/images/icons/danger-filled.svg';
import DeleteFilled from '~/assets/images/icons/delete-filled.svg';
import EditFilled from '~/assets/images/icons/edit-filled.svg';
import Exchange from '~/assets/images/icons/exchange.svg';
import FileDownloadFilled from '~/assets/images/icons/file-download-filled.svg';
import Info from '~/assets/images/icons/info.svg';
import Lock from '~/assets/images/icons/lock.svg';
import Minus from '~/assets/images/icons/minus.svg';
import MoreCircleFilled from '~/assets/images/icons/more-circle-filled.svg';
import PasswordKeyFilled from '~/assets/images/icons/password-key-filled.svg';
import Plus from '~/assets/images/icons/plus.svg';
import Rotate from '~/assets/images/icons/rotate.svg';
import SettingsFilled from '~/assets/images/icons/settings-filled.svg';
import Split from '~/assets/images/icons/split.svg';
import Unlock from '~/assets/images/icons/unlock.svg';
import UploadInCircle from '~/assets/images/icons/upload-in-circle.svg';
import UserCardFilled from '~/assets/images/icons/user-card-filled.svg';
import UserCard from '~/assets/images/icons/user-card.svg';
import UserFilled from '~/assets/images/icons/user-filled.svg';
import User from '~/assets/images/icons/user.svg';
import UsersFilled from '~/assets/images/icons/users-filled.svg';
import Users from '~/assets/images/icons/users.svg';
import VerifyFilled from '~/assets/images/icons/verify-filled.svg';
import WalletFilled from '~/assets/images/icons/wallet-filled.svg';
import WalletInCircle from '~/assets/images/icons/wallet-in-circle.svg';
import Wallet from '~/assets/images/icons/wallet.svg';
import Warning from '~/assets/images/icons/warning.svg';
import ZpassLogoShort from '~/assets/images/icons/zpass-logo-short.svg';
import ZpassLogo from '~/assets/images/icons/zpass-logo.svg';
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
