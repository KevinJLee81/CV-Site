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
      <div id='landing' className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hi there</h1>
            <p className="py-6">I'm Kevin</p>
            <div className='text-xl'>
              I am a {buzzWords[indexState]} Engineer
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing