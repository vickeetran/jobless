# Project Name

> Pithy project description

## Team

  - __Product Owner__: Chris Choi
  - __Scrum Master__: Sean Ho
  - __Development Team Members__: Alex Lee & Lynn Chen

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

Initial Setup
1. Install dependencies using "npm install" from within the root directory
2. Log in to the Mysql database 
3. Drop database job (if exists)
4. Create database job 
5. Enter "npm start" at the command line 
6. Exit the Mysql database
7. Enter "node server/db/seed.js" at the command line

## Requirements

- Node 0.10.x
- Redis 2.6.x
- Postgresql 9.1.x
- etc
- etc

## Development

Git Group Workflow

# Set up a group => 
1. Create a repo for the project
2. Each team member needs join the group
3. Each team member needs fork and clone a copy of the repo
4. Add the master repo as a remote of your local repo using "git remote add upstream master"

# Submitting changes
1. Git pull --rebase upstream master / Git pull upstream master
2. Git checkout -b NAME-branch
3. Git add
4. Git commit
5. Git checkout master
6. Git merge NAME-branch
7. Git pull --rebase upstream master / Git pull upstream master
8. Git push origin master

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
