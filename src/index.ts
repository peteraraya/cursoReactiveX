import { Observable, Subscriber, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log("siguiente [next] ", value),
  error: error => console.warn("error [obs]", error),
  complete: () => console.info("completado [obs]")
};

