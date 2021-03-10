import styles from './index.less';
import { Calendar, Button, DatePicker } from 'antd';
import { setLocale } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div>
        <Button
          onClick={() => {
            setLocale('zh-TW', false);
          }}
        >
          change language
        </Button>
      </div>
      <div>
        <DatePicker />
      </div>
      <div>
        <Calendar />
      </div>
    </div>
  );
}
