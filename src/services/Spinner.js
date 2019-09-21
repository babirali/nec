import { Subject } from "rxjs";

const subject = new Subject();

export const spinnerService = {
    getMessage: () => subject.asObservable(),
    showLoading: (value) => subject.next(value),
};
