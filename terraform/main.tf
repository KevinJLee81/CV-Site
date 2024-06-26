provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "website" {
  bucket = "cv-react-app"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}