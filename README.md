# DataTables for gren

Create sortable, filterable, paginated tables in gren for data of any shape.

## Examples

Work in progress... it is planned to link to a storybook style display of different
configurations and features.

## Roadmap

* [ ] Test coverage and ensuring proper functioning
* [ ] Pagination support
* [ ] Global filtering support
* [ ] Replicating examples from [Datatables.net](https://datatables.net/examples/index)

## Design principles

This reusable view library manages some internal state, while refraining from maintaining a copy of the displayed data. There is always a single source of truth.
Keep in mind to

  - always put the `DataTable.State` record of internal state literals in your model.
  - never put the `DataTable.Config` record of view functions in your model.

See https://github.com/evancz/elm-sortable-table for the origins of these usage rules.

This fork furthermore aims to also follow the API design principles promoted by [elm.land](https://elm.land/concepts/components.html)

### The Elm Architecture

It may not be obvious at first glance, but this library follows The Elm Architecture:

  - `Model` &mdash; There is a model named `DataTable.State`.

  - `init` &mdash; You initialize the model with `DataTable.new`.

  - `view` &mdash; You turn the current state into HTML with `DataTable.view*` function(s).

  - `update` &mdash; This is a little hidden, but it is there. When you create a `DataTable.Config`, you provide a function `DataTable.State -> msg` so that the rendered table has a chance to update the table state, even when a part of the view is customized.

### Simple by default, Advanced if needed

This library aims to have a very smooth learning curve. As you read the docs, you start with the simple functions. Predefined columns, minimal features and very little customization.

The trick is that all these simple functions are defined in terms of crazier ones that allow for more customization. As you **NEED** that complexity, you can read on and gradually use the parts that are relevant to you. This means you never find yourself in a situation where you have to learn a bunch of stuff that does not actually matter to you. At the same time, the advanced customization endpoints are there when you need them.
