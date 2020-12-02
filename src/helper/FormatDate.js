import { format as formatDate, parseISO } from "date-fns";

export const dateFormater = (dateData) => {
    return formatDate(parseISO(dateData), "MM/dd/yyyy");
};