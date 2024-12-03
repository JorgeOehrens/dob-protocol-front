import { Logo } from './logo';
import { Account } from './account';
import styles from './Header.module.scss';
import { LogoDob } from './logo/LogoDob';

type Props = {
  isAccountVisible: boolean;
};

function Header({ isAccountVisible }: Props) {
  return (
    <header className={styles.header}>
      <Logo />
      <LogoDob />

      {isAccountVisible && <Account />}
    </header>
  );
}

export { Header };
