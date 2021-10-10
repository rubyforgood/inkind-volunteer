# InKind - Supporting Community Education Partnerships

This repository is the frontend code for an application named InKind, which is a [Ruby For Good](https://rubyforgood.org/) project serving [Community Education Partnerships](https://www.cep.ngo/) (CEP).

Community Education Partnerships' mission is to increase the learning opportunities and enhance the academic achievement of students experiencing homelessness and housing insecurity. Community Education Partnerships offers its students: individualized tutoring and mentoring, backpacks, school supplies, books, learning resources, enrollment assistance, and opportunities to participate in extracurricular enrichment activities.

This app allows CEP volunteers to provide feedback from the mentoring sessions that are a core part of CEP's programming. These sessions provide vital stability to young people who lack access to learning opportunities and face a multitude of challenges that affect their educational outcomes. CEP volunteers form lasting relationships with students, and communicate their needs of food insecurity and other necessities to CEP, ensuring that staff members are able to facilitate the appropriate support for students, and by extension, their families. This app will enable CEP to collect and analyze critical data, facilitate quicker response times to requests for support, and enable them to apply for grant funding, ensuring that their work remains sustainable.

The counterpart to this codebase is [`inkind-admin`](https://github.com/rubyforgood/inkind-admin), which is a Ruby on Rails GraphlQL API (and desktop first admin portal).

# Welcome Contributors!

Thanks for checking us out!
  - Check the `CONTRIBUTING.md` file for a guide on how to get started
  - This is a 100% volunteer-supported project, please be patient with your correspondence. Most (all?) of us have day jobs and so responses to questions / pending PRs may not be immediate. Please be patient, we'll get to you! :)

Please feel encouraged to join us on Slack! You can sign up at https://rubyforgood.herokuapp.com

We're in #team-inkind

# Development

This is a TypeScript/React project that uses GraphQL as it's single endpoint. GraphQL schema is checked in to both `inkind` codebases.

This project was initially setup with [Create React App](https://github.com/facebook/create-react-app). You can learn more this in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). To learn more about React, check out the [React documentation](https://reactjs.org/).

If you are unfamiliar with GraphQL, there is no better time to learn. [HowToGraphQL](https://www.howtographql.com/) is a wonderful interactive tutorial to get acquainted. This project uses [Apollo](https://www.apollographql.com/) to communicate between the backend and fronted.

## Installation

### Node

1. Install Node.js. We recommend [asdf](https://asdf-vm.com/guide/getting-started.html#_1-install-dependencies) because you can also use this version manager to install Ruby, which is necessary to pull data into this client-side application. [nvm](https://github.com/nvm-sh/nvm) works too!

### Yarn

1. Install yarn. With [asdf](https://github.com/twuni/asdf-yarn) this can be accomplished with `asdf plugin-add yarn` & `asdf install yarn latest`
1. Run `yarn install`

### Install/Setup InKind Backend

1. Proceed to the [installation instructions on `inkind-admin`](https://github.com/rubyforgood/inkind-admin#installation) and work your way down to the server instructions.
1. After you've completed backend installations, start a rails server with `bin/rails s` and leave it running.

### Start project

1. Run `yarn start` in a new shell session. This will open [http://localhost:3000](http://localhost:3000) to view the project in your browser. The page will reload as you make edits to TypeScript. You will also see type & lint offenses in the console.

### Tests

1. Run `yarn test` This will launch the test runner in an interactive watch mode.

### Login

To log in as a volunteer:

Email: volunteer@cep.dev
Password: password

# Working with GraphQL

When you make a change that grabs additional fields from a GraphQL query, OR makes a new request to a mutation, you need to regenerate the GraphQL schema in this repository.

## Available Scripts

### `yarn schema`

1. Make sure the [inkind-admin project](https://github.com/rubyforgood/inkind-admin) is running on your local development machine (`bin/rails c`).
2. Run `yarn schema` to regenerate all graphql Typescript files.
