#!/bin/bash
# Cloudflare Pages 部署脚本

# 使用方法：
# 1. 从 https://dash.cloudflare.com/profile/api-tokens 创建 API Token
#    权限需要：Cloudflare Pages > Edit
# 2. 替换下面的 API_TOKEN 和 PROJECT_NAME
# 3. 运行：bash deploy.sh

export CLOUDFLARE_API_TOKEN="你的_API_TOKEN"
PROJECT_NAME="suwandao"

echo "正在部署到 Cloudflare Pages..."
wrangler pages deploy dist --project-name=$PROJECT_NAME --branch=main

echo "部署完成！"
