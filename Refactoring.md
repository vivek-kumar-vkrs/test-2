# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
Add empty string "" as default value for candidate, if not added it will have undefined value. Doing so will let reader know the type of candidate is string also ide will help with  auto completions and type errors.

Destructure the event object so that reader gets glimpse of which keys in object, following code will interact with. Also later on while using these object keys for assignment/comparison its plain simple readable.


Merged if candidate check with candidate type check, since will be setting candiate variable a defult value.


if block with no consequent else block and the statement count is one in if block, in this  case removed  curly braces {} for readibility and simplicity.


Reading constants from environment, since there are  strong chances we may need to use change TRIVIAL_PARTITION_KEY, MAX_PARTITION_KEY_LENGTH  #QUICKLY#. Now  we have to change in code and deploy application again if we keep it as const in code. Its better to read from env. 

