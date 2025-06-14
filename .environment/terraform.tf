terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.98"
    }
  }

  required_version = ">= 1.12.1"
}

provider "aws" {
  region = var.AWS_REGION
}
