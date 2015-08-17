from os import environ, path


def populate_config():
    project_dir = path.dirname(path.dirname(path.realpath(__file__)))
    with open("%s/dockerfiles/dockerfile.template" % (
            project_dir), "r") as dockerfile:
        data = dockerfile.read()
        data = populate_values(data)

    f = open("%s/dockerfiles/Dockerfile" % (project_dir), "w")
    f.write(data)
    f.close()


def populate_values(data):
    environment_set = environ.get("CIRCLE_BRANCH", "")
    branch = environ.get('CIRCLE_BRANCH', "")
    if environment_set != "staging" and environment_set != "master":
        environment_set = "development"
    if "/" in branch or "pull" in branch:
        branch = "staging"
    data = data.replace("<ENVIRONMENT>", environment_set)
    data = data.replace("<BRANCH>", branch)
    data = data.replace("<APP_USER>", environ.get("APP_USER", ""))
    data = data.replace("<BUCKET>", environ.get("BUCKET_STAGING", ""))
    return data


if __name__ == "__main__":
    populate_config()