/*\ Logic for string-to-sum calculations \*/
//Dawson Wiebe

/*\ Calculates the sum of numbers provided within a string
str_numbers: String of numbers separated by a ',' symbol
return: int value of the calculated sum or null if incapable
\*/
function int_Add(str_numbers) {
    //Edge case for empty string
    if (!str_numbers) return 0;
    //Splits the string into an array, ignores newline
    var str_addends = str_numbers.replace(/\n/g, '').split(','),
    //Maps the array of strings to an array of Int
        int_addends = str_addends.map((str_num) => {
            //Fixed radix value to avoid any argument overlap in the map function
            return parseInt(str_num, 10);
        });
    //Adds together the sum
    var sum = int_addends.reduce((sum, addend) => {
        return sum + addend;
    });
    //Final error check and return
    if (isNaN(sum)) {return null;}
    else {return sum;}
}

/*\ Processes the input/output from the html page
id_input: element providing the string input
id_output: element reciving the numeric output
return: Promise{resolve: the calculated sum by int_Add, reject: the resulting error message}
\*/
function calculateSum(elm_in, elm_out) {
    return new Promise((resolve, reject) => {
        var sum_calc = 0;
        //Calculates sum while catching any errors
        try {
            sum_calc = int_Add(elm_in.value)
            if (sum_calc === null) throw new EvalError;
        } catch(error) {reject(error)}
        //Sends results to the output element and resolves
        elm_out.innerHTML = sum_calc.toString();
        resolve(sum_calc);
    });
}