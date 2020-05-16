import moment from 'moment';

export const addDays = (date, days) => {
    return moment(date).add(days, 'd').valueOf()
}

export const getDayOfMonth = (date) => {
    return moment(date).format('DD')
}

export const getDayOfWeek = (date) => {
    return moment(date).format('ddd')
}

export const getMonthAndYearName = (date) => {
    return moment(date).format("MMM YYYY");
}