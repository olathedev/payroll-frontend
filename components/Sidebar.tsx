import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <div>
        <Image src="/images/logo.png" alt="logo" width={40} height={40} />
      </div>
      <div>
        <ul>
          <li>
            <Link href="/home">Dashboard</Link>
          </li>
          <li>
            <Link href="/home">Employee</Link>
          </li>
          <li>
            <Link href="/home">Attendance</Link>
          </li>
          <li>
            <Link href="/home">Recruitment</Link>
          </li>
          <li>
            <Link href="/home">Performance</Link>
          </li>
          <li>
            <Link href="/home">Payroll</Link>
          </li>
          <li>
            <Link href="/home">Training and Development</Link>
          </li>
          <li>
            <Link href="/home">Schedule</Link>
          </li>
          <li>
            <Link href="/home">Reports and Analytics</Link>
          </li>
          <li>
            <Link href="/home">Help</Link>
          </li>
          <li>
            <Link href="/home">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
