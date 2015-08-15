#!/bin/sh

SHA1=$1
docker push sagebrew/sb_app:$SHA1
EB_BUCKET=massive-dangerzone-$CIRCLE_BRANCH
DOCKERRUN_FILE=Dockerrun.aws.staging.json

aws s3 cp $DOCKERRUN_FILE s3://$EB_BUCKET/docker_config/Dockerrun.aws.json
