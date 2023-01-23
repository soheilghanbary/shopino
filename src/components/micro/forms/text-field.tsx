import { forwardRef, InputHTMLAttributes } from "react";
import styles from '@/lib/sass/text-field.module.scss'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextField = forwardRef<any, InputProps>((props, ref) => {
  return <input className={styles['text-field']} {...props} ref={ref} />;
});

export default TextField;
