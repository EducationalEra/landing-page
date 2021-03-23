#!/bin/bash

BUCKET="www-ed-era-com"
if [ "$1" == "preproduction" ]; then
    BUCKET="stage-ed-era-com"
fi

aws s3 sync build/ s3://$BUCKET --include '*' \
    --exclude '*.html' --exclude '*.css' --exclude '*.js' --exclude '*.json' \
    --region "eu-west-1" --acl=public-read --delete \
    --cache-control max-age=60

aws s3 sync build/ s3://$BUCKET --exclude '*' \
    --include '*.html' --include '*.css' --include '*.js' --include '*.json' \
    --region "eu-west-1" --acl=public-read --content-encoding="gzip" --delete \
    --cache-control max-age=60
