import { useState } from 'react';
import { useEffect } from 'react';

const Landing = () => {
  const buzzWords = ["Cloud", "Devops", "Security", "Splunk", "SIEM", "RHEL", "Firewall"]
  const [indexState, setIndexState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexState((prevIndex) => (prevIndex + 1) % buzzWords.length);
    }, 2000); // Change index every 2 seconds

    // Clear interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [buzzWords.length]);
  return (
    <>
        <title>Kevin Lee CV</title>
        <meta name="description" content="Cloud Porfolio" />
        <meta name="title" content="Kevin Lee CV" />
        <meta name="keywords" content="Cloud, AWS, Azure, GCP, DevOps, Python, C#, TypeScript, SQL, CI/CD, S3, Cloudfront, React, Python, Bash, Porfolio, Splunk, Lambda"/>
    
      <div id='landing' className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <p className="py-6 text-4xl">I'm Kevin</p>
            <div className='text-xl pb-52'>
              I am a {buzzWords[indexState]} Engineer
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing