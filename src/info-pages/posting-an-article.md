---
title: Publishing an Article
permalink: /publish-article/
desc: How to publish an article.
---

First, make sure the article is edited and ready to go. Double check for correct syntax. If you are able to, preview the post in a local development environment.

# Metadata

You can assign, delete, and edit metadata by editing the **frontmatter**. Make sure the post has a valid title, description, date, image, author, and tags. If the article does not fit in any one tag, do not assign it any at all. If this is the case, **do not** just leave the tag value empty, but remove it altogether.

# Assigning an author

Simply give the author value in the frontmatter a valid author key. If the article author does not yet have a profile in `authors.json`, see [creating an author profile](/author-profile/).

# Publish an article

Simply add the article markdown file to the `posts` folder. The file name is what will be used in the URL, so avoid using anything but hyphens and lowercase letters.