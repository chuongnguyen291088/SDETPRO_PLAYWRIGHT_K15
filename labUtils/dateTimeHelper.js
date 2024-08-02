
function generateDate(period, addOrRemoveDate) {
    const date = getDate(period, addOrRemoveDate);
    return convertDateToStringWithFormat(date);
}

function getDate(period, addOrRemoveDate) {
    let date = new Date;
    addOrRemoveDate = period.toUpperCase() === 'CURRENT' ? 0 : addOrRemoveDate;
    switch (period) {
        case 'CURRENT':
            return date;
        case 'FUTURE':
            date.setDate(date.getDate() + addOrRemoveDate);
            return date;
        case 'PAST':
            date.setDate(date.getDate() - addOrRemoveDate);
            return date;
    }
};

function convertDateToStringWithFormat(date) {
    const sdf = new Intl.DateTimeFormat("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
    return sdf.format(date);
};

module.exports = {
    generateDate,
};
