const parseData = ({data, column}) => {
    const returnArray = [];
    for (let i = 0; i < data.length; i++) {
        const people = data[i];
        const returnObj = {};
        for (let j = 0; j < column.length; j++) {
            returnObj[column[j].name] = people[j];
        }
        returnArray.push(returnObj);
    }
    return returnArray;
}

export { parseData };
