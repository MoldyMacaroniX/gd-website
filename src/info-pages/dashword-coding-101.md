---
title: Dasword Coding 101
permalink: /dashword-coding-101/
desc: How content on this website is written and maintained.
alert: This page is a work in progress.
---

In order to upload, edit, and delete content, you will need to understand some basic coding topics.

{% alert %}
Some coding terms and definitions will be drastically oversimplified for the sake for communicating the concepts to editors unfamiliar with coding.
{% endalert %}

# Prerequisites

You will need the following.

* A [GitHub account]().
* [Node.js]().
* An integrated development environment (IDE). This page will assume you are using [Visual Studio Code]().

# The GitHub Workflow

We will manage site content via **pull requests**. When you make changes to the project, such as uploading an article, you will make a pull request. This will then be reviewed, accepted, and **pushed** to the live site.

* A **pull request** is a request to add, remove, or delete files and code.
* **Push** essentially means "upload." Given this, "to **push** the code to the live site" means "to **upload** the code to the live site."

# Integrated Development Environment

An **integrated development environment** (IDE) is the software you will use to add, edit, and delete site content. Technically, you can do this with a basic text editor, but that is incredibly inefficient. **Visual Studio Code** has GitHub integration, which makes pushing your changes to a pull request easy and efficient.

# How to edit the project

So, how exactly do we upload, edit, and delete content? Well, this requires having a copy of the project on our computer.

1. Create a [GitHub account]().
2. Create a folder to house the project.
3. [Download]() and open Visual Studio Code.
4. Go to **File** > **Open Folder...** and choose the folder you just created.
5. Go to **Terminal** > **New Terminal**.
6. In the terminal, enter and run the command
    ```sh
    git clone https://github.com/MoldyMacaroniX/gd-website.git
    ```
7. Go to Go to **File** > **Open Folder...** and open the folder that was just created.
8. Enter and run the command (you may need to open a new terminal)
    ```sh
    npm install
    ```
9. Enter and run the command
    ```sh
    npx eleventy --serve
    ```
Now, visit `http://localhost:8080/` to see the site, running locally on your computer.

The steps above is only required the first time. After the above has been done, when you want to work on the project again, follow these steps.

1. Open the project folder in Visual Studio Code.
2. Create a new terminal.
3. Run the command
    ```sh
    npx eleventy --serve
    ```

Any changes you make here will not immediately be pushed to the live site, meaning if anything breaks, the live site will stay just fine.

# Uploading an article

Now, you want to upload an article. Here is how.

## Creating a new article

1. To the left, you should see a list of the project files. Take a look at the `posts` folder. This is where all website articles are stored.
2. Create a new file. Its name will be used in its URL, so make sure it only uses lowercase letters, numbers, and hyphens. Then, add a `.md` at the end for **markdown**. Markdown will be explained in more depth later. For example, `why-we-need-glow-levels.md` will be at the URL `/posts/why-we-need-glow-levels/`.

Congratulations, you have now created a new post! Problem... it is completely empty.

## Adding metadata

Before adding the actual article content, it is time to define the article's **frontmatter**. An article's frontmatter is essentially pieces of article data that are not in the article itself, such as its title, description, and cover image.

So, how do we add frontmatter? Well, first, let's add six hyphens, three per a line, like shown:

```md
---

---
```

Everything between these set of hyphens will be considered frontmatter. Everything below will be considered the actual article. Nothing should be on top of it.

Now, we need to add some data. How about a title for the article:

```md
---
title: "Why We Need Glow Levels"
---
```

Notice how the title is wrapped in quotation marks. These quotation marks will not be shown on the website, but are necessary for the frontmatter data. Let's add some more data.

```md
---
title: "Why is Geometry Dash 2.2 taking so long?"
desc: "I decided to mentally keep track of how many levels I got in the various different styles that have become prevalent over the years. I was never requested a single glow level."
image: https://example.com/image.jpg
date: 2022-01-29
tags:
    - featured
    - guide
author: moldymacaronix
---
```

Here are some details to notice:

* The **image** data property is not using quotation marks, but rather, using a link. All images must use links. See the **images** heading on the [article standards page](/article-standards/) for more information.
* The **date** property is using a date in the format `yyyy-mm-dd`. If the month or day is only one digit, add a zero before it.
    * `2022-01-09` will work.
    * `2022-1-9` will **not** work and will cause an error.
* The **tags** property is in a list format. This is because there can be more than one tag per an article.
    * This will work
        ```md
        tags:
            - featured
            - guide
        ```
    * This will work
        ```md
        tags:
            - guide
        ```
    * This will work
        ```md
        tags: guide
        ```
    * This will **not** work
        ```md
        tags: featured,guide
        ```
    * This will **not** work
        ```md
        tags:
        ```
    * If the article has no tags, do not provide the tag property altogether.
* The **author** property can have more than one author, but it is in a different format than tags. When providing an author, make sure it is using the author's **key**, which will be explained more later. If there is more than one author, separate them using a comma **without** any spaces.
    * This will work
        ```md
        author: moldymacaronix
        ```
    * This will work
        ```md
        author: moldymacaronix,cob
        ```
    * This will **not** work
        ```md
        author:
            - moldymacaronix
            - cob
        ```
    * This will **not** work
        ```md
        author:
            - moldymacaronix
        ```

## Adding the actual article content

Great, so now we should have something looking like this.

```md
---
title: "Why is Geometry Dash 2.2 taking so long?"
desc: "I decided to mentally keep track of how many levels I got in the various different styles that have become prevalent over the years. I was never requested a single glow level."
image: https://example.com/image.jpg
date: 2022-01-29
tags:
    - featured
    - guide
author: moldymacaronix
---
```

Now, let's add the actual content that makes up the article, including paragraphs, headings, etc.

Simply copy and paste the provided article content into the markdown file you just created, **below** the frontmatter. However, you are not done yet. You will need to properly format headings, links, images, and any other syntax or components used. Please see the [syntax and components page](/syntax-components/).

# --- WORK IN PROGRESS ---