# Geometry Dash Website Project

This is the source code for my Geometry Dash website project

## Documentation

For a documentation on how content is written and managed, see [dashword.net/handbook/](https://www.dashword.net/handbook/).

## Built With

* Built using [Eleventy](https://www.11ty.dev/),
* on top of [Vredeburg](https://github.com/dafiulh/vredeburg).

## Getting Started

To get a local copy up and running, follow these simple steps.

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/MoldyMacaroniX/gd-website.git
    ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run Eleventy
   ```sh
   npx eleventy --serve
   ```
This will create an instance at [http://localhost:8080/](http://localhost:8080/).

Alternatively, you can run the `install.bat` file to install the NPM packages and then run `run.bat` to run Eleventy. This is an option better for those less familiar with the command line.

## Features

This website is very minimal right now but will be expanded on over time.

* Articles.
* Categories and category pages.
* Authors and author pages.
* Multiple authors per article support.
* Luxon for handling dates.

## Usage

Feel free to use this as a base/template for your own projects. Credit is not required but very much appreciated.

One thing to note is that this website was never designed to be a base or template, so there are a lot of bad coding practices and inconsistencies that might make using it for your own projects harder.

If that still doesn't scare you away, make sure you remove the Google Analytics and Utterances scripts (or replace them with your own).