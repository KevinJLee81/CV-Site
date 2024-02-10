provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "website" {
  bucket = "your-s3-bucket-name"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}