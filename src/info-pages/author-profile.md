---
title: Creating an Author Profile
permalink: /author-profile/
desc: All website author profiles are located in the authors.json file. All work with creating, deleting, and editing author profiles is done in this file.
---

All website author profiles are located in the `authors.json` file. All work with creating, deleting, and editing author profiles is done in this file.

# Adding a profile

To add a profile, add a new object at the end like the following:

```json
{
    "key":"moldymacaronix",
    "name":"MoldyMacaroniX",
    "bio": "I am Moldy. Not literally, of course.",
    "photo":"https://example.com/file.jpg",
    "youtube":"moldymacaronix",
    "twitch":"moldymacaronix",
    "twitter":"moldymacaronix",
    "discord":"PqTUgx6",
    "gdbrowser":"CreatorMoldy"
}
```

1. `key` is for the unique author identifier. This is also used in the profile URL.
2. `name` is for the author's username.
3. `bio` (optional) is for a short description of who the author is.
4. `photo` is for a link to the author's profile picture.
5. `youtube` (optional) is for the author's YouTube.
6. `twitch` (optional) is for the author's Twitch.
7. `twitter` (optional) is for the author's Twitter.
8. `discord` (optional) is for the author's Discord server.
9. `gdbrowser` (optional) is for the author's in-game profile.

If one of the optional values is not to be provided, remove the object property altogether.

# Assigning authors a verified badge

Simply add `"verified":"true"` like the following example.

```json
{
    "key":"moldymacaronix",
    "name":"MoldyMacaroniX",
    "bio": "I am Moldy. Not literally, of course.",
    "photo":"https://example.com/file.jpg",
    "youtube":"moldymacaronix",
    "twitch":"moldymacaronix",
    "twitter":"moldymacaronix",
    "discord":"PqTUgx6",
    "gdbrowser":"CreatorMoldy",
    "verified":"true"
}
```

If the author is not verified, remove the object property altogether.