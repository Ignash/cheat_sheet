const lodash_Cheat_Sheet = [
    {
        block: "Array",
        name: "_.chunk",
        description:
            "Creates an array of elements split into groups the length of size.",
        exemple:
            "_.chunk(['a', 'b', 'c', 'd'], 2)\n// => [['a', 'b'], ['c', 'd']]",
    },
    {
        block: "Array",
        name: "_.compact",
        description: " Creates an array with all falsey values removed.",
        exemple: "_.compact([0, 1, false, 2, '', 3]);\n// => [1, 2, 3]",
    },
    {
        block: "Array",
        name: "_.concat",
        description:
            "Creates a new array concatenating array with any additional arraysand/or values.",
        exemple: `const array = [1];
const other = _.concat(array, 2, [3], [[4]]); // => [1, 2, 3, [4]]`,
    },
    {
        block: "Array",
        name: "_.difference",
        description:
            "Creates an array of array values not included in the other given arraysusing SameValueZerofor equality comparisons.",
        exemple: `_.difference([2, 1], [2, 3]); // => [1]`,
    },
    // {
    //     block: "Array",
    //     name: "_.differenceBy",
    //     description:
    //         " This method is like _.difference except that it accepts iteratee whichis invoked for each element of array and values to generate the criterionby which they’re compared.",
    //     exemple: ``,
    // },
    // {
    //     block: "Array",
    //     name: "_.differenceWith",
    //     description:
    //         "This method is like _.difference except that it accepts comparatorwhich is invoked to compare elements of array to values.",
    //     exemple: ``,
    // },
    {
        block: "Array",
        name: "_.drop",
        description:
            "Creates a slice of array with n elements dropped from the beginning.",
        exemple: `_.drop([1, 2, 3], 2); // => [3]`,
    },
    // {
    //     block: "Array",
    //     name: "_.dropRight",
    //     description:
    //         "Creates a slice of array with n elements dropped from the end.",
    //     exemple: ``,
    // },
    // {
    //     block: "Array",
    //     name: "_.dropRightWhile",
    //     description:
    //         " Creates a slice of array excluding elements dropped from the end.",
    //     exemple: ``,
    // },
    // {
    //     block: "Array",
    //     name: "_.dropWhile",
    //     description:
    //         "Creates a slice of array excluding elements dropped from the beginning.",
    //     exemple: ``,
    // },
    {
        block: "Array",
        name: "_.fill",
        description:
            " Fills elements of array with value from start up to, but notincluding, end.",
        exemple: `const array = [1, 2, 3];
_.fill(array, 'a'); // => ['a', 'a', 'a']`,
    },
    {
        block: "Array",
        name: "_.findIndex",
        description:
            "This method is like _.find except that it returns the index of the firstelement predicate returns truthy for instead of the element itself.",
        exemple: ``,
    },

    {
        block: "Array",
        name: "_.flatten",
        description: " Flattens array a single level deep.",
        exemple: `_.flatten([1, [2, [3, [4]], 5]]); // =>[1, 2, [3, [4]], 5]`,
    },
    // {
    //     block: "Array",
    //     name: "_.flattenDeep",
    //     description: " Recursively flattens array.",
    //     exemple: ``,
    // },
    // {
    //     block: "Array",
    //     name: "_.flattenDepth",
    //     description: "Recursively flatten array up to depth times.",
    //     exemple: ``,
    // },
    {
        block: "Array",
        name: "_.fromPairs",
        description:
            "The inverse of _.toPairs; this method returns an object composedfrom key-value pairs.",
        exemple: `_.fromPairs([['a', 1], ['b', 2]]); // => { 'a': 1, 'b': 2 }`,
    },
    {
        block: "Array",
        name: "_.head",
        description: "Gets the first element of array.",
        exemple: ``,
    },
    {
        block: "Array",
        name: "_.indexOf",
        description:
            " Gets the index at which the first occurrence of value is found in arrayusing SameValueZerofor equality comparisons.",
        exemple: ``,
    },
    {
        block: "Array",
        name: "_.initial",
        description: "Gets all but the last element of array.",
        exemple: `_.initial([1, 2, 3]); // => [1, 2]`,
    },

    {
        block: "Array",
        name: "_.intersection",
        description:
            "Creates an array of unique values that are included in all given arraysusing SameValueZerofor equality comparisons.",
        exemple: `_.intersection([2, 1], [2, 3]); // => [2]`,
    },

    // {
    //     block: "Array",
    //     name: "_.intersectionBy",
    //     description:
    //         "This method is like _.intersection except that it accepts iterateewhich is invoked for each element of each arrays to generate the criterionby which they’re compared.",
    //     exemple: ``,
    // },

    // {
    //     block: "Array",
    //     name: "_.intersectionWith",
    //     description:
    //         "This method is like _.intersection except that it accepts comparatorwhich is invoked to compare elements of arrays.",
    //     exemple: ``,
    // },

    {
        block: "Array",
        name: "_.join",
        description:
            "Converts all elements in array into a string separated by separator.",
        exemple: `_.join(['a', 'b', 'c'], '~'); // => 'a~b~c`,
    },

    {
        block: "Array",
        name: "_.last",
        description: "Gets the last element of array.",
        exemple: ``,
    },

    {
        block: "Array",
        name: "_.nth",
        description: "Gets the element at index n of array.",
        exemple: `const array = ['a', 'b', 'c', 'd']; _.nth(array, 1); // => 'b'`,
    },

    {
        block: "Array",
        name: "_.pull",
        description:
            "Removes all given values from array usingSameValueZerofor equality comparisons.",
        exemple: `const array = ['a', 'b', 'c', 'a', 'b', 'c'];
_.pull(array, 'a', 'c'); // => ['b', 'b']`,
    },

    // {
    //     block: "Array",
    //     name: "_.pullAll",
    //     description:
    //         "This method is like _.pull except that it accepts an array of values to remove.",
    //     exemple: ``,
    // },

    // {
    //     block: "Array",
    //     name: "_.pullAllBy",
    //     description:
    //         "This method is like _.pullAll except that it accepts iteratee which isinvoked for each element of array and values to generate the criterionby which they’re compared.",
    //     exemple: ``,
    // },

    // {
    //     block: "Array",
    //     name: "_.pullAllWith",
    //     description:
    //         "This method is like _.pullAll except that it accepts comparator whichis invoked to compare elements of array to values.",
    //     exemple: ``,
    // },

    // {
    //     block: "Array",
    //     name: "_.pullAt",
    //     description:
    //         "Removes elements from array corresponding to indexes and returns anarray of removed elements.",
    //     exemple: ``,
    // },

    {
        block: "Array",
        name: "_.remove",
        description:
            "Removes all elements from array that predicate returns truthy forand returns an array of the removed elements.",
        exemple: `const array = [1, 2, 3, 4]; 
const evens = _.remove(array, (n)=> n % 2 == 0); 
// array => [1, 3] // evens => [2, 4]`,
    },

    {
        block: "Array",
        name: "_.reverse",
        description:
            "Reverses array so that the first element becomes the last, the secondelement becomes the second to last, and so on.",
        exemple: `const array = [1, 2, 3];
_.reverse(array); // => [3, 2, 1]`,
    },

    {
        block: "Array",
        name: "_.slice",
        description:
            "Creates a slice of array from start up to, but not including, end.",
        exemple: ``,
    },

    {
        block: "Array",
        name: "_.sortedIndex",
        description:
            "Uses a binary search to determine the lowest index at which valueshould be inserted into array in order to maintain its sort order.",
        exemple: `_.sortedIndex([30, 50], 40); // => 1`,
    },

    // {
    //     block: "Array",
    //     name: "_.sortedIndexBy",
    //     description:
    //         "This method is like _.sortedIndex except that it accepts iterateewhich is invoked for value and each element of array to compute theirsort ranking.",
    //     exemple: ``,
    // },

    // {
    //     block: "Array",
    //     name: "_.sortedIndexOf",
    //     description:
    //         "This method is like _.indexOf except that it performs a binarysearch on a sorted array.",
    //     exemple: ``,
    // },

    {
        block: "Array",
        name: "_.sortedLastIndex",
        description:
            "This method is like _.sortedIndex except that it returns the highestindex at which value should be inserted into array in order tomaintain its sort order.",
        exemple: `_.sortedLastIndex([4, 5, 5, 5, 6], 5); // => 4`,
    },

    // {
    //     block: "Array",
    //     name: "_.sortedLastIndexBy",
    //     description:
    //         "This method is like _.sortedLastIndex except that it accepts iterateewhich is invoked for value and each element of array to compute theirsort ranking.",
    //     exemple: ``,
    // },

    // {
    //     block: "Array",
    //     name: "_.sortedLastIndexOf",
    //     description:
    //         "This method is like _.lastIndexOf except that it performs a binarysearch on a sorted array.",
    //     exemple: ``,
    // },

    {
        block: "Array",
        name: "_.sortedUniq",
        description:
            "This method is like _.uniq except that it’s designed and optimizedfor sorted arrays.",
        exemple: `_.sortedUniq([1, 1, 2]); // => [1, 2]`,
    },

    // {
    //     block: "Array",
    //     name: "_.sortedUniqBy",
    //     description:
    //         "This method is like _.uniqBy except that it’s designed and optimizedfor sorted arrays.",
    //     exemple: ``,
    // },

    {
        block: "Array",
        name: "_.tail",
        description: "Gets all but the first element of array.",
        exemple: `_.tail([1, 2, 3]); // => [2, 3]`,
    },

    {
        block: "Array",
        name: "_.take",
        description:
            "Creates a slice of array with n elements taken from the beginning.",
        exemple: `_.take([1, 2, 3], 2); // => [1, 2]`,
    },

    // {
    //     block: "Array",
    //     name: "_.takeRight",
    //     description:
    //         "Creates a slice of array with n elements taken from the end.",
    //     exemple: ``,
    // },

    // {
    //     block: "Array",
    //     name: "_.takeRightWhile",
    //     description:
    //         "Creates a slice of array with elements taken from the end.",
    //     exemple: ``,
    // },

    // {
    //     block: "Array",
    //     name: "_.takeWhile",
    //     description:
    //         "Creates a slice of array with elements taken from the beginning.",
    //     exemple: ``,
    // },

    {
        block: "Array",
        name: "_.union",
        description:
            "Creates an array of unique values, in order, from all given arrays usingSameValueZerofor equality comparisons.",
        exemple: `_.union([2], [1, 2]); // => [2, 1]`,
    },

    // {
    //     block: "Array",
    //     name: "_.unionBy",
    //     description:
    //         "This method is like _.union except that it accepts iteratee which isinvoked for each element of each arrays to generate the criterion bywhich uniqueness is computed.",
    //     exemple: ``,
    // },

    // {
    //     block: "Array",
    //     name: "_.unionWith",
    //     description:
    //         "This method is like _.union except that it accepts comparator whichis invoked to compare elements of arrays.",
    //     exemple: ``,
    // },

    {
        block: "Array",
        name: "_.uniq",
        description:
            "Creates a duplicate-free version of an array, usingSameValueZerofor equality comparisons, in which only the first occurrence of each elementis kept.",
        exemple: `_.uniq([2, 1, 2]); // => [2, 1]`,
    },

    // {
    //     block: "Array",
    //     name: "_.uniqBy",
    //     description:
    //         "This method is like _.uniq except that it accepts iteratee which isinvoked for each element in array to generate the criterion by whichuniqueness is computed.",
    //     exemple: ``,
    // },

    // {
    //     block: "Array",
    //     name: "_.uniqWith",
    //     description:
    //         "This method is like _.uniq except that it accepts comparator whichis invoked to compare elements of array.",
    //     exemple: ``,
    // },

    {
        block: "Array",
        name: "_.unzip",
        description:
            "This method is like _.zip except that it accepts an array of groupedelements and creates an array regrouping the elements to their pre-zipconfiguration.",
        exemple: `const zipped = _.zip(['a', 'b'], [1, 2], [true, false]); 
        // => [['a', 1, true], ['b', 2, false]]
 _.unzip(zipped); // => [['a', 'b'], [1, 2], [true, false]]`,
    },

    // {
    //     block: "Array",
    //     name: "_.unzipWith",
    //     description:
    //         "This method is like _.unzip except that it accepts iteratee to specifyhow regrouped values should be combined.",
    //     exemple: ``,
    // },

    {
        block: "Array",
        name: "_.without",
        description:
            "Creates an array excluding all given values usingSameValueZerofor equality comparisons.",
        exemple: `.without([2, 1, 2, 3], 1, 2); // => [3]`,
    },

    {
        block: "Array",
        name: "_.xor",
        description:
            "Creates an array of unique values that is thesymmetric differenceof the given arrays.",
        exemple: `_.xor([2, 1], [2, 3]); // => [1, 3]`,
    },

    // {
    //     block: "Array",
    //     name: "_.xorBy",
    //     description:
    //         "This method is like _.xor except that it accepts iteratee which isinvoked for each element of each arrays to generate the criterion bywhich by which they’re compared.",
    //     exemple: ``,
    // },

    // {
    //     block: "Array",
    //     name: "_.xorWith",
    //     description:
    //         "This method is like _.xor except that it accepts comparator which isinvoked to compare elements of arrays.",
    //     exemple: ``,
    // },

    {
        block: "Array",
        name: "_.zip",
        description:
            "Creates an array of grouped elements, the first of which contains thefirst elements of the given arrays, the second of which contains thesecond elements of the given arrays, and so on.",
        exemple: `_.zip(['a', 'b'], [1, 2], [true, false]); 
// => [['a', 1, true], ['b', 2, false]]`,
    },

    // {
    //     block: "Array",
    //     name: "_.zipObject",
    //     description:
    //         "This method is like _.fromPairs except that it accepts two arrays,one of property identifiers and one of corresponding values.",
    //     exemple: `_.zipObject(['a', 'b'], [1, 2]); // => { 'a': 1, 'b': 2 }`,
    // },

    // {
    //     block: "Array",
    //     name: "_.zipObjectDeep",
    //     description:
    //         "This method is like _.zipObject except that it supports property paths.",
    //     exemple: ``,
    // },

    // {
    //     block: "Array",
    //     name: "_.zipWith",
    //     description:
    //         "This method is like _.zip except that it accepts iteratee to specifyhow grouped values should be combined.",
    //     exemple: ``,
    // },
    {
        block: "Collection",
        name: "_.countBy",
        description:
            "Creates an object composed of keys generated from the results of runningeach element of collection thru iteratee.",
        exemple: `_.countBy([6.1, 4.2, 6.3], Math.floor); // => { '4': 1, '6': 2 }`,
    },

    // {
    //     block: "Collection",
    //     name: "_.every",
    //     description:
    //         "Checks if predicate returns truthy for all elements of collection.",
    //     exemple: ``,
    // },

    {
        block: "Collection",
        name: "_.filter",
        description:
            "Iterates over elements of collection, returning an array of all elementspredicate returns truthy for.",
        exemple: ``,
    },

    {
        block: "Collection",
        name: "_.find",
        description:
            "Iterates over elements of collection, returning the first element predicate returns truthy for.",
        exemple: ``,
    },

    // {
    //     block: "Collection",
    //     name: "_.findLast",
    //     description:
    //         "This method is like _.find except that it iterates over elements ofcollection from right to left.",
    //     exemple: ``,
    // },

    {
        block: "Collection",
        name: "_.flatMap",
        description:
            "Creates a flattened array of values by running each element in collectionthru iteratee and flattening the mapped results.",
        exemple: `function duplicate(n) { return [n, n];}
_.flatMap([1, 2], duplicate); // => [1, 1, 2, 2]`,
    },

    // {
    //     block: "Collection",
    //     name: "_.flatMapDeep",
    //     description:
    //         "This method is like _.flatMap except that it recursively flattens themapped results.",
    //     exemple: ``,
    // },

    // {
    //     block: "Collection",
    //     name: "_.flatMapDepth",
    //     description:
    //         "This method is like _.flatMap except that it recursively flattens themapped results up to depth times.",
    //     exemple: ``,
    // },

    // {
    //     block: "Collection",
    //     name: "_.forEach",
    //     description:
    //         "Iterates over elements of collection and invokes iteratee for each element.",
    //     exemple: ``,
    // },

    // {
    //     block: "Collection",
    //     name: "_.forEachRight",
    //     description:
    //         "This method is like _.forEach except that it iterates over elements ofcollection from right to left.",
    //     exemple: ``,
    // },

    {
        block: "Collection",
        name: "_.groupBy",
        description:
            "Creates an object composed of keys generated from the results of runningeach element of collection thru iteratee.",
        exemple: `_.groupBy([6.1, 4.2, 6.3], Math.floor); 
// => { '4': [4.2], '6': [6.1, 6.3] }`,
    },

    {
        block: "Collection",
        name: "_.includes",
        description: "Checks if value is in collection.",
        exemple: ``,
    },

    {
        block: "Collection",
        name: "_.invokeMap",
        description:
            "Invokes the method at path of each element in collection, returningan array of the results of each invoked method.",
        exemple: `_.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort'); 
// => [[1, 5, 7], [1, 2, 3]]`,
    },

    {
        block: "Collection",
        name: "_.keyBy",
        description:
            "Creates an object composed of keys generated from the results of runningeach element of collection thru iteratee.",
        exemple: ``,
    },

    {
        block: "Collection",
        name: "_.map",
        description:
            "Creates an array of values by running each element in collection thruiteratee.",
        exemple: `_.map({ 'a': 4, 'b': 8 }, square); // => [16, 64]`,
    },

    {
        block: "Collection",
        name: "_.orderBy",
        description:
            "This method is like _.sortBy except that it allows specifying the sortorders of the iteratees to sort by.",
        exemple: ``,
    },

    {
        block: "Collection",
        name: "_.partition",
        description:
            "Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for, the second of whichcontains elements predicate returns falsey for.",
        exemple: `const users = [{ 'user': 'c',  'age': 36, 'active': false },
            { 'user': 'a',    'age': 40, 'active': true },
            { 'user': 'b', 'age': 1,  'active': false }];
_.partition(users, { 'age': 1, 'active': false }); 
// => objects for [['b'], ['c', 'a']]`,
    },

    // {
    //     block: "Collection",
    //     name: "_.reduce",
    //     description:
    //         "Reduces collection to a value which is the accumulated result of runningeach element in collection thru iteratee, where each successiveinvocation is supplied the return value of the previous.",
    //     exemple: ``,
    // },

    // {
    //     block: "Collection",
    //     name: "_.reduceRight",
    //     description:
    //         "This method is like _.reduce except that it iterates over elements ofcollection from right to left.",
    //     exemple: ``,
    // },

    {
        block: "Collection",
        name: "_.reject",
        description:
            "The opposite of _.filter; this method returns the elements of collectionthat predicate does not return truthy for.",
        exemple: ``,
    },

    {
        block: "Collection",
        name: "_.sample",
        description: "Gets a random element from collection.",
        exemple: ``,
    },

    {
        block: "Collection",
        name: "_.sampleSize",
        description:
            "Gets n random elements at unique keys from collection up to thesize of collection.",
        exemple: ``,
    },

    {
        block: "Collection",
        name: "_.shuffle",
        description:
            "Creates an array of shuffled values, using a version of theFisher-Yates shuffle.",
        exemple: `_.shuffle([1, 2, 3, 4]); // => [4, 1, 3, 2]`,
    },

    {
        block: "Collection",
        name: "_.size",
        description:
            "Gets the size of collection by returning its length for array-likevalues or the number of own enumerable string keyed properties for objects.",
        exemple: `_.size({ 'a': 1, 'b': 2 }); // => 2`,
    },

    {
        block: "Collection",
        name: "_.some",
        description:
            "Checks if predicate returns truthy for any element of collection.",
        exemple: ``,
    },

    {
        block: "Collection",
        name: "_.sortBy",
        description:
            "Creates an array of elements, sorted in ascending order by the results ofrunning each element in a collection thru each iteratee.",
        exemple: `const users = [{ 'user': 'a',   'age': 48 },{ 'user': 'b', 'age': 36 },
            { 'user': 'a',   'age': 40 },{ 'user': 'b', 'age': 34 }];
_.sortBy(users, [(o) => o.user ]); 
// => objects for [['b', 36], ['b', 34], ['a', 48], ['a', 40]]`,
    },
    {
        block: "Function",
        name: "_.after(n, func)",
        description:
            "The opposite of _.before; this method creates a function that invokesfunc once it’s called n or more times.",
        exemple: ``,
    },
    {
        block: "Function",
        name: "_.ary(func, [n=func.length])",
        description:
            "Creates a function that invokes func, with up to n arguments,ignoring any additional arguments.",
        exemple: `_.map(['6', '8', '10'], _.ary(parseInt, 1));
        // => [6, 8, 10]`,
    },
    {
        block: "Function",
        name: "_.before(n, func)",
        description:
            "Creates a function that invokes func, with the this binding and argumentsof the created function, while it’s called less than n times.",
        exemple: ``,
    },
    {
        block: "Function",
        name: "_.bind(func, thisArg, [partials])",
        description:
            "Creates a function that invokes func with the this binding of thisArgand partials prepended to the arguments it receives.",
        exemple: ``,
    },
    {
        block: "Function",
        name: "_.bindKey(object, key, [partials])",
        description:
            "Creates a function that invokes the method at object[key] with partialsprepended to the arguments it receives.",
        exemple: ``,
    },
    {
        block: "Function",
        name: "_.curry(func, [arity=func.length])",
        description:
            "Creates a function that accepts arguments of func and either invokesfunc returning its result, if at least arity number of arguments havebeen provided, or returns a function that accepts the remaining funcarguments, and so on.",
        exemple: ``,
    },
    // {
    //     block: "Function",
    //     name: "_.curryRight",
    //     description:
    //         "This method is like _.curry except that arguments are applied to funcin the manner of _.",
    //     exemple: ``,
    // },
    {
        block: "Function",
        name: "_.debounce(func, [wait=0], [options={}])",
        description:
            "Creates a debounced function that delays invoking func until after waitmilliseconds have elapsed since the last time the debounced function wasinvoked.",
        exemple: ``,
    },
    {
        block: "Function",
        name: "_.defer(func, [args])",
        description:
            "Defers invoking the func until the current call stack has cleared.",
        exemple: ``,
    },
    {
        block: "Function",
        name: "_.delay(func, wait, [args])",
        description: "Invokes func after wait milliseconds.",
        exemple: ``,
    },
    {
        block: "Function",
        name: "_.flip(func)",
        description:
            "Creates a function that invokes func with arguments reversed.",
        exemple: ``,
    },
    {
        block: "Function",
        name: "_.memoize(func, [resolver])",
        description: "Creates a function that memoizes the result of func.",
        exemple: ``,
    },
    {
        block: "Function",
        name: "_.negate(predicate)",
        description:
            "Creates a function that negates the result of the predicate func.",
        exemple: ``,
    },
    {
        block: "Function",
        name: "_.once(func)",
        description:
            "Creates a function that is restricted to invoking func once.",
        exemple: ``,
    },
    {
        block: "Function",
        name: "_.overArgs(func, [transforms=[_.identity]])",
        description:
            "Creates a function that invokes func with its arguments transformed.",
        exemple: ``,
    },
    {
        block: "Function",
        name: "_.partial(func, [partials])",
        description:
            "Creates a function that invokes func with partials prepended to thearguments it receives.",
        exemple: ``,
    },
    // {
    //     block: "Function",
    //     name: "_.partialRight",
    //     description:
    //         "This method is like _.partial except that partially applied argumentsare appended to the arguments it receives.",
    //     exemple: ``,
    // },
    {
        block: "Function",
        name: "_.rearg(func, indexes)",
        description:
            "Creates a function that invokes func with arguments arranged accordingto the specified indexes where the argument value at the first index isprovided as the first argument, the argument value at the second index isprovided as the second argument, and so on.",
        exemple: ``,
    },
    {
        block: "Function",
        name: "_.rest(func, [start=func.length-1])",
        description:
            "Creates a function that invokes func with the this binding of thecreated function and arguments from start and beyond provided asan array.",
        exemple: ``,
    },
    {
        block: "Function",
        name: "_.spread",
        description:
            "Creates a function that invokes func with the this binding of thecreate function and an array of arguments much likeFunction#apply.",
        exemple: ``,
    },
    {
        block: "Function",
        name: "_.throttle(func, [wait=0], [options={}])",
        description:
            "Creates a throttled function that only invokes func at most once perevery wait milliseconds.",
        exemple: ``,
    },
    {
        block: "Function",
        name: "_.unary",
        description:
            "Creates a function that accepts up to one argument, ignoring anyadditional arguments.",
        exemple: ``,
    },
    {
        block: "Function",
        name: "_.wrap(value, [wrapper=identity])",
        description:
            "Creates a function that provides value to wrapper as its firstargument.",
        exemple: ``,
    },
    {
        block: "Lang",
        name: "_.castArray(value)",
        description: "Casts value as an array if it’s not one.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.clone(value)",
        description: "Creates a shallow clone of value.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.conformsTo(object, source)",
        description:
            "Checks if object conforms to source by invoking the predicateproperties of source with the corresponding property values of object.",
        exemple: `const object = { 'a': 1, 'b': 2 };
_.conformsTo(object, { 'b': function(n) { return n > 1; } });`,
    },

    {
        block: "Lang",
        name: "_.eq(value, other)",
        description:
            "Performs aSameValueZerocomparison between two values to determine if they are equivalent.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.gt(value, other)",
        description: "Checks if value is greater than other.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.gte(value, other)",
        description: "Checks if value is greater than or equal to other.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isArguments",
        description: "Checks if value is likely an arguments object.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isArray",
        description: "Checks if value is classified as an Array object.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isArrayBuffer",
        description: "Checks if value is classified as an ArrayBuffer object.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isArrayLike",
        description: "Checks if value is array-like.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isArrayLikeObject",
        description:
            "This method is like _.isArrayLike except that it also checks if valueis an object.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isBoolean",
        description:
            "Checks if value is classified as a boolean primitive or object.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isBuffer",
        description: "Checks if value is a buffer.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isDate",
        description: "Checks if value is classified as a Date object.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isElement",
        description: "Checks if value is likely a DOM element.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isEmpty",
        description:
            "Checks if value is an empty object, collection, map, or set.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isEqual",
        description:
            "Performs a deep comparison between two values to determine if they areequivalent.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isEqualWith",
        description:
            "This method is like _.isEqual except that it accepts customizer whichis invoked to compare values.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isError",
        description:
            "Checks if value is an Error, EvalError, RangeError, ReferenceError,SyntaxError, TypeError, or URIError object.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isFinite",
        description: "Checks if value is a finite primitive number.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isFunction",
        description: "Checks if value is classified as a Function object.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isInteger",
        description: "Checks if value is an integer.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isLength",
        description: "Checks if value is a valid array-like length.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isMap",
        description: "Checks if value is classified as a Map object.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isMatch",
        description:
            "Performs a partial deep comparison between object and source todetermine if object contains equivalent property values.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isMatchWith",
        description:
            "This method is like _.isMatch except that it accepts customizer whichis invoked to compare values.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isNaN",
        description: "Checks if value is NaN.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isNative",
        description: "Checks if value is a pristine native function.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isNil",
        description: "Checks if value is null or undefined.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isNull",
        description: "Checks if value is null.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isNumber",
        description:
            "Checks if value is classified as a Number primitive or object.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isObject",
        description: "Checks if value is thelanguage typeof Object.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isObjectLike",
        description: "Checks if value is object-like.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isPlainObject",
        description:
            "Checks if value is a plain object, that is, an object created by theObject constructor or one with a [[Prototype]] of null.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isRegExp",
        description: "Checks if value is classified as a RegExp object.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isSafeInteger",
        description: "Checks if value is a safe integer.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isSet",
        description: "Checks if value is classified as a Set object.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isString",
        description:
            "Checks if value is classified as a String primitive or object.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isSymbol",
        description:
            "Checks if value is classified as a Symbol primitive or object.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isTypedArray",
        description: "Checks if value is classified as a typed array.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isUndefined",
        description: "Checks if value is undefined.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isWeakMap",
        description: "Checks if value is classified as a WeakMap object.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.isWeakSet",
        description: "Checks if value is classified as a WeakSet object.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.lt(value, other)",
        description: "Checks if value is less than other.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.lte(value, other)",
        description: "Checks if value is less than or equal to other.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.toArray",
        description: "Converts value to an array.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.toFinite",
        description: "Converts value to a finite number.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.toInteger",
        description: "Converts value to an integer.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.toLength",
        description:
            "Converts value to an integer suitable for use as the length of anarray-like object.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.toNumber",
        description: "Converts value to a number.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.toPlainObject",
        description:
            "Converts value to a plain object flattening inherited enumerable stringkeyed properties of value to own properties of the plain object.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.toSafeInteger",
        description: "Converts value to a safe integer.",
        exemple: ``,
    },

    {
        block: "Lang",
        name: "_.toString",
        description: "Converts value to a string.",
        exemple: ``,
    },

    {
        block: "Math",
        name: "_.add(augend, addend)",
        description: "Adds two numbers.",
        exemple: ``,
    },

    {
        block: "Math",
        name: "_.ceil(number, [precision=0])",
        description: "Computes number rounded up to precision.",
        exemple: `_.ceil(6.004, 2); // => 6.01`,
    },

    {
        block: "Math",
        name: "_.divide(dividend, divisor)",
        description: "Divide two numbers.",
        exemple: ``,
    },

    {
        block: "Math",
        name: "_.floor(number, [precision=0])",
        description: "Computes number rounded down to precision.",
        exemple: ``,
    },

    {
        block: "Math",
        name: "_.max(array)",
        description: "Computes the maximum value of array.",
        exemple: ``,
    },

    {
        block: "Math",
        name: "_.mean(array)",
        description: "Computes the mean of the values in array.",
        exemple: ``,
    },

    {
        block: "Math",
        name: "_.min(array)",
        description: "Computes the minimum value of array.",
        exemple: ``,
    },

    {
        block: "Math",
        name: "_.multiply(multiplier, multiplicand)",
        description: "Multiply two numbers.",
        exemple: ``,
    },

    {
        block: "Math",
        name: "_.round(number, [precision=0])",
        description: "Computes number rounded to precision.",
        exemple: ``,
    },

    {
        block: "Math",
        name: "_.subtract(minuend, subtrahend)",
        description: "Subtract two numbers.",
        exemple: ``,
    },

    {
        block: "Math",
        name: "_.sum(array)",
        description: "Computes the sum of the values in array.",
        exemple: ``,
    },

    {
        block: "Number",
        name: "_.clamp(number, [lower], upper)",
        description:
            "Clamps number within the inclusive lower and upper bounds.",
        exemple: `_.clamp(-10, -5, 5); // => -5`,
    },

    {
        block: "Number",
        name: "_.inRange(number, [start=0], end)",
        description:
            "Checks if n is between start and up to, but not including, end.",
        exemple: `_.inRange(3, 2, 4); // => true`,
    },

    {
        block: "Number",
        name: "_.random([lower=0], [upper=1], [floating])",
        description:
            "Produces a random number between the inclusive lower and upper bounds.",
        exemple: ``,
    },

    {
        block: "Object",
        name: "_.assign(object, [sources])",
        description:
            "Assigns own enumerable string keyed properties of source objects to thedestination object.",
        exemple: ``,
    },

    // {
    //     block: "Object",
    //     name: "_.assignIn(object, [sources])",
    //     description:
    //         "This method is like _.assign except that it iterates over own andinherited source properties.",
    //     exemple: ``,
    // },

    {
        block: "Object",
        name: "_.at(object, [paths])",
        description:
            "Creates an array of values corresponding to paths of object.",
        exemple: `const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
_.at(object, ['a[0].b.c', 'a[1]']); // => [3, 4]`,
    },

    {
        block: "Object",
        name: "_.create(prototype, [properties])",
        description:
            "Creates an object that inherits from the prototype object.",
        exemple: ``,
    },

    {
        block: "Object",
        name: "_.defaults(object, [sources])",
        description:
            "Assigns own and inherited enumerable string keyed properties of source objects to the destination object for all destination properties that resolve to undefined.",
        exemple: `_.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 }); 
// => { 'a': 1, 'b': 2 }`,
    },


    {
        block: "Object",
        name: "_.findKey(object, [predicate=_.identity])",
        description:
            "This method is like _.find except that it returns the key of the firstelement predicate returns truthy for instead of the element itself.",
        exemple: ``,
    },

    {
        block: "Object",
        name: "_.forIn(object, [iteratee=_.identity])",
        description:
            "Iterates over own and inherited enumerable string keyed properties of anobject and invokes iteratee for each property.",
        exemple: ``,
    },

    {
        block: "Object",
        name: "_.forOwn(object, [iteratee=_.identity])",
        description:
            "Iterates over own enumerable string keyed properties of an object andinvokes iteratee for each property.",
        exemple: ``,
    },

    {
        block: "Object",
        name: "_.functions(object)",
        description:
            "Creates an array of function property names from own enumerable propertiesof object.",
        exemple: ``,
    },

    {
        block: "Object",
        name: "_.get(object, path, [defaultValue])",
        description: "Gets the value at path of object.",
        exemple: ``,
    },

    {
        block: "Object",
        name: "_.has(object, path)",
        description: "Checks if path is a direct property of object.",
        exemple: ``,
    },

    {
        block: "Object",
        name: "_.invert(object)",
        description:
            "Creates an object composed of the inverted keys and values of object.",
        exemple: ``,
    },

    {
        block: "Object",
        name: "_.invoke(object, path, [args])",
        description: "Invokes the method at path of object.",
        exemple: ``,
    },

    {
        block: "Object",
        name: "_.keys(object)",
        description:
            "Creates an array of the own enumerable property names of object.",
        exemple: ``,
    },

    {
        block: "Object",
        name: "_.mapKeys(object, [iteratee=_.identity])",
        description:
            "The opposite of _.mapValues; this method creates an object with thesame values as object and keys generated by running each own enumerablestring keyed property of object thru iteratee.",
        exemple: ``,
    },

    {
        block: "Object",
        name: "_.mapValues(object, [iteratee=_.identity])",
        description:
            "Creates an object with the same keys as object and values generatedby running each own enumerable string keyed property of object thruiteratee.",
        exemple: ``,
    },

    {
        block: "Object",
        name: "_.merge(object, [sources])",
        description:
            "This method is like _.assign except that it recursively merges own andinherited enumerable string keyed properties of source objects into thedestination object.",
        exemple: ``,
    },

    {
        block: "Object",
        name: "_.omit(object, [paths])",
        description:
            "The opposite of _.pick; this method creates an object composed of theown and inherited enumerable property paths of object that are not omitted.",
        exemple: ``,
    },

    {
        block: "Object",
        name: "_.pick(object, [paths])",
        description:
            "Creates an object composed of the picked object properties.",
        exemple: `const object = { 'a': 1, 'b': '2', 'c': 3 };
_.pick(object, ['a', 'c']); // => { 'a': 1, 'c': 3 }`,
    },

    {
        block: "Object",
        name: "_.result(object, path, [defaultValue])",
        description:
            "This method is like _.get except that if the resolved value is afunction it’s invoked with the this binding of its parent object andits result is returned.",
        exemple: ``,
    },

    {
        block: "Object",
        name: "_.set(object, path, value)",
        description: "Sets the value at path of object.",
        exemple: ``,
    },

    {
        block: "Object",
        name: "_.toPairs(object)",
        description:
            "Creates an array of own enumerable string keyed-value pairs for objectwhich can be consumed by _.fromPairs.",
        exemple: ``,
    },

    {
        block: "Object",
        name: "_.transform(object, [iteratee=_.identity], [accumulator])",
        description:
            "An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of running each of its owne numerable string keyed properties thru iteratee, with each invocationpotentially mutating the accumulator object.",
        exemple: ``,
    },

    {
        block: "Object",
        name: "_.unset(object, path)",
        description: "Removes the property at path of object.",
        exemple: ``,
    },

    {
        block: "Object",
        name: "_.update(object, path, updater)",
        description:
            "This method is like _.set except that accepts updater to produce thevalue to set.",
        exemple: `_.update(object, 'a[0].b.c', function(n) { return n * n; });`,
    },

    {
        block: "Object",
        name: "_.values(object)",
        description:
            "Creates an array of the own enumerable string keyed property values of object.",
        exemple: ``,
    },

    {
        block: "String",
        name: "_.camelCase",
        description: "Converts string to camel case.",
        exemple: ``,
    },

    {
        block: "String",
        name: "_.capitalize",
        description:
            "Converts the first character of string to upper case and the remainingto lower case.",
        exemple: ``,
    },

    {
        block: "String",
        name: "_.endsWith([string=''], [target], [position=string.length])",
        description: "Checks if string ends with the given target string.",
        exemple: ``,
    },

    {
        block: "String",
        name: "_.kebabCase",
        description: "Converts string tokebab case.",
        exemple: `_.kebabCase('Foo Bar'); // => 'foo-bar'`,
    },

    {
        block: "String",
        name: "_.lowerCase",
        description:
            "Converts string, as space separated words, to lower case.",
        exemple: ``,
    },

    {
        block: "String",
        name: "_.lowerFirst",
        description: "Converts the first character of string to lower case.",
        exemple: ``,
    },

    {
        block: "String",
        name: "_.pad([string=''], [length=0], [chars=' '])",
        description:
            "Pads string on the left and right sides if it’s shorter than length.",
        exemple: ``,
    },

    {
        block: "String",
        name: "_.parseInt(string, [radix=10])",
        description: "Converts string to an integer of the specified radix.",
        exemple: ``,
    },

    {
        block: "String",
        name: "_.repeat([string=''], [n=1])",
        description: "Repeats the given string n times.",
        exemple: ``,
    },

    {
        block: "String",
        name: "_.replace([string=''], pattern, replacement)",
        description: "Replaces matches for pattern in string with replacement.",
        exemple: ``,
    },

    {
        block: "String",
        name: "_.snakeCase",
        description: "Converts string tosnake case.",
        exemple: ``,
    },

    {
        block: "String",
        name: "_.split([string=''], separator, [limit])",
        description: "Splits string by separator.",
        exemple: ``,
    },

    {
        block: "String",
        name: "_.startCase",
        description: "Converts string tostart case.",
        exemple: `_.startCase('__FOO_BAR__'); // => 'FOO BAR'`,
    },

    {
        block: "String",
        name: "_.startsWith",
        description: "Checks if string starts with the given target string.",
        exemple: ``,
    },

    {
        block: "String",
        name: "_.template([string=''], [options={}])",
        description:
            "Creates a compiled template function that can interpolate data propertiesin “interpolate” delimiters, HTML-escape interpolated data properties in”escape” delimiters, and execute JavaScript in “evaluate” delimiters.",
        exemple: `const compiled = _.template('hello <%= user %>!');
compiled({ 'user': 'fred' }); // => 'hello fred!'`,
    },

    {
        block: "String",
        name: "_.trim([string=''], [chars=whitespace])",
        description:
            "Removes leading and trailing whitespace or specified characters from string.",
        exemple: ``,
    },

        {
        block: "String",
        name: "_.truncate([string=''], [options={}])",
        description:
            "Truncates string if it’s longer than the given maximum string length.",
        exemple: ``,
    },

    {
        block: "String",
        name: "_.upperCase",
        description:
            "Converts string, as space separated words, to upper case.",
        exemple: `_.upperCase('--foo-bar'); // => 'FOO BAR'`,
    },

    {
        block: "String",
        name: "_.upperFirst",
        description: "Converts the first character of string to upper case.",
        exemple: ``,
    },

    {
        block: "String",
        name: "_.words([string=''], [pattern])",
        description: "Splits string into an array of its words.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.attempt(func, [args])",
        description:
            "Attempts to invoke func, returning either the result or the caught error object.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.bindAll(object, methodNames)",
        description:
            "Binds methods of an object to the object itself, overwriting the existingmethod.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.cond(pairs)",
        description:
            "Creates a function that iterates over pairs and invokes the corresponding function of the first predicate to return truthy.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.conforms(source)",
        description:
            "Creates a function that invokes the predicate properties of source with the corresponding property values of a given object, returning true if all predicates return truthy, else false.",
        exemple: `const objects = [{ 'a': 2, 'b': 1 }, { 'a': 1, 'b': 2 }];
_.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } })); 
// => [{ 'a': 1, 'b': 2 }]`,
    },

    {
        block: "Util",
        name: "_.constant",
        description: "Creates a function that returns value.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.defaultTo(value, defaultValue)",
        description:
            "Checks value to determine whether a default value should be returned inits place.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.flow([funcs])",
        description:
            "Creates a function that returns the result of invoking the given functions with the this binding of the created function, where each successiveinvocation is supplied the return value of the previous.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.identity",
        description: "This method returns the first argument it receives.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.iteratee([func=_.identity])",
        description:
            "Creates a function that invokes func with the arguments of the createdfunction.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.matches(source)",
        description:
            "Creates a function that performs a partial deep comparison between a givenobject and source, returning true if the given object has equivalentproperty values, else false.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.method(path, [args])",
        description:
            "Creates a function that invokes the method at path of a given object.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.mixin([object=lodash], source, [options={}])",
        description:
            "Adds all own enumerable string keyed function properties of a source object to the destination object.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.noop",
        description: "This method returns undefined.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.over([iteratees=[_.identity]])",
        description:
            "Creates a function that invokes iteratees with the arguments it receivesand returns their results.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.property(path)",
        description:
            "Creates a function that returns the value at path of a given object.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.range([start=0], end, [step=1])",
        description:
            "Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.stubArray",
        description: "This method returns a new empty array.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.stubFalse",
        description: "This method returns false.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.stubObject",
        description: "This method returns a new empty object.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.stubString",
        description: "This method returns an empty string.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.stubTrue",
        description: "This method returns true.",
        exemple: ``,
    },

    {
        block: "Util",
        name: "_.times(n, [iteratee=_.identity])",
        description:
            "Invokes the iteratee n times, returning an array of the results ofeach invocation.",
        exemple: `_.times(3, String); // => ['0', '1', '2']`,
    },

    {
        block: "Util",
        name: "_.toPath(value)",
        description: "Converts value to a property path array.",
        exemple: `_.toPath('a[0].b.c'); // => ['a', '0', 'b', 'c']`,
    },

    {
        block: "Util",
        name: "_.uniqueId([prefix=''])",
        description: "Generates a unique ID.",
        exemple: ``,
    },
];


const container = $("<div class='block'></div>"); // container.append($("<h3>").text(block));
const table = $("<div class='table'></div>");

lodash_Cheat_Sheet.forEach((item, index, arr) => {
    const row = $("<div class='prop'>");
    const nameCell = $("<div class='name'>").append(
        $("<code>").text(item.name)
    );
    const descriptionCell = $("<div class='description'>").text(
        item.description
    );
    const exempleRow = $("<div class='exemple'>").append(
        $("<pre>").text(item.exemple)
    );

    if (index === 0 || item.block !== arr[index - 1].block) {
        table.append($("<h3 class='caption'></h3>").text(item.block));
    }

    row.append(nameCell).append(descriptionCell);
    table.append(row);
    if (item.exemple) row.append(exempleRow);
    if (index === arr.length - 1) {
        container.append(table);
        $("body").append(container);
    }
});

// {
//     block: "Array",
//     name: "",
//     description: "",
//     exemple: ``
// },
