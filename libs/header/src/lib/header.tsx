import styles from './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {
  title: string;
  data: string[];
}

export function Header(props: HeaderProps) {
  const { title, data } = props;

  return (
    <div>
      <h1>Tailwind css! {title}</h1>
      {data?.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
      <button className={styles['btn']}>Click</button>
    </div>
  );
}

export default Header;
