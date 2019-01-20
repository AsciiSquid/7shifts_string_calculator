/*\ Logic for string-to-sum calculations \*/
//Dawson Wiebe

/*\ Calculates the sum of numbers provided within a string
str_numbers: String of numbers separated by a specified delimeter string
str_delimeter: String used to separate the provided numbers
return: int value of the calculated sum or null if incapable
\*/
function int_Add(str_numbers, str_delimeter) {
    //Edge case for empty string
    if (!str_numbers) return 0;
    //Splits the string into an array
    var str_addends = str_numbers.split(str_delimeter);
    //Maps the array of strings to an array of Int
    var int_addends = str_addends.map((str_num) => {
            //Fixed radix value to avoid any argument overlap in the map function
            let int = parseInt(str_num, 10);
            //Checks for negatives
            if (int < 0) {return NaN;}
            else {return int;} 
        });
    //Adds together the sum
    var sum = int_addends.reduce((sum, addend) => {
        return sum + addend;
    });
    //Final error check and return
    if (isNaN(sum)) {return null;}
    else {return sum;}
}

/*\ Parses the provided string and calculates the sum
str_input: string providing appropreate input
return: the calculated sum, or null
\*/
function string_to_Sum(str_input) {
    var str_num = "",
        str_del = ",";
    if (str_input.startsWith('//')) {
        //Retrieves specified delimiter
        str_del = str_input.slice(2).split('\n')[0];
        str_num = str_input.slice(str_del.length + 3);
    } else {
        str_num = str_input;
    }
    return int_Add(str_num, str_del);
}