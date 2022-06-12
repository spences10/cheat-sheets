---
title: Alfred
createdDate: 2019-11-19
updatedDate: 2019-11-19
published: true
slug: alfred
description: Alfred is a simple, powerful, and open-source workflow for macOS.
---

<!-- Add Authors
<script>
  import Author from '$lib/author.svelte'
</script>

<Author author='Scott'/>
 -->

## Add custom search

To add a custom search to Alfred.

Open Alfred preferences and select the 'Web Search' tab.

Bottom right click the 'Add Custom Search' button.

Add the following into the form, this is for Startpage.com

Search URL:
`https://startpage.com/do/search?language=english&query={query}`

Title: `Search Startpage for '{query}'`

Keyword: `sp`

Click 'Save'

## Change the default search in Alfred

To add a your preferred search to Alfred.

Open Alfred preferences and select the 'Default Results' tab.

At the bottom of the page where 'Fallbacks' is, click the 'Setup
fallback results' button.

Click on the `+` icon and select either a predefined 'Web Search' or
select one of your 'Custom Search' options.

Drag your preferred search to the top of the list.

Click 'Save'
