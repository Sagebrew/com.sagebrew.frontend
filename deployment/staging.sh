#!/bin/sh

SHA1=$1
docker push sagebrew/sb_app:$SHA1
docker push sagebrew/mass_sys:$SHA1
EB_BUCKET=massive-dangerzone-$CIRCLE_BRANCH
DOCKERRUN_FILE=Dockerrun.aws.staging.json
DOCKERRUN_FILE_SYS=$SHA1-staging_mass-sys.aws.json

aws s3 cp ~/com.sagebrew.fontend/deployment/Dockerrun.aws.json.sys.staging s3://$EB_BUCKET/docker_config/$DOCKERRUN_FILE_SYS
aws s3 cp $DOCKERRUN_FILE s3://$EB_BUCKET/docker_config/Dockerrun.aws.json

~/virtualenvs/venv-2.7.6/bin/python ~/com.sagebrew.frontend/deployment/populate_options.py
~/virtualenvs/venv-2.7.6/bin/python ~/com.sagebrew.frontend/deployment/deployment.py staging
