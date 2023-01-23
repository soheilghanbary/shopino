import TextField from "@/components/micro/forms/text-field";
import Link from "next/link";
import styles from "@/lib/sass/auth.module.scss";
export default function LoginPage() {
  return (
    <div className={styles["auth"]}>
      <h1>Login Account</h1>
      <TextField type={"text"} placeholder="Email" />
      <TextField type={"text"} placeholder="Password" />
      <button>Sign In</button>
      <div className={styles['actions']}>
        <Link href={"/auth/register"}>Sign Up</Link>
        <Link href={"/auth/forget"}>forget password</Link>
      </div>
    </div>
  );
}
