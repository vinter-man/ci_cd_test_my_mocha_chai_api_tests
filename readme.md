## Short description

Autotests are designed to cover the most common user scenarios. One scenario
combines a large number of interactions of different parts.

## Installation

Downloading and installing
[Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
[k6](https://k6.io/docs/get-started/installation/)

Check

```bash
node -v
npm -v
k6 version
```

Install a repository with tests

```
git clone https://gitlab/<test_repository>
```

Installing dependencies

```bash
cd test_repository
npm install
```

Do not forget to change the config file

```
nano env.json
```

## Run tests

Depending on which tests you want to run, enter one of:

```bash
npm run coingecko
```

## View result

Parse the result in the terminal, or with a reporter

html

```
mochawesome-report\mochawesome.html
```

json

```
mochawesome-report\mochawesome.json
```

## Update

> Save local important changes before updating!

```
git reset --hard HEAD
git pull
npm install
```

## Delete

> Save .env file before deleting

```
cd
rm -r betsy-be-tests
```
