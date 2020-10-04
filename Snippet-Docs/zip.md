## Zip Function
Takes a set of data and tags as parameters and zips them together.
Length of data.item and length of tags should match.
eg:
```
const data = [["jack", 20], ["john", 21], ["james", 22]]
const tags = ["name", "age"]

zip(data, tags)
/*result:
[
  {name: "jack", age: 20},
  {name: "john", age: 21},
  {name: "james", age: 22}
]
*/
```
