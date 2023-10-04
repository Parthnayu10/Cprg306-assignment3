import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h2>PARTH PATEL</h2>
      <p>CPRG 306 C</p>
      <Link href="https://github.com/your-username/your-repo">
        <a>Link to GitHub Repository</a>
      </Link>
    </div>
  );
};

export default StudentInfo;
