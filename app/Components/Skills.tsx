import React from 'react'
import Link from 'next/link'

// To Do:
// Style Headers

export const Skills = () => {

//create a for loop to iterate through the skills array and create a list of skills to display on the page
const skills = ['Cloud', 'Languages', 'Tools', 'Platforms']
for (let i = 0; i < skills.length; i++) {
    console.log(skills[i]);
}

//create a display for the skills array
console.log(skills);




    return (
        <>
            <div id='skills' className="text-4xl font-bold flex justify-center bg-primary">
                <h1>
                    Skills
                </h1>
            </div>

            <div className='sm:hidden'>
                <div id='skills' className="collapse bg-primary items-center justify-center">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">Cloud</div>
                    <div className="collapse-content primary-content">
                        <li><Link href="https://aws.amazon.com/s3/">S3</Link></li>
                        <li><Link href="https://aws.amazon.com/route53/">Route 53</Link></li>
                        <li><Link href="https://aws.amazon.com/ec2/">EC2</Link></li>
                        <li><Link href="https://aws.amazon.com/lambda/">Lambda</Link></li>
                        <li><Link href="https://aws.amazon.com/iam/">IAM</Link></li>
                        <li><Link href="https://aws.amazon.com/dynamodb/">DynamoDB</Link></li>
                        <li><Link href="https://aws.amazon.com/cloudfront/">CloudFront</Link></li>
                        <li><Link href="https://aws.amazon.com/acm/">ACM</Link></li>
                    </div>
                </div>
                <div className="collapse bg-primary items-center justify-center">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">Languages</div>
                    <div className="collapse-content primary-content">
                        <li><Link href="https://www.gnu.org/software/bash/">Bash</Link></li>
                        <li><Link href="https://www.python.org/">Python</Link></li>
                        <li><Link href="https://dotnet.microsoft.com/en-us/languages/csharp">C#</Link></li>
                        <li><Link href="https://www.typescriptlang.org/">TypeScript</Link></li>
                        <li><Link href="https://aws.amazon.com/what-is/sql/" >SQL</Link></li>
                        <li><Link href="https://learn.microsoft.com/en-us/powershell/">PowerShell</Link></li>
                    </div>
                </div>
                <div className="collapse bg-primary items-center justify-center">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium bg-primary">Tools</div>
                    <div className="collapse-content primary-content">
                        <li><Link href="https://www.splunk.com/" >Splunk</Link></li>
                        <li><Link href="https://react.dev/" >React</Link></li>
                        <li><Link href="https://www.wireshark.org/" >Wireshark</Link></li>
                        <li><Link href="https://www.jenkins.io/" >Jenkins</Link></li>
                        <li><Link href="https://www.ibm.com/qradar" >QRadar</Link></li>
                        <li><Link href="https://logrhythm.com/" >LogRhythm</Link></li>
                    </div>
                </div>
                <div id='skills' className="collapse bg-primary items-center justify-center">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">Platforms</div>
                    <div className="collapse-content primary-content">
                        <li><Link href="https://aws.amazon.com/">AWS</Link></li>
                        <li><Link href="https://ubuntu.com/">Ubuntu</Link></li>
                        <li><Link href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux">RHEL</Link></li>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block">
                <div className='flex'>
                    <div id='skills' className="bg-primary flex-row flex-auto pl-24">
                        <div className="text-xl font-medium">Cloud</div>
                        <div className="">
                            <li><Link href="https://aws.amazon.com/s3/">S3</Link></li>
                            <li><Link href="https://aws.amazon.com/route53/">Route 53</Link></li>
                            <li><Link href="https://aws.amazon.com/ec2/">EC2</Link></li>
                            <li><Link href="https://aws.amazon.com/lambda/">Lambda</Link></li>
                            <li><Link href="https://aws.amazon.com/iam/">IAM</Link></li>
                            <li><Link href="https://aws.amazon.com/dynamodb/">DynamoDB</Link></li>
                            <li><Link href="https://aws.amazon.com/cloudfront/">CloudFront</Link></li>
                            <li><Link href="https://aws.amazon.com/acm/">ACM</Link></li>
                        </div>
                    </div>
                    <div className="bg-primary flex-row flex-auto">
                        <div className="text-xl font-medium">Languages</div>
                        <div className="">
                            <li><Link href="https://www.gnu.org/software/bash/">Bash</Link></li>
                            <li><Link href="https://www.python.org/">Python</Link></li>
                            <li><Link href="https://dotnet.microsoft.com/en-us/languages/csharp">C#</Link></li>
                            <li><Link href="https://www.typescriptlang.org/">TypeScript</Link></li>
                            <li><Link href="https://aws.amazon.com/what-is/sql/" >SQL</Link></li>
                            <li><Link href="https://learn.microsoft.com/en-us/powershell/">PowerShell</Link></li>
                        </div>
                    </div>
                    <div className="bg-primary flex-row flex-auto">
                        <div className="text-xl font-medium bg-primary">Tools</div>
                        <div className="">
                            <li><Link href="https://www.splunk.com/" >Splunk</Link></li>
                            <li><Link href="https://react.dev/" >React</Link></li>
                            <li><Link href="https://www.wireshark.org/" >Wireshark</Link></li>
                            <li><Link href="https://www.jenkins.io/" >Jenkins</Link></li>
                            <li><Link href="https://www.ibm.com/qradar" >QRadar</Link></li>
                            <li><Link href="https://logrhythm.com/" >LogRhythm</Link></li>
                        </div>
                    </div>
                    <div id='skills' className=" bg-primary flex-row flex-auto">
                        <div className="text-xl font-medium">Platforms</div>
                        <div className="">
                            <li><Link href="https://aws.amazon.com/">AWS</Link></li>
                            <li><Link href="https://ubuntu.com/">Ubuntu</Link></li>
                            <li><Link href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux">RHEL</Link></li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills