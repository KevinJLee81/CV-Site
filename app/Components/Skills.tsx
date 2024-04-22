import React from "react";
import Link from "next/link";

export const Skills = () => {
  return (
    <>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider"></div>
        <div
          id="skills"
          className="text-4xl font-bold flex justify-center bg-base-100 pb-6"
        >
          <h1>Skills</h1>
        </div>

        {/* Mobile View */}
        <div className="sm:hidden">
          <div
            id="skills"
            className="collapse bg-100 items-center justify-center"
          >
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-2xl font-semibold">Cloud</div>
            <div className="collapse-content 100-content list-none">
              <li>
                <Link href="https://aws.amazon.com/s3/">S3</Link>
              </li>
              <li>
                <Link href="https://aws.amazon.com/route53/">Route 53</Link>
              </li>
              <li>
                <Link href="https://aws.amazon.com/ec2/">EC2</Link>
              </li>
              <li>
                <Link href="https://aws.amazon.com/lambda/">Lambda</Link>
              </li>
              <li>
                <Link href="https://aws.amazon.com/iam/">IAM</Link>
              </li>
              <li>
                <Link href="https://aws.amazon.com/dynamodb/">DynamoDB</Link>
              </li>
              <li>
                <Link href="https://aws.amazon.com/cloudfront/">
                  CloudFront
                </Link>
              </li>
              <li>
                <Link href="https://aws.amazon.com/acm/">ACM</Link>
              </li>
            </div>
          </div>
          <div className="collapse bg-100 items-center justify-center">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-2xl font-semibold">
              Languages
            </div>
            <div className="collapse-content 100-content list-none">
              <li>
                <Link href="https://www.gnu.org/software/bash/">Bash</Link>
              </li>
              <li>
                <Link href="https://www.python.org/">Python</Link>
              </li>
              <li>
                <Link href="https://dotnet.microsoft.com/en-us/languages/csharp">
                  C#
                </Link>
              </li>
              <li>
                <Link href="https://www.typescriptlang.org/">TypeScript</Link>
              </li>
            </div>
          </div>
          <div className="collapse bg-100 items-center justify-center">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-2xl font-semibold">Tools</div>
            <div className="collapse-content 100-content list-none">
              <li>
                <Link href="https://react.dev/">React</Link>
              </li>
              <li>
                <Link href="https://www.jenkins.io/">Jenkins</Link>
              </li>
              <li>
                <Link href="https://github.com/features/actions">
                  GitHub Actions
                </Link>
              </li>
              <li>
                <Link href="https://www.terraform.io/">Terraform</Link>
              </li>
              <li>
                <Link href="https://www.docker.com/">Docker</Link>
              </li>
            </div>
          </div>
          <div
            id="skills"
            className="collapse bg-100 items-center justify-center"
          >
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-2xl font-semibold">
              Platforms
            </div>
            <div className="collapse-content 100-content list-none">
              <li>
                <Link href="https://aws.amazon.com/">AWS</Link>
              </li>
              <li>
                <Link href="https://ubuntu.com/">Ubuntu</Link>
              </li>
              <li>
                <Link href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux">
                  RHEL
                </Link>
              </li>
            </div>
          </div>
          <div
            id="skills"
            className=" collapse bg-100 items-center justify-center"
          >
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-2xl font-semibold">
              Security
            </div>
            <div className="collapse-content 100-content list-none">
              <li>
                <Link href="https://www.splunk.com/">Splunk</Link>
              </li>
              <li>
                <Link href="https://www.ibm.com/qradar">QRadar</Link>
              </li>
              <li>
                <Link href="https://logrhythm.com/">LogRhythm</Link>
              </li>
              <li>
                <Link href="https://www.wireshark.org/">Wireshark</Link>
              </li>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:block bg-100">
          <div className="flex justify-between list-none mx-auto max-w-screen-xl">
            <div className="flex-1 mx-2">
              <div className="text-2xl font-semibold pb-2">Cloud</div>
              <ul>
                <li>
                  <Link
                    href="https://aws.amazon.com/s3/"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    S3
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://aws.amazon.com/route53/"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    Route 53
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://aws.amazon.com/ec2/"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    EC2
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://aws.amazon.com/lambda/"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    Lambda
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://aws.amazon.com/iam/"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    IAM
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://aws.amazon.com/dynamodb/"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    DynamoDB
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://aws.amazon.com/cloudfront/"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    CloudFront
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://aws.amazon.com/acm/"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    ACM
                  </Link>
                </li>
              </ul>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="flex-1 mx-2">
              <div className="text-2xl font-semibold pb-2">Languages</div>
              <ul>
                <li>
                  <Link
                    href="https://www.gnu.org/software/bash/"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    Bash
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.python.org/"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    Python
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://dotnet.microsoft.com/en-us/languages/csharp"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    C#
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.typescriptlang.org/"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    TypeScript
                  </Link>
                </li>
              </ul>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="flex-1 mx-2">
              <div className="text-2xl font-semibold pb-2">Tools</div>
              <ul>
                <li>
                  <Link
                    href="https://react.dev/"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    React
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.jenkins.io/"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    Jenkins
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/features/actions"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    GitHub Actions
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.terraform.io/"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    Terraform
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.docker.com/"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    Docker
                  </Link>
                </li>
              </ul>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="flex-1 mx-2">
              <div className="text-2xl font-semibold pb-2">Platforms</div>
              <ul>
                <li>
                  <Link
                    href="https://aws.amazon.com/"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    AWS
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://ubuntu.com/"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    Ubuntu
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    RHEL
                  </Link>
                </li>
              </ul>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="flex-1 mx-2">
              <div className="text-2xl font-semibold pb-2">Security</div>
              <ul>
                <li>
                  <Link
                    href="https://www.splunk.com/"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    Splunk
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.ibm.com/qradar"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    QRadar
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://logrhythm.com/"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    LogRhythm
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.wireshark.org/"
                    className="hover:text-blue-500 transition duration-200"
                  >
                    Wireshark
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
