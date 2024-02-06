import React from 'react'
import Link from 'next/link'

const Projects = () => {
    return (
        <>
        <div className="m-6">
            </div>
            <div id='projects' className="text-4xl font-bold flex justify-center py-28">
                <h1>
                    Projects
                </h1>
            </div>

            <div className="card bg-base-100 mb-32">
                <div className="card-body items-center justify-center">
                    <h2 className="card-title">kevinleecv</h2>
                    <br />- Built an App with React, Next.js, DaisyUI, Tailwind CSS, and TypeScript.
                    <br />- Designed a CloudFront distribution with origin access control.
                    <br />- Created custom error pages for 403 and 404 error codes.
                    <br />- The distribution has an S3 origin and uses a SSL/TLS certificate issued by ACM.
                    <br />- Used Route 53 to manage domain name servers, create records, and validate certificates.
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link href="https://github.com/KevinJLee81/CV-Website/blob/main/README.txt">View Project</Link></button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 mb-32">
                <div className="card-body items-center justify-center">
                    <h2 className="card-title">Lambda Image Resizer</h2>
                    <br />- The Image-Resizer function uses a S3 bucket as the trigger.
                    <br />- The trigger invokes the Lambda function asynchronously.
                    <br />- Image-Resizer reformats the image in the S3 bucket
                    and saves a copy to a sepreate s3 bucket.
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link href="https://github.com/KevinJLee81/ImageResizer/blob/main/README.md">View Project</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Projects