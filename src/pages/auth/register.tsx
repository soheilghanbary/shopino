import TextField from "@/components/micro/forms/text-field";
import Link from "next/link";
import styles from "@/lib/sass/auth.module.scss";
export default function RegisterPage() {
  return (
    <div className={styles["auth"]}>
      <h1>Sign Up Account</h1>
      <TextField type={"text"} placeholder="Full Name" />
      <TextField type={"text"} placeholder="Email" />
      <TextField type={"password"} placeholder="Password" />
      <button>Sign Up</button>
      <div className={styles['actions']}>
        <Link href={"/auth/login"}>Sign In Account?</Link>
      </div>
    </div>
  );
}
