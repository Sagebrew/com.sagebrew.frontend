from os import environ, path



def populate_config():
    project_dir = path.dirname(path.dirname(path.realpath(__file__)))
    cur_branch = environ.get("CIRCLE_BRANCH", "")
    with open("%s/aws_environment_config/base.config" % (
            project_dir), "r") as dockerfile:
        data = dockerfile.read()
        if(cur_branch == "staging"):
            data = populate_staging_values(data)
        elif(cur_branch == "master"):
            data = populate_production_values(data)
        else:
            data = ""

    f = open("%s/%s-%s.json" % (project_dir, environ.get('CIRCLE_SHA1'),
                                cur_branch), "w")
    f.write(data)
    f.close()

if __name__ == "__main__":
    populate_config()


def populate_staging_values(data):
    data = data.replace("<AWS_ACCESS_KEY_ID>",
                        environ.get("AWS_ACCESS_KEY_STAGING", ""))
    data = data.replace("<AWS_SECRET_ACCESS_KEY>",
                        environ.get("AWS_SECRET_ACCESS_KEY_STAGING", ""))
    data = data.replace("<AWS_S3_BUCKET>", environ.get("BUCKET_STAGING", ""))
    data = data.replace("<SHA1>", environ.get("CIRCLE_SHA1", ""))
    data = data.replace("<CIRCLE_BRANCH>", environ.get("CIRCLE_BRANCH", ""))
    data = data.replace("<APP_USER>", environ.get("APP_USER", ""))
    data = data.replace("<REDIS_HOST>", environ.get("REDIS_STAGING", ""))
    data = data.replace("<REDIS_PORT>", environ.get("REDIS_PORT", ""))
    return data


def populate_production_values(data):
    data = data.replace("<AWS_ACCESS_KEY_ID>",
                        environ.get("AWS_ACCESS_KEY_PROD", ""))
    data = data.replace("<AWS_SECRET_ACCESS_KEY>",
                        environ.get("AWS_SECRET_ACCESS_KEY_PROD", ""))
    data = data.replace("<AWS_S3_BUCKET>", environ.get("BUCKET_PROD", ""))
    data = data.replace("<SHA1>", environ.get("CIRCLE_SHA1", ""))
    data = data.replace("<CIRCLE_BRANCH>", environ.get("CIRCLE_BRANCH", ""))
    data = data.replace("<APP_USER>", environ.get("APP_USER", ""))
    data = data.replace("<REDIS_HOST>", environ.get("REDIS_PROD", ""))
    data = data.replace("<REDIS_PORT>", environ.get("REDIS_PORT_PROD", ""))
    return data
