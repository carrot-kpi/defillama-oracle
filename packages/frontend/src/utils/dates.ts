export const isDateInThePast = (date: Date) => {
    return date.getTime() < Date.now();
};

export const dateToUnixTimestamp = (date: Date) =>
    Math.floor(date.getTime() / 1000);

export const unixTimestampToDate = (timestamp: number) =>
    new Date(timestamp * 1_000);
