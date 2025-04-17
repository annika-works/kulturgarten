// adds 0 if a date is single digit
export const formatDate = (num) => {
    return num < 10 ? '0' + num : num;
}

export const formatDateString = (date) => new Date(date).setHours(0,0,0,0);

export function getInbetweenTimestamps(startTimestamp, endTimestamp) {
    const timestamps = [];
    for (let timestamp = startTimestamp; timestamp <= endTimestamp; timestamp += 86400000) {
        timestamps.push(timestamp);
    }
    return timestamps;
}