# @bytesoftio/local-list

## Installation

`yarn add @bytesoftio/local-list` or `npm install @bytesoftio/local-list`

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Description](#description)
- [createLocalList](#createlocallist)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Description

This library is built on top of the [@bytesoftio/list](https://github.com/bytesoftio/list) package and provides an integration with `localStorage`. For a more in depth guide please check out the docs of the other package.

## createLocalList

Since this package is built on top of [@bytesoftio/list](https://github.com/bytesoftio/list), values produced by `createLocalList` from this package and `createList` from the other package are interchangeable. A value produced by this package can be consumed using the `useList` hook of the [@bytesoftio/use-list](https://github.com/bytesoftio/use-list) package.

```tsx
import React from "react"
import {createLocalList} from "@bytesoftio/local-list"
import {useList} from "@bytesoftio/use-list"

const items = createLocalList(["apples", "oranges"])

const Component = () => {
  // use globally shared value, cached in localStorage
  const list = useList(items)
  // use local value, created through an initializer function, cached in localStorage
  const tags = useList(() => createLocalList(["fruit"]))

  const addTag = () => tags.add("vegies")
  
  return (
    <div>
      <span>Fruits: {list.get().join(",")}</span>
      <button onClick={addTag}>{tags.join(",")}</button>
    </div>
  )
}
```
