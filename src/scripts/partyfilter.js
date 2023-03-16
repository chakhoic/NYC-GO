export function partyFilter(obj, arr, value) {
    if (value === "Default Party") {
        return arr;
    }
    let filtered_array = []
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]["party"] === value) {
            filtered_array.push(arr[i])
        }
    }

    return filtered_array

}