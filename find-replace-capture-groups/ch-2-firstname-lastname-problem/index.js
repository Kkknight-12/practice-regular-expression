const str = ['john Wallace', 'Steve King', 'Adam Smith',
  'David Johnson', 'John Smith', 'John adams', 'John Quincy Adams', 'John'];

// match all the firstname followed by space and lastname
// firstname and lastname should be at least 1 character long
const regex = /^([A-Za-z]+)\s([A-Za-z]+)$/;

// find all matches and replace with lastname, firstname
const filterResult = str.filter((item) => regex.test(item));
console.log(filterResult);

const reverseName = filterResult.map((item) => item.replace(regex, '$2' + ', ' + '$1'));

console.log(reverseName)


//
const resultArray = [];
str.filter((item) => {
  regex.test(item) && (resultArray.push(item.replace(regex, '$2, $1')));
});

console.log(resultArray);