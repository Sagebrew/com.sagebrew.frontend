#!/bin/sh

SHA1=$1
docker push sagebrew/sb_app:$SHA1
docker push sagebrew/mass_sys:$SHA1
EB_BUCKET=massive-dangerzone-$CIRCLE_BRANCH
DOCKERRUN_FILE=$SHA1-staging.json
WEB_ZIP=$SHA1-staging_web.zip
DOCKERRUN_FILE_SYS=$SHA1-staging_mass-sys.aws.json

sed "s/<TAG>/$SHA1/" < ~/com.sagebrew.frontend/deployment/Dockerrun.aws.sys.staging.json.template > ~/com.sagebrew.frontend/deployment/$DOCKERRUN_FILE_SYS
aws s3 cp ~/com.sagebrew.frontend/deployment/$DOCKERRUN_FILE_SYS s3://$BUCKET_STAGING/docker_config/$DOCKERRUN_FILE_SYS

cd /home/ubuntu/com.sagebrew.frontend/aws_bundle/
sed "s/<TAG>/$SHA1/" < ~/com.sagebrew.frontend/deployment/Dockerrun.aws.staging.json.template > $DOCKERRUN_FILE
zip -r $WEB_ZIP .
rm $DOCKERRUN_FILE
aws s3 cp $WEB_ZIP s3://$BUCKET_STAGING/docker_config/$WEB_ZIP

~/virtualenvs/venv-2.7.6/bin/python ~/com.sagebrew.frontend/deployment/populate_options.py
~/virtualenvs/venv-2.7.6/bin/python ~/com.sagebrew.frontend/deployment/deployment.py staging
