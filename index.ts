import value from "*.json";

interface Observer {
  next: (value: any) => void;
  error: (value: any) => void;
  complete: () => void;
}

const observer: Observer = {
  next: (value: string) => console.log(value),
  error: (value: any) => console.log("err ", value),
  complete: () => console.log("complete")
};
// observer.next("rrr");
// observer.error("xxx");
// observer.complete();

function source(observer: Observer) {
  let i = 0;
  setInterval(() => observer.next(i++), 1000);
}

source(observer);
