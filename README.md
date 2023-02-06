# GraphQL Refs RFC

This repository aims to solve the issue of circular dependencies in GraphQL types by introducing the ability to use string references to other types. The solution is inspired by Mongoose's ref attribute.

## Problem

In GraphQL, when you need to have types that depend on each other, you fall into circular dependencies between the type files, which can lead to errors and slow TypeScript. For example:

```ts
import { UserType } from '../user/UserType';

export const CompanyType = new GraphQLObject({
  name: 'Company',
  fields: () => ({
    users: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UserType))),
      resolve: () => /* ... */,
    }
  }),
})
```

```ts
import { CompanyType } from '../user/CompanyType';

export const UserType = new GraphQLObject({
  name: 'User',
  fields: () => ({
    company: {
      type: new GraphQLNonNull(CompanyType),
      resolve: () => /* ... */,
    }
  }),
})
```

## Solution

To resolve this issue, we introduce the ability to reference types by their name, instead of importing them directly. Here's an example of how this would look:

```ts
export const CompanyType = new GraphQLObject({
  name: 'Company',
  fields: () => ({
    users: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull('User'))),
      resolve: () => /* ... */,
    }
  }),
})
```

```ts
export const UserType = new GraphQLObject({
  name: 'User',
  fields: () => ({
    company: {
      type: new GraphQLNonNull('Company'),
      resolve: () => /* ... */,
    }
  }),
})
```

To use these types in a schema, you'll need to add them to the schema manually:

```ts
import { CompanyType } from './company/CompanyType';
import { QueryType } from './query/QueryType';
import { UserType } from './user/UserType';

export const schema = new GraphQLSchema({
  query: QueryType,
  types: [CompanyType, UserType],
});
```

# How to run

1. Install dependencies:

```sh
yarn
```

2. Start the GraphQL server:

```sh
yarn dev
```

3. Open GraphiQL in your browser at http://localhost:5001/graphql
