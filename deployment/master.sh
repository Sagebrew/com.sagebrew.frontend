#!/bin/sh

SHA1=$1
docker push sagebrew/sb_app:$SHA1
docker push sagebrew/mass_sys:$SHA1
EB_BUCKET=massive-dangerzone-$CIRCLE_BRANCH
DOCKERRUN_FILE=$SHA1-master.json
DOCKERRUN_FILE_SYS=$SHA1-master_mass-sys.aws.json

aws s3 cp ~/com.sagebrew.frontend/deployment/Dockerrun.aws.sys.master.json s3://$BUCKET_STAGING/docker_config/$DOCKERRUN_FILE_SYS
aws s3 cp ~/com.sagebrew.frontend/deployment/Dockerrun.aws.master.json s3://$BUCKET_STAGING/docker_config/$DOCKERRUN_FILE


~/virtualenvs/venv-2.7.6/bin/python ~/com.sagebrew.frontend/deployment/populate_options.py
~/virtualenvs/venv-2.7.6/bin/python ~/com.sagebrew.frontend/deployment/deployment.py master
