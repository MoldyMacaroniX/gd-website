---
title: Syntax and Components
permalink: /syntax-components/
desc: Reference sheet for all syntax and components that can be used in articles.
---

Here is a reference sheet for all syntax and components that can be used in articles.

# Article Example

{% details "Article Example" %}

The following example shows a short article with a correct metadata header. Use this as a template. Aside from metadata and paragraphs, this does not contain any syntax or component examples.

```md
---
title: "Why is Geometry Dash 2.2 taking so long?"
desc: "Geometry Dash 2.2 is taking so long mainly because of platformer mode, the arrow trigger, and versus mode."
image: https://example.com/image.jpg
date: 2022-01-29
tags:
    - guide
author: moldymacaronix
---

Geometry Dash 2.2 is taking so long mainly because of platformer mode, the arrow trigger, and versus mode. Each of these upcoming features greatly changes gameplay, requiring RobTop to essentially rewrite a lot of the game. Simply put: the game was not designed to have icons changing direction or to have multiplayer, which is why core parts of the game likely have to be redesigned.

However, seeing the progress RobTop has via the official sneak peek and other leaks, it is clear that 2.2 is close to releasing.

In conclusion, 2.2 is taking so long because of features that require major game redesigns, including platformer mode, the arrow trigger, and versus mode.
```

{% enddetails %}

# Syntax and Components

{% details "Metadata" %}

Here is a snippet of code used to enter metadata. Make sure this is the **first** thing in your article file. You might not be able to fill it all out on your own, but filling out as much as you can is greatly appreciated.

```md
---
title: "Why is Geometry Dash 2.2 taking so long?"
desc: "Geometry Dash 2.2 is taking so long mainly because of platformer mode, the arrow trigger, and versus mode."
image: https://example.com/image.jpg
date: 2022-01-29
tags:
    - guide
author: moldymacaronix
---
```

{% enddetails %}





{% details "Paragraphs" %}

Paragraphs are separated with a blank line.

```md
This is a paragraph.

This is another paragraph.
```

This is a paragraph.

This is another paragraph.

{% enddetails %}





{% details "Headings" %}

Headings use a number of "hashtags," depending on the heading level.

```md
# Heading Level 1

## Heading Level 2

### Heading Level 3

#### Heading Level 4

##### Heading Level 5

###### Heading Level 6
```

# Heading Level 1

## Heading Level 2

### Heading Level 3

#### Heading Level 4

##### Heading Level 5

###### Heading Level 6

{% enddetails %}





{% details "Bold and Italics" %}

Bold and italics use asterisks.

```md
This is regular text. **This sentence is bolded.** *This sentence is in italics.*
```

This is regular text. **This sentence is bolded.** *This sentence is in italics.*

{% enddetails %}





{% details "Blockquotes" %}

Blockquotes use a closing angle bracket.

```md
Here is a quote from someone:

> It is better to die a hero than live to see yourself become the villain.
```

Here is a quote from someone:

> It is better to die a hero than live to see yourself become the villain.

{% enddetails %}





{% details "Citations" %}

To cite a source inside a blockquote, use the cite element. For longer citations, it is best to cite it directly before or after the blockquote via a paragraph.

```md
Here is a quote from someone:

> It is better to die a hero than live to see yourself become the villain.
>
> <cite>John Doe</cite>
```

Here is a quote from someone:

> It is better to die a hero than live to see yourself become the villain.
>
> <cite>John Doe</cite>

{% enddetails %}





{% details "Links" %}

Links use square brackets and regular brackets.

```md
Did you know that RobTop has a [website](http://www.robtopgames.com/)?
```

Did you know that RobTop has a [website](http://www.robtopgames.com/)?

{% enddetails %}





{% details "Images" %}

Images use square brackets, regular brackets, and an exclamation mark.

```md
Here is a picture of Bloodbath:

![Bloodbath by Riot and more](https://i.ytimg.com/vi/2vj_2ER7Z_8/maxresdefault.jpg)
```

Here is a picture of Bloodbath:

![Bloodbath by Riot and more](https://i.ytimg.com/vi/2vj_2ER7Z_8/maxresdefault.jpg)

{% enddetails %}





{% details "Lists" %}

Unordered lists use asterisks and ordered lists use numbers.

```md
Here is an unordered list:

* List item 1
* List item 2
* List item 3

Here is an ordered list:

1. Step 1
2. Step 2
3. Step 3
```

Here is an unordered list:

* List item 1
* List item 2
* List item 3

Here is an ordered list:

1. Step 1
2. Step 2
3. Step 3

{% enddetails %}





{% details "Horizontal Rule" %}

A horizontal rule is a line used to separate chunks of text when headings are not necessary. They use three hyphens.

```md
There is a horizontal rule below this paragraph.

---

There is a horizontal rule above this paragraph.
```

There is a horizontal rule below this paragraph.

---

There is a horizontal rule above this paragraph.

{% enddetails %}

{% details "Embedded YouTube Videos" %}

Wrap the embed code provided by YouTube like the following example, **excluding** the periods.

```md
{.% video %}
<iframe width="560" height="315" src="https://www.youtube.com/embed/97-3-NAA_ZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
{.% endvideo %}
```

{% video %}
<iframe width="560" height="315" src="https://www.youtube.com/embed/97-3-NAA_ZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
{% endvideo %}

{% enddetails %}





{% details "Accordions" %}

Accordions (also known as the "details" element) contain a title that when clicked, reveals more information. Please **exclude** the periods.

```md
{.% details "Is this a good title?" %}
This answer text is not visible at first.
{.% enddetails %}
```

<details>
  <summary style="margin-bottom: 0;"><span class="details-summary"><span class="details-title">Is this a good title?</span><span class="ri-add-line details-icon"></span></span></summary>
<p style="margin-top: 15px;">This answer text is not visible at first.</p>
</details>

{% enddetails %}





{% details "Alerts" %}

Alerts are useful for aside information. Simply wrap the content like follows, **excluding** the periods.

```md
{.% alert %}
This is an alert. It is displayed with more prominence than regular text.
{.% endalert %}
```

{% alert %}
This is an alert. It is displayed with more prominence than regular text.
{% endalert %}

{% enddetails %}