terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.98"
    }
  }

  backend "s3" {}  # Variáveis serão passadas pela GitHub Action
}
