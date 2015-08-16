#!/bin/sh

SHA1=$1
docker push sagebrew/sb_app:$SHA1
docker push sagebrew/mass_sys:$SHA1
EB_BUCKET=massive-dangerzone-$CIRCLE_BRANCH
DOCKERRUN_FILE=$SHA1-master.json
DOCKERRUN_FILE_SYS=$SHA1-master_mass-sys.aws.json

sed "s/<TAG>/$SHA1/" < ~/com.sagebrew.frontend/deployment/Dockerrun.aws.sys.master.json.template > ~/com.sagebrew.frontend/deployment/$DOCKERRUN_FILE_SYS
aws s3 cp ~/com.sagebrew.frontend/deployment/$DOCKERRUN_FILE_SYS s3://$BUCKET_PROD/docker_config/$DOCKERRUN_FILE_SYS


sed "s/<TAG>/$SHA1/" < ~/com.sagebrew.frontend/deployment/Dockerrun.aws.master.json.template > ~/com.sagebrew.frontend/deployment/$DOCKERRUN_FILE
aws s3 cp ~/com.sagebrew.frontend/deployment/$DOCKERRUN_FILE s3://$BUCKET_PROD/docker_config/$DOCKERRUN_FILE


~/virtualenvs/venv-2.7.6/bin/python ~/com.sagebrew.frontend/deployment/populate_options.py
~/virtualenvs/venv-2.7.6/bin/python ~/com.sagebrew.frontend/deployment/deployment.py master
